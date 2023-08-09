import React, { useState } from 'react'
import TodoList from './TodoList'
import TodoItem from './TodoItem'
import './index.css'

export default function App() {
  const [todos, setTodos] = useState([])
  //далее ф-ции для добавления задания, удаления задания, проставления выполнено заданию
  const addTask = (userInput) => {
    //в тудуЛист передали значение и тут отрабатываем его
    if (userInput) {
      //если в юзер инпут что-то есть
      const newTask = {
        id: Date.now(), //генерируем айдишник
        task: userInput, // передаем значение из инпута, потом его
        completed: false, //статус завершено нет
      }
      setTodos([...todos, newTask]) //ракрываем массив тудус и в конец добавляем новый таск, если махнуть местами будет в начале
    }
  }
  //принимает id пользователя
  const remooveTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]) //копируем обратно тудус, метод filter() позволяет получить новый массив, отфильтровав элементы с помощью переданной колбэк-функции
    //возвращаются все туду, которые не равны id
  }
  const toggleTask = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, comleted: !todo.comleted } : { ...todo }
      ), //если id равны, то если комлете было тру, станет фалз и наоборот, если не равны просто возвращаем туду
    ])
  }

  return (
    //классName подтягивается из App.css
    <div className="todo-app">
      <h1 className="h1"> todo List</h1>
      <TodoList addTask={addTask} />
      {/* //тег hr задает разделительную горизонтальную линию */}
      <hr className="separator" />
      {/* надо в туду лист передать каждое из заданий, пробежаться по ним, обязательно передать ключ */}
      {todos.map((todo) => (
        <TodoItem //сколько раз замапится столько и отрисовывается штук после линии
          todo={todo}
          key={todo.id}
          removeTask={remooveTask}
          toggleTask={toggleTask}
        />
      ))}
    </div>
  )
}
