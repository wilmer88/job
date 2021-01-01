import React from 'react';
import "./sidenav.css"

const Sidenav = () => {
    return (
       <> 
       <div id="mySidenav" class="sidenav">
  <a href="" class="closebtn" onclick="closeNav()">&times;</a>
  <a href="">About</a>
  <a href="">Services</a>
  <a href="">Clients</a>
  <a href="">Contact</a>
</div>
       </>
    );
};

export default Sidenav;