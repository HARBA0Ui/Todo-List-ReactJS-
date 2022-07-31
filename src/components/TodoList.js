import Todo from './Todo'

const TodoList = ({ todos, setTodos, filteredTodos }) => {
    return ( 
        <div className="todo-list">
            <ul>
                {filteredTodos.map(todo => (<Todo 
                text={todo.text}
                key={todo.id}
                setTodos={setTodos}
                todo={todo}
                todos={todos}
                />))}
            </ul>
        </div>
     );
}
 
export default TodoList;