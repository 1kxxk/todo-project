"use client"

import { createTodo } from '@/api/todo-api';
import React, { FormEvent } from 'react'

const TodoForm = () => {
    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const from = e.currentTarget;
        const formData = new FormData(form)
        const todoText = formData.get("todo-text") as string;

        await createTodo(todoText)

        form.reset();
    };

  return (
    <form onSubmit={onSubmit}>
        <input type="text" name="todo-text" required />
        <button>추가하기</button>
    </form>
  )
}

export default TodoForm