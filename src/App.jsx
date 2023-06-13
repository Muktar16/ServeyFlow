import { ServeyContextProvider } from "./contexts/ServeyContext/ServeyContext"
import Homepage from "./pages/Homepage"

function App() {
  return (
    <ServeyContextProvider>
      <Homepage></Homepage>
    </ServeyContextProvider>
  )
}

export default App
