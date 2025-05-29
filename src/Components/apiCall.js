import React, { useEffect } from 'react';
import axios from './axios';
const ApiCall = () => {
//   const sendResponse = async () => {
//     try {
//       const response = await fetch("https://reqres.in/api/users/2"); // Use a valid endpoint
//       const data = await response.json();
//       console.log("API Data:", data);
//     } catch (error) {
//       console.error("API Error:", error);
//     }
//   };

const sendResponse = async () => {
    try {
     const response = await axios.get("/users/2")// This hits https://jsonplaceholder.typicode.com/users/2
      console.log("Axios Response:", response);
      console.log("User Data:", response.data); 
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  useEffect(()=>{
    sendResponse();
  },[])



  return (
    <div>
      <h1>HELLO API</h1>
      <button onClick={sendResponse}>TRIGGER</button>
    </div>
  );
};

export default ApiCall;
