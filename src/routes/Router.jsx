import {createBrowserRouter} from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>
    },
    {
        path: "/about",
        element: <About></About>
    },
    {
        path: "/contact",
        element: <Contact></Contact>
    }
]);

export default router;