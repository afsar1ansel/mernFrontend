import { Route, Routes } from "react-router-dom"
import Home from "../page/Home"
import Register from "../page/Register"
import Login from "../page/Login"


const AllRoutes = () =>{

    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    )
}

export default AllRoutes