import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';

interface Props{
    addColor : any,
    todo : any,
    updateTodo : any,
    deleteTodo : any,
}

export type TodoItem = {
    content: string;
    backcolor: string;
}

const TodoItemsTs : React.FC<Props>= ({addColor, todo, updateTodo, deleteTodo})=>{
    return(
        <div>
            <button value='blue' onClick={addColor} style={{marginRight : '6px'}}>blue</button>
            <button value='skyblue' onClick={addColor} style={{marginRight : '6px'}}>skyblue</button>
            <button value='pink' onClick={addColor} style={{marginRight : '6px'}}>pink</button>
            <button value='white' onClick={addColor}>white</button>

            <div style={{display : "flex", flexDirection:'column', alignItems : 'center', marginTop : '30px', }}>
                <Form.Label htmlFor="exampleColorInput" style={{fontSize : '30px'}}>Color picker</Form.Label>
                <Form.Control
                    type="color"
                    id="exampleColorInput"
                    defaultValue="#563d7c"
                    title="Choose your color"
                    onClick={addColor}
                />
            </div>

            
            <h1 style={{marginTop : '80px', marginBottom : '40px'}}>Todo List</h1>
            {todo.map((t : TodoItem, index : number) => (
                <div
                    key={index}
                    className="todo-item"
                    style={{ backgroundColor : t.backcolor, margin : '10px 150px', fontSize: '20px' ,borderRadius: '10px'}}
                >
                    <div>{index+1}. {t.content}</div>
                    <div>
                        <button onClick={() => updateTodo(index, prompt("수정할 내용을 입력하세요"))}>수정</button>
                        <button onClick={() => deleteTodo(index)}>삭제</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TodoItemsTs;