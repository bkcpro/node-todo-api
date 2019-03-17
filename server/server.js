var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

// var newTodo = new Todo({
//   text: 'Finish Todo App'
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (err) => {
//   console.log('Unable to save todo');
// });

// var otherTodo = new Todo({
//   text: 'Task2',
//   completed: false,
//   completedAt: 1
// });
//
// otherTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (err) => {
//   console.log('Unable to save todo');
// });

//User model

var User = mongoose.model('User', {
  email: {
    required: true,
    minlength: 1,
    trim: true,
    type: String
  }
});

var newUser = new User({
  email: "bkcpro.kun@gmail.com"
});

newUser.save().then((res) => {
  console.log('User saved: ');
  console.log(JSON.stringify(res, undefined, 2));
}, (err) => {
  console.log('Unable to save user ', err);
});
