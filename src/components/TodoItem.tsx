import React from "react"
import { Todo } from "../entities/Todo"


export const TodoItem: React.FC<Todo>= ({title, description, isCompleted}) => {
    return (
        <article className="tot-item">
            <h1>{title}</h1>
            <p>{description}</p>
            <input type="checkbox" defaultChecked={isCompleted} />
        </article>
    )
}