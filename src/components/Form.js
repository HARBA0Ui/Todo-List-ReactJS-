import { useEffect } from "react"

const Form = ({ input, setInput, todos, setTodos, status, setStatus, filteredTodos, setFilteredTodos }) => {
    
    function handleStatus(e){
        console.log(e.target.value)
        setStatus(e.target.value)
    }

    useEffect(()=> {
        filterTodos()
    }, [todos, status])

    function filterTodos(){
        switch(status){
            case 'completed':
                setFilteredTodos(todos.filter(el => el.completed === true)) 
                break;
            case 'uncompleted': 
                setFilteredTodos(todos.filter(el => el.completed === false)) 
                break;
            default:
                setFilteredTodos(todos);
                break
        }
    }
    
    function handleChange(e){
        setInput(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()
        if(input === ''){
            return
        }else{
            setTodos([...todos, 
                {
                    id: Math.random() * 1000,
                    text: input,
                    completed : false,
                }])
                setInput("");
        }

    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" className="input-text" onChange={handleChange} value={input}/>
            <button><i className="fa-solid fa-circle-plus"></i></button>
            <div className="selection">
                <select name="" id="" onChange={handleStatus}>
                    <option value="all">all</option>
                    <option value="completed">completed</option>
                    <option value="uncompleted">uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;