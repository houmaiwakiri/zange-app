import React from 'react';

export const TodoList = ({taskList, setTaskList}) => {
  return (
    <div className= "todoList">
        <div className= "todos">
            {taskList.map(task =>(
                <div className= "todo">
                    <div className= "todoText">
                        <span>悪いことをしました</span>
                    </div>
                    <div className= "icons">
                        <button>
                        <i className="fa-solid fa-face-grin-squint-tears"></i>
                        </button>
                    </div>
                </div>   
            ))}          
        </div>
    </div>
  )
};
