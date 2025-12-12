
"use client";

import { useState } from "react";
import TodoList from "@/components/TodoList";

export default function TodoPage() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    function addTodo() {
        if (!input.trim()) return;
        setTodos([...todos, input]);
        setInput("");
    };

    return (
        <section className="todo__container">
            <h1 className="todo__heading">
                To-do App
            </h1>
            <input 
                className="todo__inputContainer" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="New to-do"
                style={{ padding: 8, marginRight: 8 }}    
            />
            <button className="todo__button" onClick={addTodo}>Add</button>
            <TodoList todos={todos} />
        </section>
    )
}