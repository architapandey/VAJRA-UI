import React from "react";

export default function Login() {
  return (
    <div className="h-[588px] w-full rounded-[30px] bg-blue-50 p-4 m-8  flex-1 shadow-xl">
      <div className="text-center text-orange-400 text-2xl font-normal pb-4 ">
        Sign in
      </div>
      <hr />
      <div className="px-16">
        <div className="text-blue-900 text-2xl py-8 font-medium">
          {" "}
          Sign in to your account
        </div>
        <div>
          <div className="text-lg font-medium">Email Id</div>
          <input placeholder="xxxxxxx" className="w-full my-2 h-[50px] px-6" />
        </div>
        <div>
          <div className="text-lg  font-medium">Password</div>
          <input placeholder="xxxxxxx" className="w-full my-2 h-[50px] px-6 " />
        </div>
        <div className="text-red-600 pt-2 pb-8 font-medium">
          Forgot Password?
        </div>
        <button className="w-full h-[52px] bg-blue-900 text-white rounded-md">
          Sign In
        </button>
        <div className="flex items-center justify-center pt-8 gap-4">
          <div>New to Vajra?</div>
          <div className="text-orange-400">Sign-up now</div>
        </div>
      </div>
    </div>
  );
}
