import React from "react"
import { Todo } from "../entities/Todo"
import './TodoItem.scss'

export const TodoItem: React.FC<Todo>= ({title, description, isCompleted}) => {
    return (
        <article className="todo-item">
            <section className="todo-item-text">
                <h1>{title}</h1>
                <p>{description}</p>
                <input type="checkbox" defaultChecked={isCompleted} />
            </section>
        </article>
    )
}