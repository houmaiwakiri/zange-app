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
        id: taskList.length,
        text: inputText,
        completed: false
      }
    ]);
    //console.log(taskList);
    //入力した文字を消す
    setInputText("")
  }

    const handleChange = (e) => {
      setInputText(e.target.value);
    } 
  return (
    <div>
        <div className="inputForm">
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={inputText}/>
                <button>
                <i className ="fa-regular fa-face-frown-open"></i>
                </button>
            </form>
        </div>
    </div>
  )
};
