import React, { useState } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import vector from "../assets/Vector.png?react"
import eye from "../assets/eye.png?react"
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/user/register/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          const data = await response.json();
          alert(JSON.stringify(data, null, 2));
          navigate('/login'); // Redirect to login page after successful signup
        } else {
          throw new Error('Failed to sign up');
        }
      } catch (error) {
        console.error(error);
      }
    },
  })

  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev)
  }

  return (
    <div className="bg-primary">
      <div className="items-center flex justify-between px-4 pt-8 pb-4 sm:px-20  z-10">
        <div className="flex items-center text-center justify-center">
          <h1 className="font-montserrat  font-bold text-[20px]  text-white sm:font-extrabold sm:text-[30px]">
            ROBUSTUP
          </h1>
        </div>
        <div className="flex text-white align-center text-center ">
          <a href="/landingPage">
            <img src={vector} />
          </a>
        </div>
      </div>
      <div className="justify-center items-center text-center mt-4">
        <p className="text-white md:text-[60px] text-[40px] font-bold tracking-wider">
          Sign Up as a start up
        </p>
        <p className="text-white text-[15px] md:text-[20px] mt-4">
          <span className="text-dimWhite"> are you investor? </span>{" "}
          <a href="/signupInvestor">yes</a>
        </p>
      </div>
      <div className="justify-center items-center text-center mt-16">
        <div className="justify-center items-center text-center">
          <p className="text-dimWhite mt-8">Username</p>
          <input
            type="text"
            className="mt-2 px-3 py-2 w-full max-w-[450px] rounded-3xl"
          />
        </div>
        <div className=" justify-center items-center text-center">
          <p className="text-dimWhite mt-8 ">Password</p>
          <div>
            <input
              type={showPassword ? "text" : "password"}
              className="mt-2 px-3  py-2 w-full max-w-[450px] rounded-3xl"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 flex items-center px-3"
            >
              <img src={eye} />
            </button>
          </div>

        </div>
        <div className=" justify-center items-center text-center">
          <p className="text-dimWhite mt-8 ">Confirm Password</p>
          <input
            type="password"
            className="mt-2 px-3 py-2 w-full max-w-[450px] rounded-3xl"
          />
        </div>
        <button className="text-dimWhite mt-2  text-end ">
            {" "}
            forget password?
          </button>
        <div>
          <button className="px-3 py-2 rounded-3xl bg-dimWhite mt-8 w-[200px] font-bold">
            Create an account
          </button>
        </div>

        <div className="mt-6 text-dimWhite">
          already have an account?
          <span className="text-white">
            <a href="/login"> Log in </a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Login
