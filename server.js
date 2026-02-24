const express = require('express')
const app = express()

app.use(express.json())

let todos = []

// Add todo
app.post('/todos', (req,res)=>{
  const todo = {
    id: Date.now(),
    text: req.body.text
  }
  todos.push(todo)
  res.json(todo)
})

// Get todos
app.get('/todos', (req,res)=>{
  res.json(todos)
})

// Delete todo
app.delete('/todos/:id', (req,res)=>{
  todos = todos.filter(t => t.id != req.params.id)
  res.json({message:"Deleted"})
})

app.listen(3000, ()=> console.log("Server running"))