import {Route, Routes } from "react-router-dom";
import AdminPanel from "../Components/AdminPanel";

const Routers = () => {
    return (
            <Routes>
                <Route path="/" element={<AdminPanel/>}/>
            </Routes>
    );
}

export default Routers;