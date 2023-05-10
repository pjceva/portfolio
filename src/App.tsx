import { Contact } from "./pages/contact/contact"
import { Home } from "./pages/home/home"
import { Skills } from "./pages/skills/skills"
import { Trajectory } from "./pages/trajectory/trajectory"
import { GlobalStyle } from "./styles/global"

function App() {

  return (
    <>
      <GlobalStyle />
      <Home />
      <Skills />
      <Trajectory />
      <Contact />
    </>
    
  )
}

export default App
