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
    <form onSubmit={onSubmit} className='flex w-full items-center space-x-2 bg-gray-200 p-3 rounded-md'>
        <input type="text" name="todo-text" required placeholder='할 일을 입력하세요.' className='bg-white'/>
        <button>추가하기</button>
    </form>
  )
}

export default TodoForm