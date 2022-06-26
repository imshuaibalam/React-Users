import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Adduser from './components/users/Adduser';
import Navbar from './components/layouts/Navbar';
import Error from './components/pages/ErrorPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Edituser from './components/users/Edituser';
import ViewUser from './components/users/ViewUser';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path='/users/add' element={<Adduser/>}/>
              <Route exact path='users/edit/:id' element={<Edituser/>}/>
              <Route exact path='users/:id' element={<ViewUser/>}/>
              <Route path='*' element={<Error />} />
            </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
