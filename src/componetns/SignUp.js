import React from "react";
import { useForm } from "react-hook-form";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../firebase.Init";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import useToken from "./Hooks/useToken";
const Signup = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data.email, data.password);
    createUserWithEmailAndPassword(data.email, data.password);
  };
  const [token] = useToken(user || guser);

  if (loading || gloading) {
    <Loading />;
  }
  if (token) {
    navigate("/");
  }

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-base-200">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            {...register("name", {
              required: {
                value: true,
                message: "email is requierd",
              },
            })}
            placeholder="Type here"
            class="input w-full max-w-xs"
          />
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
        <button
          className="btn btn-secondary"
          onClick={() => signInWithGoogle()}
        >
          SignWith Goggle
        </button>
      </div>
    </>
  );
};

export default Signup;
