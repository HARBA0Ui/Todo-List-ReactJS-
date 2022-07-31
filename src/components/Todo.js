const Todo = ({ text, todo, todos, setTodos, filteredTodos}) => {

    function handleDelete(){
        setTodos(todos.filter(el => el.id !== todo.id))
    }

    function handleComplete(){
        setTodos(todos.map(el => {
            if(el.id === todo.id){
                return {
                    ...el,
                    completed: !el.completed
                }
            }
            return el
        }))
    }

    return ( 
        <div className="todo">
        <li className={`todo-item ${todo.completed ? 'completed': ''}`}>
            <div className="text">{text}</div>
            <button className='complete-btn' onClick={handleComplete}><i className="fa-solid fa-check"></i></button>
            <button className='remove-btn' onClick={handleDelete}><i className="fa-solid fa-trash"></i></button>
        </li>
        </div>
     );
}
 
export default Todo;