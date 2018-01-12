import mongoose from 'mongoose';

const Todo = mongoose.model('Todos', { 
  id: { type: mongoose.Schema.ObjectId, auto: true },
  title: String,
  checked: Boolean
});



export default Todo;