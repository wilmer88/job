import React from 'react';


import "./text.css"


const Text = () => {
    return (
        <>
        
    <div id="mon"className="jumbotron jumbotron-fluid">
                <h1 className="jl">Welcome</h1>
              <p class="lead">About me</p>
          </div>
         
         <div id="text"class="container">
        <h6>Hello, My name is Wilmer Rivera. </h6> 
         
           <p>Right now my residance is in the city Rome, GA
            
            Im taking this new path as a new  web develper to challange my self and abilities.
             Always taking  pride in the work Im assign, being critical of myself and of the finished product.
            Ready for the reward from hard work and the extra miles while also
            bringing  satisfaction and
            treating the project as my own.</p>
       <p> Always in search to see the truth of how things are. </p>

          <h5>Contact Me</h5>
            <p>Cell: 706-331-4752</p>
          <p>email: wilmerbaby@gmail.com</p>
          {/* <div class="modal-dialog modal-sm">LinkedIn Profile: <link href="https://www.google.com/">click here</link></div> */}
          <p>Git Hub Profile: <a href="http://www.google.com/">click here</a></p>
          </div>
         
      </>
    );
};

export default Text;