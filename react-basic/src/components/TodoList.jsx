import React from 'react';

export const TodoList = ({taskList, setTaskList}) => {

    const handleDelate = (id) =>{
        /* タスク削除*/
        setTaskList(taskList.filter((task) => task.id !== id));
    }
    const handleCompleted = (id) => {
        /*タスク完了のスタイル変更 */
        setTaskList(taskList.map((task) =>{
            if(id === task.id){
                return {
                    ...task,
                    completed: !task.completed
                };
            }
            return task;
        }))
    };

  return (
    <div className= "todoList">
        <div className= "todos">
            {taskList.map((task ,index) =>(
                //三項演算子${tuleかfalse ? "tlueならAを追加" : "falseならBを追加"}
                <div className= {`todo ${task.completed ? "completed" : ""}`} key={index}>
                    <div className= "todoText">
                        <span>{task.text}</span>
                    </div>
                    <div className= "icons">
                        <button onClick={() => handleCompleted(task.id)}>
                        <i className="fa-solid fa-face-grin-squint-tears"></i>
                        </button>
                        <button onClick={() => handleDelate(task.id)}>
                        <i className="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </div>   
            ))}          
        </div>
    </div>
  )
};
