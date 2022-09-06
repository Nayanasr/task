import React, { useState } from 'react';

function Signup() {
    const [signupData, setSignupData] = useState({
        email: "",
        name: "",
        password: "",
        confirmPassword: "",
    });


    const handleChange = (e) => {
        setSignupData({
            ...signupData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
        signupData.email === ""  || 
        signupData.name === "" || 
        signupData.password === "" || 
        signupData.confirmPassword === ""){

            alert("please provide the data");
        } else {
         
            console.log(signupData);
        }
    };

  return (
    <div className = "container border mt-20">

         <h2>Sign Up Page</h2>

         <form onSubmit = {handleSubmit}>

         <div className = "mb-20">
          <label htmlFor = "exampleInputEmail" className = "form-label">
            Email Address: 
          </label>
          <input type = "email" name = "email" className = "form-control"
          onChange = {handleChange} value = {signupData.email}></input>
         </div>

         <div className = "mb-20">
          <label htmlFor = "exampleInputEmail" className = "form-label">
            Enter name: 
          </label>
          <input type = "text" name ="name" className = "form-control"
          onChange={handleChange} value={signupData.name}></input>
         </div>

          <div className = "mb-20">
          <label htmlFor = "exampleInputEmail" className = "form-label">
            Password: 
          </label>
          <input type = "password" name = "password" className = "form-control"
          onChange = {handleChange} value = {signupData.password}></input>
         </div>

         <div className = "mb-20">
          <label htmlFor = "exampleInputEmail" className = "form-label">
           Confirm Password: 
          </label>
          <input type = "password" name = "confirmPassword" className = "form-control"
          onChange = {handleChange} value = {signupData.confirmPassword}></input>
         </div>

         <button type = "submit" className = "btn btn-primary">
            Submit
         </button>

        </form>


    </div>
  );
}

export default Signup;