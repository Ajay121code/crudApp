import './App.css';
import Create from './components/create';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
// test comment
function App() {

  const router = createBrowserRouter([

    {
      path: "/",
      element: <Create />
    },

    {
      path: "Create",
      element: <Create />
    }

  ])

  return (
    <div className='main'>
      <h2>Welcome to my crud app.</h2>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;