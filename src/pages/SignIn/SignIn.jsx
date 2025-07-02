import React from "react";
import Logo from "../../assets/logo.png";

const SignIn = () => {
  return (
    <div className="bg-[#FFFEF6] h-[100vh] w-full flex justify-center items-center p-[20px]">
      <div className="bg-white rounded-[20px] border border-[#CCCCCC] px-[35px] py-[45px] w-full max-w-[450px] shadow-[0_2px_5px_rgba(0,0,0,0.25)] max-md:p-[20px]">
        <img className="w-[58px] mx-auto mb-[6px]" src={Logo} alt="" />
        <h4 className="text-[18px] text-center font-bold">Admin Portal</h4>
        <p className="text-[#8F8F8F] text-center font-medium">
          Sign in to your admin account to continue
        </p>

        <div className="flex flex-col gap-[25px] mt-[25px]">
            {/* email */}
          <label
            className="flex flex-col text-[14px] font-semibold gap-[9px]"
            htmlFor=""
          >
            Email
            <input
              className="border text-[14px] border-[#DFDFDF] py-[10.5px] px-[12px] rounded-[5px]"
              type="email"
              placeholder="admin@example.com"
            />
          </label>

          {/* password */}
          <label
            className="flex flex-col text-[14px] font-semibold gap-[9px]"
            htmlFor=""
          >
            Password
            <input
              className="border text-[14px] border-[#DFDFDF] py-[10.5px] px-[12px] rounded-[5px]"
              type="password"
              placeholder="Enter your password"
            />
          </label>

          <button className="btn-pri w-full">Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
