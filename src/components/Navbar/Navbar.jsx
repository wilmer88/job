import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from "react-router-dom";

function Navbar() {
  return(
       <>
   <Router>
   <nav class="navbar navbar-dark bg-dark">
      <Link to="">
      <button class="btn btn-outline-success" type="button"><strong>Portfolio</strong></button>
      </Link>
      <Link to="">
    <button class="btn btn-sm btn-outline-secondary" type="button">saved videos</button>
    </Link>
</nav>
</Router>
   </>
    )

}

export default Navbar