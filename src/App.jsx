import Footer from "./common/layout/footer/Footer";
import Navbar from "./common/layout/navbar/Navbar";
import './App.css'
import Navigation from "./navigation/Navigation";

const App = () => {
  return (
    <>
      <div className=" bg-zinc-100">
        <Navbar />
        <div className="md:px-32 px-4">
          <Navigation />
        </div>
        <Footer />
      </div>
    </>
  )
}
export default App;