'use strict'

const Route = use('Route')
/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

//const Route = use('Route')
//Route.on('/').render('welcome')

Route.get('/', 'CvController.index')
Route.get('/cvs', 'CvController.table')
Route.get('/cvs/create', 'CvController.create').middleware('auth')
Route.post('/cvs/create', 'CvController.doCreate').middleware('auth')
Route.get('/cvs/:id', 'CvController.show')
Route.get('/cvs/:id/edit', 'CvController.edit').middleware('auth')
Route.post('/cvs/:id/edit', 'CvController.doEdit').middleware('auth')
Route.get('/cvs/:id/delete', 'CvController.doDelete').middleware('auth')
Route.get('/cvs/:id/rate', 'CvController.rate').middleware('auth')
Route.post('/cvs/:id/rate', 'CvController.doRate').middleware('auth')
Route.get('/category/create', 'CategoryController.create').middleware('auth')
Route.post('/category/create', 'CategoryController.doCreate').middleware('auth')

Route.get('/register', 'UserController.register')
Route.post('/register', 'UserController.doRegister')
Route.get('/login', 'UserController.login')
Route.post('/login', 'UserController.doLogin')
Route.get('/logout', 'UserController.doLogout')