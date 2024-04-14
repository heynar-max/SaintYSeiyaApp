import {  HashRouter, Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "../saintSeiya/page/HomePage"
import { BronzesaintPage } from "../saintSeiya/page/BronzesaintPage"
import { GoldsaintPage } from "../saintSeiya/page/GoldsaintPage"
import { Navbar } from "../UI/components/Navbar"


export const AppRouter = () => {
    return (
        <HashRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/bronze" element={<BronzesaintPage/>}/>
                <Route path="/gold" element={<GoldsaintPage/>}/>

                <Route path="/*" element={<Navigate to="/"/>}/>
            </Routes>
        </HashRouter>
    )
}
