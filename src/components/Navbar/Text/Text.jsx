import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from "react-router-dom";
import "./text.css"


const Text = () => {
    return (
        <>
        <Router>
        <div id="mon"className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 id="jl" class="display-4">Welcome</h1>
              <p class="lead">About me</p>
            </div>
          </div>
       <div className="row">
        <div id="ra" class="offset-md-1 col-md-5 bg-light mt-5">
         
          
          <div class="float-left">
           <h6>Hello, My name is Wilmer Rivera. </h6> 
           <brk>
          </brk>
           <p>Right now my residance is in the city Rome, GA
            
            Im taking this new path as a new  web develper to challange my self and abilities.
             Always taking  pride in the work Im assign, being critical of myself and of the finished product.
            Ready for the reward from hard work and the extra miles while also
            bringing  satisfaction and
            treating the project as my own.</p>
          

            
          </div>
         
          {/* <img
            src="/last.png"
            class="profilepic"
            alt="foto of wilmer rivera"
          /> */}

          <p>
            Always in search to see the truth of how things are.
            
          </p>
         
          
            <h5>Contact Me</h5>
          
           
            
          <div class="modal-dialog modal-xl">Cell: 706-331-4752</div>
          <div class="modal-dialog modal-lg">email: wilmerbaby@gmail.com</div>
          {/* <div class="modal-dialog modal-sm">LinkedIn Profile: <link href="https://www.google.com/">click here</link></div> */}
          <div class="modal-dialog modal-sm">Git Hub Profile: <a href="http://www.google.com/">click here</a></div>
         
      </div>
        
      </div>
      </Router>
      </>
    );
};

export default Text;