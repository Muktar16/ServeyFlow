import Homepage from "./pages/Homepage/Homepage"
import { ServeyContextProvider } from "./utils/contexts/ServeyContext/ServeyContext"

function App() {
  return (
    <ServeyContextProvider>
      <Homepage></Homepage>
    </ServeyContextProvider>
  )
}

export default App
