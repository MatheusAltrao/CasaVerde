
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import BigCard from './Components/BigCard/BigCard'
import Promotion from './Components/Promotion/Promotion'
import Footer from './Components/Footer/Footer'
function App() {

  return (
    <div className="main">
      <Header />
      <Home />
      <div className="bigcard-area max-width">
        <BigCard />
      </div>
      <Promotion />
      <Footer />
    </div>
  )
}

export default App
