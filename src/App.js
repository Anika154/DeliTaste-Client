import './App.css';
import { BrowserRouter as Router, Route, Routes, Switch} from "react-router-dom";
import Home from './Pages/Home/Home';
import Header from './Pages/Home/Header/Header';
import Login from './Pages/Home/Login/Login';
import Order from './Pages/Order/Order';



function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>  
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/item/:id" element={<Order />}/>
      </Routes>
  </Router>
      
      
      
    </div>
  );
}

export default App;
