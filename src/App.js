import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './Components/LandingPage/landingPage';
import Home from './Components/Home/home';
import CreateDog from './Components/CreateDog/createDog.js';
import DogDetail from './Components/DogDetail/dogDetail.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage/>} />
        <Route exact path="/dogs" element={<Home/>} />
        <Route exact path="/createDog" element={<CreateDog/>} />
        <Route exact path="/dogDetail/:id" element={<DogDetail/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;