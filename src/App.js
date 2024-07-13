import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Navigation';
import Homepage from './customer/components/pages/Homepage/Homepage';
import Footer from './customer/components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <div>
      <Homepage/>
      </div>
    <Footer/>
    </div>
  );
}

export default App;
