import React from 'react'
import { RiCloseCircleLine } from 'react-icons/ri' //подгружаем иконку крестика
import './index.css'

export default function TodoItem({ todo, toggleTask, removeTask }) {
  //передаем из аппа туду, тоглтаск, ремувтаск
  return (
    <div
      className={todo.comleted ? 'todo-row complete' : 'todo-row'} //в зависимости от состояния complete тру или фолз будет разный дизайн
    >
      <div
        className="todo-row-main"
        onClick={() => toggleTask(todo.id)} //кликаем, чтобы поменять свойство complete
      >
        {/* тодо.таск мы получаем из апп через пропсы */}
        {todo.task}
      </div>
      <div className="iconsContainer">
        {/* //берем на сайте react-icons.github.io иконка крестика, при нажатии на элемент вызывается колбэк (передаем в другую функцию параметр) удаления элемента*/}
        <RiCloseCircleLine onClick={() => removeTask(todo.id)} />
      </div>
    </div>
  )
}
