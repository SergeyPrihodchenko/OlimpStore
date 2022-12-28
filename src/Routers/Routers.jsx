import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPanel from "../Components/AdminPanel";

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AdminPanel/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Routers;