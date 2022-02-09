import React, { useState } from 'react';

export const InputForm = ({taskList, setTaskList}) => {

  const [inputText, setInputText] = useState("")

  const handleSubmit = (e) => {
    //再レンダリングの機能が無くなる。
    e.preventDefault();

    //add task
    setTaskList([
      ...taskList,
      {
        text: inputText
      }
    ]);
    console.log(taskList);
  }

    const handleChange = (e) => {
      setInputText(e.target.value);
    } 
  return (
    <div>
        <div className="inputForm">
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange}/>
                <button>
                <i className ="fa-regular fa-face-frown-open"></i>
                </button>
            </form>
        </div>
    </div>
  )
};
