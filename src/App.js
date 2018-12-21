import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import Content from './Components/Content';
import Footer from './Components/Footer';
import LoginPage from './Page/LoginPage';
import About from './Components/About';
import MyCart from './Components/MyCart';
import Payment from './Components/Payment';
import Home from './Page/Home';
import Tes from './Components/Tes';

class App extends Component {
  render() {
    return (
      <div id="page-top">
        <Navbar />
        {/* <Carousel /> */}

        <div>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={LoginPage} />
          <Route path="/about" component={About} />
          <Route path="/payment" component={Payment} />
          <Route path="/mycart" component={MyCart} />
        </div>
        <Footer />

      </div>
    )
  }
}

export default App;