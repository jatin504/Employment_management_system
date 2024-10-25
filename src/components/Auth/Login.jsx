import React, { useState } from "react";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassowrd] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log(`Eamil is ${email} and passowrd is ${password} `);
    setemail("")
    setpassowrd("")
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl p-20 border-emerald-600 ">
        <form
          onSubmit={(e) => {
            SubmitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
          name="email"
          autoComplete="no"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            required
            className=" outline-none border-2 bg-transparent border-emerald-600 px-8 text-xl rounded-full py-4 placeholder:text-gray-400 "
            type="email"
            placeholder="Enter your email"
          />
          <input
          name="password"
          value={password}
          onChange={(e)=>{
            setpassowrd(e.target.value)
          }}
            required
            className="mt-10 outline-none border-2 bg-transparent border-emerald-600 text-xl rounded-full py-4 placeholder:text-gray-400 px-8"
            type="password"
            placeholder="Enter your password"
          />
          <button
            className="mt-10 text-white outline-none border-none bg-emerald-600 text-xl rounded-full py-4 placeholder:text-white  px-28"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
