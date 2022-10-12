var express = require('express');
var router = express.Router();
var todos= require('../resource/todo')
// here one dot mean it will search for files inside current folder(inside routes), double dot means
// it goes one step outside(inside day4_expree) and if three dots, it will further move out
// console.log(todos);

router.get('/', function(req, res, next) {
  // res.render('index', { name: 'Liza Shrestha',age:'21', sem:'sixth' });
    res.render('home', {todosList:todos});
});

// router.get('/home', function(req, res, next){
//   res.render('home');
// });

router.get('/add-to-do', function(req, res, next){
  res.render('addToDo', {title:"Add to do"});
});

router.post('/save-to-do', function(req, res, next){
  todos.push({...req.body, _id:`00${todos.length}`});
  res.redirect('/');
});

//'/delete-tot-do/:index' here :/ used for dynamic values, similar to jinja
// router.get ('/delete-to-do/:index', function(req, res, next){
//   console.log(req.params.index)
//   todos.splice(req.params.index, 1); //to remove the element at that index
//   res.redirect('/');
// });

router.get ('/delete-to-do/:id', function(req, res, next){
  console.log(req.params.id)
  todos.splice(req.params.id, 1); //to remove the element at that index
  res.redirect('/');
});

// router.get ('/delete-to-do/:index', function(req, res, next){
//   console.log(req.params.index)
//   todos.splice(req.params.index, 1); //to remove the element at that index
//   res.redirect('/');
// });

router.post('/edit-to-do/:id', function (req, res, next){
  console.log("Hello")
  console.log(req.params);
  console.log(req.body);
  console.log("Biee");
  const index=todos.findIndex(todo=>todo._id===req.params.id);
  todos.splice(index, 1, {...req.body, _id:req.params.id});
  res.redirect('/');
});

router.get('/open-update-form/:id', function(req, res, next){
  const todotodo = todos.find(todo=>todo._id===req.params.id)
  res.render('editToDo', {todo:todotodo});
});

module.exports = router;
