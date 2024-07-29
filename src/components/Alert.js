// Alert.js
import React from 'react';

function Alert({ alert }) {
  if (alert === null) {
    return null; // or return an empty fragment: return <></>;
  }

  return (
  
    <div className={`alert alert-${alert.type} alert-dismissible fade show` } role="alert" style={{height:'60px',width:'400px',position:'absolute',zIndex:"1",marginLeft:"35%",marginRight:"65%"}}>
      <strong>{alert.type.charAt(0).toUpperCase() + alert.type.slice(1)}</strong>: {alert.message}
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  );
}

export default Alert;
