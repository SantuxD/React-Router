import React from "react";
import { useState } from "react";

const Contactme = () => {
  <h1>Contact Me!!!</h1>;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();

  const Handelemail = (e) => {
    console.log("Your email is:", email);
    setEmail(e.target.value);
  };
  // const Handelsubmit = () =>{

  // }
  const Handelpassword = (event) => {
    console.log("Your password is ", password);
    setPassword(event.target.value);
  };
  const Handelsubmit = (event) => {
    event.preventDefault();
    console.log("From submitted");
  };
  return (
    <>
      <div className="flex justify-center items-center px-2 py-2">
        <form className="px-4 py-4"onClick={Handelsubmit}>
          <input
            className=" border-2 border-violet-500 rounded-md w-full  "
            onChange={Handelemail}
            value={email}
            type="email"
            placeholder="Enter your email"
          />
         <br />
         <br />
          <input
            className=" border-2 border-violet-500 rounded-md w-full h-full  gap-3.5"
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
          <button  className=" border-2 border-violet-500 rounded-md w-full h-full  hover:bg-violet-700 cursor-pointer" type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Contactme;
