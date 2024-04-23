import './App.css';
import Create from "./components/create";
import Read from "./components/read";
import Update from "./components/update";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
// test comment
function App() {

  const router = createBrowserRouter([

    {
      path: "crudApp",
      element: <Create />
    },

    {
      path: "Create",
      element: <Create />
    },

    {
      path: "/read",
      element: <Read />
    },
    
    {
      path: "/update",
      element: <Update />
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