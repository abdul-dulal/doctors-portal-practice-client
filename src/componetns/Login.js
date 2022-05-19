import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.Init";
import useToken from "./Hooks/useToken";
import Loading from "./Loading";
const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const [token] = useToken(user);
  let errElement;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  if (token) {
    navigate("/");
  }
  if (error) {
    errElement = <p className="text-red-700"> {error.message}</p>;
  }
  if (loading) {
    <Loading />;
  }
  return (
    <div className="flex justify-center items-center h-screen bg-base-200">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          {...register("email", {
            required: {
              value: true,
              message: "email is requierd",
            },
            pattern: {
              value: /[A-Za-z]{3}/,
              message: "hello",
            },
          })}
          placeholder="Type here"
          class="input w-full max-w-xs"
        />
        <label className="label">
          {errors.email?.type === "required" && (
            <span className="text-red-700"> {errors.email.message} </span>
          )}
        </label>
        <label className="label">
          {errors.email?.type === "pattern" && (
            <span className="text-red-700"> {errors.email.message} </span>
          )}
        </label>
        <input
          type="password"
          {...register("password", {
            required: {
              value: true,
              message: "password is requiered",
            },
            minLength: {
              value: 6,
              message: "passowrd is must getter than 6",
            },
          })}
          placeholder="Type here"
          class="input w-full max-w-xs"
        />
        <label className="label">
          {errors.password?.type === "required" && (
            <span> {errors.password.message}</span>
          )}
        </label>
        <label className="label">
          {errors.password?.type === "minLength" && (
            <span> {errors.password.message}</span>
          )}
        </label>
        <input type="submit" className="btn btn-primary" />
      </form>
      <p>{errElement}</p>
    </div>
  );
};

export default Login;
