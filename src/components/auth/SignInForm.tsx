import { useState } from "react";
import axiosClient from "../../axios-client.js";
import { createRef } from "react";
import { useStateContext } from "../../context/ContextProvider.js";
import { isMobile } from "react-device-detect";
import { FaArrowRight, FaEye, FaEyeSlash } from "react-icons/fa";

export default function SignInForm() {
  let device: string | null = null;

  // const LoginSignUpForm = {
  //   height: '100vh',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // };

  if (isMobile) {
    device = "Mobile";
  } else {
    device = "Desktop";
  }

  const [showPassword, setShowPassword] = useState(false);
  const emailRef = createRef<HTMLInputElement>();
  const passwordRef = createRef<HTMLInputElement>();
  const { setUser, setToken } = useStateContext();
  // const [message, setMessage] = useState(null);
  // emailRef.current?.focus();
  const onSubmit = (ev: { preventDefault: () => void }) => {
    ev.preventDefault();
    const payload = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
      device: device,
    };
    console.log(payload);
    axiosClient
      .post("/tokens/create", payload)
      .then(({ data }) => {
        setUser(data.data);
        setToken(data.data.token);
        // console.log(data.data.token)
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          // setMessage(response.data.message);
        }
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center">
          Welcome, Admin
          <br />
          {/* <span className="text-black">
            Please <u className="text-blue-500">Sign in</u> to continue.
          </span> */}
          <span className="text-black">Please Sign in to continue.</span>
        </h2>
        <form className="space-y-4" onSubmit={onSubmit}>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>

            <input
              id="email"
              ref={emailRef}
              type="email"
              className="w-full border rounded px-3 py-2"
              defaultValue="admin@localhost"
              required
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                ref={passwordRef}
                type={showPassword ? "text" : "password"}
                className="w-full border rounded px-3 py-2 pr-10"
                defaultValue="123456"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-2 text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" defaultChecked className="mr-2" />
              <span className="text-sm">Remember Me</span>
            </label>
            <a href="#" className="text-blue-500 text-sm font-medium">
              Forget Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded flex justify-center items-center gap-2"
          >
            Sign In <FaArrowRight />
          </button>
        </form>
        {/* <button className="w-full bg-black text-white py-2 rounded">
          Test Alert
        </button> */}
        <p className="text-center text-sm mt-4">
          Don't have an account?{" "}
          <a href="/signup" className="font-semibold">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
