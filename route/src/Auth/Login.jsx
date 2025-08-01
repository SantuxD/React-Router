import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();

  const Handelemail = (e) => {
    console.log("Your email is:", email);
    setEmail(e.target.value);
  };
  // const Handelsubmit = () =>{

  // }
  const Handelpassword =(event)=>{
    console.log("Your password is ", password)
    setPassword(event.target.value)
  }
  const Handelsubmit =(event)=>{
    event.preventDefault();
    console.log("From submitted")

  }
  return (
    <>
       
        <h1 style={{color: "red"}}>Login from</h1>
       <form onClick={Handelsubmit}>
        <input
          onChange={Handelemail}
          value={email}
          type="email"
          placeholder="Enter your email"
        />
        <br />
        <br />
        <input
          onChange={Handelpassword}
         value={password}
          type="Password"
          name=""
          id=""
          placeholder="Enter your password"
          required
        />
        <br />
        <br />
        <button type="submit">Submit</button>
     
      </form>
    </>
  );
};

export default Login;
