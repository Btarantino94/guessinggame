import React from 'react';

function Begin(props) {
  return (
    <section id="begin">
      <h1>Start</h1>
      <div><button onClick={props.standardStart}>Standard</button> Begin <button onClick={props.expertStart}>Expert</button></div>
    </section>
  );
}

export default Begin;