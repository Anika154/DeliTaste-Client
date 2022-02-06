import './App.css';
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';
import Header from './Pages/Home/Header/Header';
import Login from './Pages/Home/Login/Login';
import Order from './Pages/Order/Order';
import initializeAuthentication from './Pages/Home/Login/Firebase/firebase.init';
import Footer from './Pages/Footer/Footer';
import useFirebase from './Hooks/useFirebase';
import AddOffer from './Pages/AddOffer/AddOffer';
import AllOrder from './Pages/AllOrder/AllOrder';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import MyOrder from './Pages/MyOrder/MyOrder';


initializeAuthentication();


function App() {

  const {user} =useFirebase();
  console.log(user);
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/item/:id"
            element={
              user.email ? (
                <PlaceOrder />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          
          <Route path="/addoffer" element={
            user.email ? (
              <AddOffer/>
            ):(
              <Navigate to="/login" />
            )
          }>
          </Route>
          
          
          <Route path="/myorder" element={
            user.email ? (
              <MyOrder/>
            ):(
              <Navigate to="/login" />
            )
          }>
          </Route>
          <Route path="/allorder" element={
            user.email ? (
              <AllOrder/>
            ):(
              <Navigate to="/login" />
            )
          }>
          </Route>
          
        </Routes>
        <Footer></Footer>
      </Router>



    </div>
  );
}

export default App;
