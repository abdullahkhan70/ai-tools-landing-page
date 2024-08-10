"use client";

import { save_google_sheet } from "@/app/actions/google-sheets.action";
import { strings } from "@/app/utils/strings";
import { SubmitHandler, useForm } from "react-hook-form";
import React, { useState } from "react";
import { toast } from "react-toastify";

type Props = {
  title: string;
  buttonStyle?: string | undefined;
};

type Inputs = {
  name: string;
  email: string;
}

const Modal = (props: Props) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    defaultValues: {
      name: "",
      email: ""
    }
  });

  const [openModal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleModal = () => {
    setModal(!openModal);
  };
  const handleSubmitBtn: SubmitHandler<Inputs> = async (form) => {
    const {name, email} = form;

    const response = await save_google_sheet({ name, email });
    if (response??length > 0) {
      toast.success("Thanks for becoming a Beta Tester!", {
        position: "top-center",
      })
      setName("");
      setEmail("");
      setModal(!openModal);
    }
  };

  return (
    <div>
      <button
        type="button"
        className={
          "h-10 px-4 font-medium text-sm rounded-md text-white " +
          props.buttonStyle
        }
        onClick={handleModal}
      >
        {props.title}
      </button>
      {openModal && (
        <form onSubmit={handleSubmit(handleSubmitBtn)}>
        <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
          <div className="w-full max-w-lg bg-white shadow-lg rounded-md p-8 relative">
            <svg
              onClick={handleModal}
              xmlns="http://www.w3.org/2000/svg"
              className="w-3.5 cursor-pointer shrink-0 fill-gray-800 hover:fill-red-500 float-right"
              viewBox="0 0 320.591 320.591"
            >
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"
              ></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"
              ></path>
            </svg>
            <div className="my-8 text-center">
              <h4 className="text-2xl text-gray-800 font-bold">
                Subscribe to become a Tester
              </h4>
              <p className="text-sm text-gray-500 mt-2">
                {strings.emailMessage}
              </p>
              <input
                type="text"
                value={name}
                {...register('name', {
                  required: 'Name is required'
                })}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Your Name"
                className="px-4 py-2.5 mt-6 bg-[#f0f1f2] text-gray-800 w-full text-sm focus:bg-transparent outline-blue-600 rounded-md"
              />
              {errors.name?.message && (
                <div className="text-red-900 mt-2 justify-items-start">{errors.name.message}</div>
              )}
              <input
                type="email"
                value={email}
                {...register("email", {
                  required: "Email is Required",
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Email is invalid",
                  },
                })}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                className="px-4 py-2.5 mt-6 bg-[#f0f1f2] text-gray-800 w-full text-sm focus:bg-transparent outline-blue-600 rounded-md"
              />
              {errors.email?.message && (
                <div className="text-red-900 justify-start mt-2">{errors.email.message}</div>
              )}
            </div>
            <button
              // onClick={handleSubmitBtn}
              type="submit"
              disabled={isSubmitting}
              className="px-5 py-2.5 w-full rounded-md text-white text-sm outline-none bg-blue-600 hover:bg-blue-700"
            >
              {isSubmitting && (
                <span className="loading loading-spinner"></span>
              )}
              {props.title}
            </button>
          </div>
        </div>
        </form>
      )}
    </div>
  );
};

export default Modal;
