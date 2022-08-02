import React from 'react'
import './App.css';
import Home from './component/Home';
import Nav from './component/Nav';
import {Routes,Route} from "react-router-dom";
import Product from './component/Product';
import Footer from './component/Footer';
import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'
import About from './component/About';
import Blog from './component/Blog';
import Contact from './component/Contact';

function App() {
  return (
    <div className="App">
      <ReactNotifications />
      <Nav/>
      <Routes>
        <Route exact path="/shopping" element={<Home/>}/>
        <Route path="/shopping/about" element={<About/>}/>
        <Route path="/shopping/blog" element={<Blog/>}/>
        <Route path="/shopping/contact" element={<Contact/>}/>
        <Route path="/shopping/product/:id" element={<Product/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
