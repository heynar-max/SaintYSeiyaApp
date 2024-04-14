import { AuthProvider } from "./auth/context/AuthProvider"
import { AppRouter } from "./router/AppRouter"
import './style/Style.css'


export const SaintSeiyaApp = () => {
  return (
    <AuthProvider>
      <AppRouter/>
    </AuthProvider>
    
  )
}

