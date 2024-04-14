import { Navigate, Route, Routes } from "react-router-dom"
import { BronzesaintPage, GoldsaintPage, HomePage, SaintPage, SearchPage } from "../page"
import { Navbar } from "../../UI/components/Navbar"



export const SaintSeiyaRoutes = () => {
    return (
        <>
            <Navbar/>
            <div className="router_container">
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/bronze" element={<BronzesaintPage/>}/>
                    <Route path="/gold" element={<GoldsaintPage/>}/>
                    <Route path="/search" element={<SearchPage/>}/>
                    <Route path="/saint" element={<SaintPage/>}/>


                    <Route path="/*" element={<Navigate to='/'/>}/>
                </Routes>
            </div>
        </>
    )
}
