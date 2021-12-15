import "./Login.css";
import React, { useEffect, useState } from "react";

import Sawo from "sawo";

const Login = () => {
  
    const [isUserLoggedIn, setUserLoggedIn] = useState(false);
    const [payload, setPayload] = useState({});
  useEffect(() => {
    var config = {
      // should be same as the id of the container created on 3rd step
      containerID: "sawo-container",
      // can be one of 'email' or 'phone_number_sms'
      identifierType: "phone_number_sms",
      // Add the API key copied from 2nd step
      apiKey: process.env.REACT_APP_API_KEY,
      // Add a callback here to handle the payload sent by sdk
      onSuccess: (payload : object) => {
          console.log("Payload", JSON.stringify(payload))
          setUserLoggedIn(true);
        setPayload(payload);
           
      },
    };
    let sawo = new Sawo(config);
    sawo.showForm();
  }, []);

  return (
    <div className="containerStyle">
      <section>
      
        {!isUserLoggedIn ? (
          <div id="sawo-container" style={{ height: "300px", width: "400px"}}></div>
        ) : (
          <div className="loggedin">
            <h2>User Successfully Logged in!</h2>
            <div>{payload}</div>
          </div>
         
        )}
      </section>
    </div>
   
  );
};

export default Login;
