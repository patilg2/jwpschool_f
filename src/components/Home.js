import React from 'react';
import flogo from "./img/nes_logo_f.png";
import flogo2 from "./img/nes_logo_s.png";
const Home = () => {
return (
	
	<div
	style={{
		display: 'flex',
		justifyContent: 'Center',
		alignItems: 'Center',
		height: '100vh'
	}}
	>
	 <main style={{ marginTop: "32px" }}>
          
		  	<div  className="toolbar_flogo">  
		  	 	<header>
        		<h1>Welcome to Our School</h1>
      			</header>
	  		</div>
		    <div>
				<img className="toolbar_flogo" src={flogo}  />
			</div> 
			<div align="center">
			<section>
              <h2>About Us</h2>
              <p>We are a prestigious school dedicated to providing quality education...</p>
            </section>
			<footer>
				    	<p>&copy; {new Date().getFullYear()} Our School. All rights reserved.</p>
      		</footer>
			</div>
        </main>

		<div>
      
      <nav>
              </nav>
     
      
    </div>

	</div>
);
};

export default Home;
