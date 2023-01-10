import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';

function App() {

    const [tasks,setTasks] = useState<TaskType[]>([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
        {id: 4, title: 'Redux', isDone: true}
    ])

    function removeTask(id: number) {
        let filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks)
    }

    return (
        <div className="App">
            <Todolist
                removeTask={removeTask}
                title="What to learn"
                tasks={tasks}/>
        </div>
    );
}

export default App;
