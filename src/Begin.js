import React from 'react';

function Begin(props) {
  return (
    <section id="begin">
      <h1>Start</h1>
      <img src="http://images.wikia.com/batman/images/5/5e/VLpul.jpg"/>
      <div>
      		<button onClick={props.normalStart}>normal</button> 
     	    
      </div>​
           <button onClick={props.hardStart}>hard</button>
    </section>
  );
}

export default Begin;