import React from 'react';
import styles from '../src/style.css';

import './App.css'
import { Form, Button, Col, Carousel } from 'react-bootstrap'
import image from './imgs/3.jpg'
import image1 from './imgs/2.jpg'

import video from './imgs/4.mp4'

import Navmenu from './components/Navbar'
import Footer from './components/footer'
function App() {
  return (
    <div className="App">


      <div style={{ 'border': 'solid 1px black', 'max-width': '100vw' }}>

        <h1 className="title-red">Your name here</h1>

        <br />

        <img src={image} />

        <br />

        <img src={image1} />

      </div>



      <video style={{ 'width': "320", 'height': "240" }}
        playsInline
        poster=""
        src={video}
        controls />


    </div>




  )
}

export default App

