
import './App.css';
import Hero from './components/common_components/Hero/Hero';
import Navbar from './components/common_components/Navbar/Navbar';
import MainPage from './components/Pages/MainPage';
import Footer from "./components/common_components/Footer/Footer";

function App() {
  return (
    <div className="App">
   <Navbar/>
   <MainPage/>
   <Footer/>
    </div>
  );
}

export default App;
