import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from "./context/auth-context"
import { RoutesApp } from "./routes/routes-app"

function App() {

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <RoutesApp />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
