import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAdminLoginMutation } from "../../api";
import Logo from "../../assets/logo.png";
import InputField from "../../components/InputField";
import { loginSchema } from "../../validation";
import { useNavigate } from "react-router-dom";
import Toast from "../../components/Toast";

const SignIn = () => {
  const navigate = useNavigate();
  const [adminLogin, { isLoading, error: apiError }] = useAdminLoginMutation();
  const [serverError, setServerError] = useState(null);
  const [showToast, setShowToast] = useState(false); // ✅ toast state

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    try {
      setServerError(null);
      const res = await adminLogin(data).unwrap();
      if (res && res?.user) {
        setShowToast(true); // ✅ Show toast after login success
        console.log(res);
        localStorage.setItem("access_token", res?.user?.access_token
        )
      }

      setTimeout(() => {
        setShowToast(false); // optional auto-dismiss
        navigate("/dashboard");
      }, 2000); // Wait before navigating
    } catch (err) {
      setServerError(
        err?.data?.message || "Invalid email or password. Please try again."
      );
    }
  };

  return (
    <div className="bg-[#FFFEF6] h-[100vh] w-full flex justify-center items-center p-[20px]">
      <div className="bg-white rounded-[20px] border border-[#CCCCCC] px-[35px] py-[45px] w-full max-w-[450px] shadow-[0_2px_5px_rgba(0,0,0,0.25)] max-md:p-[20px]">
        <img className="w-[58px] mx-auto mb-[6px]" src={Logo} alt="Logo" />
        <h4 className="text-[18px] text-center font-bold">Admin Portal</h4>
        <p className="text-[#8F8F8F] text-center font-medium">
          Sign in to your admin account to continue
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[25px] mt-[25px]">
          <InputField
            label="Email"
            name="email"
            type="email"
            register={register}
            error={errors.email}
            placeholder="admin@example.com"
          />

          <InputField
            label="Password"
            name="password"
            type="password"
            register={register}
            error={errors.password}
            placeholder="Enter your password"
          />

          {serverError && (
            <p className="text-red-500 text-[12px] text-center">{serverError}</p>
          )}

          <button
            type="submit"
            disabled={isLoading || Object.keys(errors).length > 0}
            className={`btn-pri w-full ${isLoading || Object.keys(errors).length > 0
              ? "opacity-50 cursor-not-allowed bg-[#FFDC7F]"
              : ""
              }`}
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </button>
        </form>
      </div>

      {showToast && (
        <Toast
          message="Login Successful"
          subMessage="Welcome back, Admin!"
          onClose={() => setShowToast(false)}
          position="top-right"
          bgColor="bg-white"
          titleColor="text-black"
          descriptionColor="text-[#5C5C5C]"
        />
      )}
    </div>
  );
};

export default SignIn;
