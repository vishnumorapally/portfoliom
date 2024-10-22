import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Loader from "../Pages/Loader";
import About from "../Pages/About";
import Skills from "../Pages/Skills";
import Contact from "../Pages/Contact";
import Projects from "../Pages/Projects";
import Nolive from "../Pages/Nolive";

const router = createBrowserRouter([
    {   
        path : "",
        element : <App/>,
        children : [
            {
                path : "/",
                element : <Home/>
            },
            {
                path : "loader",
                element : <Loader/>
            },
            {
                path : "about",
                element : <About/>
            },
            {
                path : "skills",
                element : <Skills/>
            },
            {
                path : "projects",
                element : <Projects/>
            },
            {
                path : "contact",
                element : <Contact/>
            },
            {
                path : "nolive",
                element : <Nolive/>
            }
        ]
    }
])

export default router