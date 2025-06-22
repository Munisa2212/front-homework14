import { useContext } from "react"
import { Context } from "./context/Context"
import HomeRoute from "./routes/HomeRoute"
import LoginRoute from "./routes/LoginRoute"

function App() {
  const {token} = useContext(Context)
  if(token){
    return <HomeRoute/>
  }else{
    return <LoginRoute/>
  }
}

export default App
