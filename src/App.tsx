import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <div className="App">
      <Header />
      <TodoList todos={[
        {title:"Project Work", isCompleted:false},
        {title:"Current bill", description:"Pay bore and house bill on phonepe" ,isCompleted:false},
        {title:"Workout", isCompleted:true}
      ]}/>
    </div>
  );
}

export default App;
