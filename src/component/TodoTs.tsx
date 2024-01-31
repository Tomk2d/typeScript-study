import React, { useState } from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import TodoItemsTs, {TodoItem} from "./Todo2Ts"

const TodoTs: React.FC = () => {
    const [text, setText] = useState<string>('');
    const [todo, setTodo] = useState<TodoItem[]>([]);
    const [color, setColor] = useState<string>('');

    const saveText = (e:React.ChangeEvent<HTMLInputElement>): void => {
        setText(e.target.value);
    }

    const addTodo = (): void => {
        setTodo(prevTodo => [
            ...prevTodo,
            {
                content: text,
                backcolor: color
            },
        ]);
        setText('');
    }

    const updateTodo = (index: number, updatedContent: string): void => {
        setTodo(prevTodo => {
            const updatedTodo = [...prevTodo];
            updatedTodo[index].content = updatedContent;
            return updatedTodo;
        });
    };
    
    const deleteTodo = (index: number): void => {
        setTodo(prevTodo => {
            const updatedTodo = [...prevTodo];
            updatedTodo.splice(index, 1);
            return updatedTodo;
        });
    };

    const addColor = (e:React.ChangeEvent<HTMLInputElement>): void => {
        setColor(e.target.value);
    }

    return (
        <div>
            <div>
                <h1>Todo App</h1>
                <input 
                    type="text" 
                    placeholder="일정을 입력하세요"
                    value={text}
                    onChange={saveText}
                    style={{
                        color: 'black', marginTop: '100px', marginBottom: '10px'
                    }}
                />
                <button onClick={addTodo}>일정 추가</button>
            </div>

    
            <TodoItemsTs addColor={addColor} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        </div>
    );
}

export default TodoTs;
