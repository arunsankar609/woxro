
import './App.css';
import AdminPanel from './adminpanel/AdminPanel';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Header from './components/Header';
import Services from './components/Services';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:[ <Header/>,<Banner/>,<Services/>, <Contact/>]
    },
    {
      path:"/admin",
      element:<AdminPanel/>
    },
  ])
  return (
    <div className='bg-black w-full h-auto'>
    <div className="App  flex justify-center ">
      <div className='w-[80%] bg-slate-300 flex flex-col justify-center'>
       <RouterProvider router={router} />
      </div>
     
    </div>
    
    </div>
  );
}

export default App;
