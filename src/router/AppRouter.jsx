import {  Route, Routes } from "react-router-dom"
import { Navbar } from "../UI/components/Navbar"
import { LoginPage } from "../auth/pages/LoginPage"
import { SaintSeiyaRoutes } from "../saintSeiya/routes/SaintSeiyaRoutes"


export const AppRouter = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="login" element={<LoginPage/>}/>


                <Route path="/*" element={<SaintSeiyaRoutes/>}/>

            </Routes>
        </>
    )
}
