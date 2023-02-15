import React from "react";
import Slider3 from "./componants/slide3";
import Slider2 from "./componants/slide2";
import { BrowserRouter, Route,Link,Routes } from "react-router-dom";













const App = () => (

  <BrowserRouter>
    <Routes>
    
   
    <main>
      
     
    
   <div className="nav">
        <Link to="/" className="active">Home</Link>
        <a href="https://ndl.iitkgp.ac.in/">Online Library</a>
        <Link to="/contact">Contact Us</Link>
        <Link to="">Staff</Link>
        </div>
        
        
      
    
    <div className="logo">
      <h3>Welcome To</h3>
      <h1>JURIA HIGHER SECONDARY SCHOOL</h1>
      <h2>জুৰীয়া উচ্চতৰ মাধ্যমিক বিদ্যালয়</h2>
      
    </div>

    <div className="nav1">
    <a class="active" href="http://www.sebaonline.info/">SEBA</a>
    <a href="https://ahsec.assam.gov.in/">AHSEC</a>
    <a href="https://darpan.ahseconline.in/">DARPAN</a>
      <a href="https://gunotsavassam.in/">GUNOTSAV</a>
      
      </div>
    

    <div className="slides">
      <img src="./images/teachers.jpg" alt="" />

      <div className="news">
        <img src="./images/schoolfront.jpg" alt="" />
      </div>
    </div>

    

    <div className="principal">
        <div className="prinphoto">
          
          <img src="https://www.nicepng.com/png/detail/12-120709_png-file-human-icon-png.png" alt="" />


      </div>

      <div className="words">
        <h2>Message from Principal </h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptatibus at quam accusamus quibusdam ducimus quas itaque magnam facilis sint. In quos sapiente eligendi voluptatum nisi et ex illum explicabo!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptatibus at quam accusamus quibusdam ducimus quas itaque magnam facilis sint. In quos sapiente eligendi voluptatum nisi et ex illum explicabo!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptatibus at quam accusamus quibusdam ducimus quas itaque magnam facilis sint. In quos sapiente eligendi voluptatum nisi et ex illum explicabo!</p>
      </div>

    </div>

    <h3 className="eventtext">EVENTS</h3>

    <div className="events">
      
      <div className="event1">
        <h3>Gunotsav 2023</h3>
        <Slider2 className= "slide3"></Slider2>

      </div>

      <div className="event2">
        <h3 className="ev2">Yearly sports festival 2023</h3>
        <Slider3 className="slide3"></Slider3>
        
      </div>

      <div className="event3">
        <h3 className="ev3">Platinum JUbilee Celebration 2023</h3>

        content coming soon

      </div>
      
    </div>

      <div className="footer">
      <Routes>
          <Route path="/contact" element={
            <div className="addrress">
              <p>
                Address <br />
                Village: Thiotangani <br />
                Post Office: Juria  <br />
                District: Nagaon <br />
                Pin : 782124  <br />
                Email:test@gmail.com
              </p>
            </div>} />
          
          </Routes>

      <div className="important">
<iframe
      title="Google Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.483428599119!2d92.63997671544847!3d26.440141786637767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744d84b11fb78bf%3A0xbff731fb63fd13a!2sJuria%20Higher%20Secondary%20School!5e0!3m2!1sen!2sin!4v1675844418026!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
      width="100%"
      height="300px"
      frameBorder="0"
      style={{ border: 0 }}
      allowFullScreen
    />
      </div>
    </div>

    <div className="copyright">
      <h3 className="name">
        Copyright© Juria Higher Secondary School (2023)
      </h3>

      <h3 className="dev">
        Designed and developed by Merujyoti Saha
      </h3>
    </div>

    


      </main>

      </Routes>
      
    </BrowserRouter>
        
    
    
    
);

export default App;
