import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from '../pages/Home/Home'
import NotFound from "../pages/NotFound/NotFound"
import DefaultLayout from '../Layouts/DefaultLayout'
import CleanLayout from '../Layouts/CleanLayout'
import Login from '../pages/Login/Login'
import Dashboard from "../pages/Dashboard/Dashboard"

function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>

                <Route element={<CleanLayout/>}>
                    <Route path="/" element={<Login/>} />
                </Route>

                <Route element={<DefaultLayout/>}>
                    <Route path="/home" element={<Home/>} />
                </Route>

                <Route element={<CleanLayout/>}>
                    <Route path="/login" element={<Login/>} />
                </Route>

                <Route element={<DefaultLayout/>}>
                    <Route path="/dashboard" element={<Dashboard/>} />
                </Route>

                <Route element={<DefaultLayout/>}>
                <Route path="*" element={<NotFound />} /> {/* Rota "catch-all" para Not Found */}
                </Route>

            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes