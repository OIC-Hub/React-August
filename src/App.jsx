import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Props from "./components/Props"

function App(){
  return(
    <>
    <Navbar/>
      <h1>Home Page</h1>
      <Props name="Adeoluwa" age="30" job="software eng."/>
    <Footer/>
    </>
  )
}

export default App;