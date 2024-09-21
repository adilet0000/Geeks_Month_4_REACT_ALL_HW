

function Todo({ todo, deleteTodo, checkTodo, updateTodo }) {
    return (
        <li>
            <input type="checkbox"
                onChange={(e) => checkTodo(todo.id, e.target.checked)} />
            <span className={todo.status && "checked"}>{todo.title}</span>
            <button onClick={() => updateTodo(todo.id)}>обновить</button>
            <button onClick={() => deleteTodo(todo.id)}>удалить</button>
        </li>
    );
}

export default Todo;