import {  Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"
import { SaintSeiyaRoutes } from "../saintSeiya/routes/SaintSeiyaRoutes"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"


export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="login/*" element={
                        <PublicRoute>
                            <Routes>
                            <Route path="/*" element={<LoginPage />} />
                            </Routes>
                        </PublicRoute>}
                    />

                    <Route  path="/*" element={
                        <PrivateRoute>
                            <SaintSeiyaRoutes/>
                        </PrivateRoute>
                    }/>
            </Routes>
        </>
    )
}
