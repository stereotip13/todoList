import React, { useState } from 'react'
import './index.css'
export default function TodoList({ addTask }) {
  const [userInput, setUserInput] = useState('')
  //наше изначальное состояние пустое - юзерИнпут, его меняет сетЮзерИнпут посредством эвента - того, что человек напишет
  const handleChange = (event) => {
    setUserInput(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault() //чтобы отменить поведение по умолчанию в браузере
    addTask(userInput) //отрабатывает ф-ция с текущим значением стейта инпута
    setUserInput('') //обнуляем обратно юзерИнпут
  }
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task ..."
        onChange={handleChange}
        value={userInput}
        className="todo-input"
      />
      <button className="todo-button">SAVE</button>
    </form>
  )
}
// <ul>
//   {todos.map(item => <TodoItem key={item.id} {...item} />)}
// </ul>
