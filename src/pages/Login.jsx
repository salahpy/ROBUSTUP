import React, { useState } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import vector from "../assets/Vector.png?react"
import eye from "../assets/eye.png?react"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()

    const handleClick = () => {
      navigate("/landingPage");
      console.log("Button clicked!");
    }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
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
          <p className="mr-8 sm:mr-14 font-semibold text-[15px] hover:text-dimWhite cursor-pointer">
            <a href="/signupStartup"> Sign Up</a>
          </p>
          <button onClick={handleClick}><img src={vector}/></button>
        </div>
      </div>
      <div className="justify-center items-center text-center">
        <p className="text-white text-[60px] font-bold tracking-wider">Login</p>
      </div>
      <div className="justify-center items-center text-center mt-20">
        <div className="justify-center items-center text-center">
          <p className="text-dimWhite ">Email or username</p>
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
          <button className="text-dimWhite mt-2  text-end ">
            {" "}
            forget password?
          </button>
        </div>
        <div>
          <button className="px-3 py-2 rounded-3xl bg-dimWhite mt-8 w-[200px] font-bold">
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login