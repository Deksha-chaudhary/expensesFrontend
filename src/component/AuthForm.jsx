import { Link } from "react-router-dom";
import CommonButton from "./common/CommonButton";
import CommonInput from "./common/CommonInput";
import { useState } from "react";

const initialData={
  name:"",
  email:"",
  password:""


}


  const AuthForm = (props) => {
  const isSignup = props?.mode === "signup";
   const[formData,setFormData]=useState(initialData);
   const[formError,setFormError]=useState({...initialData,global:""});
   const[loading,setLoading]=useState(false);

  function ValidateForm() {
  let isValid = true;

const error={...initialData,global:""};

  // Email Regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Signup Validation
  if (isSignup) {
    if (!formData?.name?.trim()) {
      error.name = "Name is required";
      isValid = false;
    }
  }

  // Common Validation (Login + Signup)
  if (!formData?.email?.trim()) {
    error.email = "Email is required";
    isValid = false;
  } else if (!emailRegex.test(formData.email)) {
    error.email = "Please enter a valid email";
    isValid = false;
  }

  if (!formData?.password?.trim()) {
    error.password = "Password is required";
    isValid = false;
  }

  setFormError(error);

  return isValid;
  }

 const handleChange=(e,key)=>{
  let value=e.target.value;
  let id=e.target.id;
  console.log('aaa',id,value)
  
  setFormData((p)=>({
    ...p,
    [id]:value,
  }))
   setFormError((p)=>({
    ...p,
    [id]:'',
  }))
 }

   const handleSubmit=(e)=>{
    e.preventDefault()
    if(!ValidateForm()){
      return;
    }
    console.log("submitclick")
   }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <main className="flex flex-1 items-center justify-center px-4 py-8">
        <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6 sm:p-8">

          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">
              {isSignup ? "Create Account" : "Welcome Back"}
            </h1>
            <p className="text-gray-500 mt-2 text-sm">
              {isSignup ? "Sign up to get started" : "Login to your account"}
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5">

            {isSignup && (
              <CommonInput
              // onChange={(e)=>{
              //   handleChange(e,'name')
              // }}
              onChange={handleChange}
              id='name'
                label="Name"
                value={formData.name}
                error={formError.name}
                name="name"
                type="text"
                placeholder="Enter your name"
                autoComplete="name"
                required
              />
            )}

            <CommonInput
             onChange={handleChange}
              id='email'
              label="Email"
              value={formData.email}
              error={formError.email}
              name="email"
              type="email"
              placeholder="Enter your email"
              autoComplete="email"
              required
            />

            <CommonInput
              onChange={handleChange}
              id='password'
              label="Password"
              value={formData.password}
              error={formError.password}
              labelAction={
                !isSignup && (
                  <Link
                    to="/forgot"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Forgot Password?
                  </Link>
                )
              }
              name="password"
              type="password"
              placeholder="Enter your password"
              autoComplete={isSignup ? "new-password" : "current-password"}
              required
            />

            {/* Login Button */}
            <CommonButton
              className="bg-red-500"
              name={isSignup ? "Sign Up" : "Login"}
              onClick={(e) => handleSubmit(e)}
            />
          </form>

          {/* Signup Text */}
          <p className="text-center text-sm text-gray-600 mt-6">
            {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
            <Link
              to={isSignup ? "/login" : "/signup"}
              className="text-blue-600 font-medium cursor-pointer hover:underline"
            >
              {isSignup ? "Login" : "Sign Up"}
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default AuthForm;
