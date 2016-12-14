'use strict'

const Category = use('App/Model/Category')
const Cv = use('App/Model/Cv')
const Rating = use('App/Model/Rating')
const Validator = use('Validator')

class CvController {
    * index(request, response) {
    const categories = yield Category.all()

    for (let category of categories) {
      const topCvs = yield category.cvs().limit(3).fetch()
      category.topCvs = topCvs.toJSON()
    }

    yield response.sendView('main', {
      categories: categories.toJSON()
    }) 
   }

    * table(request, response) {
    const cvs = yield Cv.all()
    const categories = yield Category.all()

    yield response.sendView('table', {
      cvs: cvs.toJSON(),
      categories: categories.toJSON()
    }) 
    }
  

  * create(request, response) {
    const categories = yield Category.all();

    yield response.sendView('createCv', {
      categories: categories.toJSON()
    });
  }

  * doCreate(request, response) {
    const rateData = request.except('_csrf');
    const rules = {
      name: 'required',
      age: 'required'
    }
    const validation = yield Validator.validateAll(rateData, rules);
    if (validation.fails()) {
      yield request
        .withAll()
        .andWith({ errors: validation.messages() })
        .flash()

      response.redirect('back')
      return
    }

    rateData.user_id = request.currentUser.id
    yield Cv.create(rateData);

    response.redirect('/');
  }

  * show(request, response) {
    const id = request.param('id')
    const cv = yield Cv.find(id)
    if (!cv) {
      response.notFound('Cv does not exist')
      return
    }
    yield cv.related('category').load()

    const ratings = yield Rating.all()
    
    yield response.sendView('showCv', {
      cv: cv.toJSON(),
      ratings: ratings.toJSON()
    })
  }

  * edit(request, response) {
    const id = request.param('id')
    const cv = yield Cv.find(id)

    if (request.currentUser.id !== cv.user_id) {
      response.unauthorized('Nincs jog')
      return
    }

    const categories = yield Category.all();

    console.log(cv.toJSON())

    yield response.sendView('editCv', {
      categories: categories.toJSON(),
      cv: cv.toJSON(),
    });
  }

  * doEdit(request, response) {
    const rateData = request.except('_csrf');
    const rules = {
      name: 'required',
      age: 'required'
    }
    const validation = yield Validator.validateAll(rateData, rules);
    if (validation.fails()) {
      yield request
        .withAll()
        .andWith({ errors: validation.messages() })
        .flash()

      response.redirect('back')
      return
    }

    const id = request.param('id')
    const cv = yield Cv.find(id)

    if (request.currentUser.id !== cv.user_id) {
      response.unauthorized()
      return
    }

    cv.name = rateData.name
    cv.age = rateData.age
    cv.education = rateData.education
    cv.about = rateData.about
    cv.category_id = rateData.category_id

    yield cv.save()

    response.redirect('/');
  }

  * doDelete(request, response) {
    
    const id = request.param('id')
    const cv = yield Cv.find(id)
    if (request.currentUser.id !== cv.user_id) {
      response.unauthorized('Nincs jog')
      return
    }
    if (!cv) {
      response.notFound('Cv does not exist')
      return
    }
    
    const ratings = yield Rating.all()

    for (let rating of ratings) {
      if(rating.cv_id == id){
         yield rating.delete()
      }
    }

    yield cv.delete()
    response.redirect('/');
  }

  * rate(request, response) {
    const id = request.param('id')
    const cv = yield Cv.find(id)

    yield response.sendView('rateCv', {
      cv: cv.toJSON(),
    })
  }

  * doRate(request, response) {
    const rateData = request.except('_csrf');
    const rules = {
      rate: 'required'
    }
    const validation = yield Validator.validateAll(rateData, rules);
    if (validation.fails()) {
      yield request
        .withAll()
        .andWith({ errors: validation.messages() })
        .flash()

      response.redirect('back')
      return
    }

    const id = request.param('id')
    rateData.cv_id = id
    yield Rating.create(rateData);

    response.redirect('/');
  }

  * ajaxDelete(request, response) {
    const id = request.param('id')
    const cv = yield Cv.find(id)
    if (!cv) {
      response.notFound('Hiba történt a feldolgozás során!')
      return
    }
    yield cv.delete()
    response.ok({success: true});
  }


}

module.exports = CvController
