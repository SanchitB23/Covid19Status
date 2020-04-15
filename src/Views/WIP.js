import React from 'react';

function WIP(props) {
  return (
      <div className="p-5">
        <img src={require('../assets/WIP.svg')} className="img-fluid" alt="Logo" height={450} width={450}/>
        <h1 style={{color: "#6c63ff"}}>Work In Progress</h1>
      </div>
  );
}

export default WIP;
