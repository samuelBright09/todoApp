
import './App.css';
import Todos from './pages/Todos';
import AddTodo from './pages/AddTodos';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const todoRouter = createBrowserRouter([
  { path: '/', element: <Todos /> },
  {path: '/add', element: <AddTodo /> }
]);

function App() {

  return (
    <>
      <RouterProvider router={todoRouter}/>
    </>
  )
}

export default App
