import TodoTile from "../components/TodoTile";
import { Link } from "react-router-dom";




const Todos = () => {
    return (
        <>
            <h1>All todos</h1>
            <div>
                <TodoTile title={'Creating a React App'}/>
                <TodoTile title={'Install Tailwind CSS'}/>
                <TodoTile title={'Commit code to GitHub'}/>
                <TodoTile title={'Host it on Netlify'}/>
            </div>
            <Link to={'/add'}>Add Todo</Link>
        </>
    )
}

export default Todos;