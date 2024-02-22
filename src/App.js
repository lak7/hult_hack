import React from 'react';

import { Footer, Possibility, Features, Header } from './containers';
import { Brand, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <Features />
    <Possibility />
    {/* <WhatGPT3 /> */}
    {/* <CTA />
    <Blog /> */}
    <Footer />
  </div>
);

export default App;
