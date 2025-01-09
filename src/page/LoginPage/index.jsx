import React, { useState } from "react";
import Layout from "../../Layout";
import { useAuth } from "../../context/auth";

function LoginPage() {
  const auth = useAuth();

  const [show, setShow] = useState(false);

  const [emailUser, setEmailUser] = useState(null);
  const [passwordUser, setPasswordUser] = useState(null);

  function showPassword() {
    setShow(!show);
  }
  
  function login(e) {
    e.preventDefault();
    auth.login({emailUser})
    // auth.login({emailUser})
    // console.log(emailUser);
    // console.log(passwordUser);
  }
  return (
    <Layout>
      <div className="w-full max-w-[400px] p-5 shadow-xl rounded-lg dark:bg-[#131b21] dark:text-white">
        <h2 className="text-2xl font-regular mb-5">Sign in to your account</h2>
        <form onSubmit={(e) => login(e)} className="flex flex-col gap-3">
          <div className="flex flex-col">
            <label htmlFor="email" className="font-semibold pb-1">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="border-[2px] border-[#D0D4DB] h-[45px] px-2 rounded-lg  outline-none dark:text-zinc-700 hover:border-blue-400"
              onChange={(e) => setEmailUser(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="font-semibold pb-1">
              Password
            </label>
            <input
              type={show ? "text" : "password"}
              id="password"
              className="border-[2px] border-[#D0D4DB] h-[45px] px-2 rounded-lg  outline-none dark:text-zinc-700 hover:border-blue-400"
              onChange={(e) => setPasswordUser(e.target.value)}
            />
            <div className="mt-2 flex gap-2">
              <input
                type="checkbox"
                className="cursor-pointer "
                id="check"
                onClick={showPassword}
              />
              <label htmlFor="check">Show password</label>
            </div>
          </div>
          <button className="bg-blue-500 text-white h-[45px] rounded-lg mt-5 hover:bg-blue-600">
            Sign
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default LoginPage;
