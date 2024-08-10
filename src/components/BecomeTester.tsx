"use client"
import React from "react";
import { strings } from "@/app/utils/strings";
import Modal from "./Modal";

export const BecomeTester = () => {
  const handlePatreon = async () => {
    window.open(strings.patreonWebsiteLink, strings.favoriteAIToolsName);
  }
  return (
    <div className="mt-10 items-center flex flex-col">
      <p className="text-cyan-300 text-justify text-xl font-bold">
        {strings.message}
      </p>
      <Modal
        title={strings.become_beta_tester}
        buttonStyle="disabled:bg-gray-600 bg-blue-400 hover:bg-blue-500 mt-10 self-center"
      />
      <p className="mt-7 text-lg font-semibold">{strings.andText}</p>
      <button
        onClick={handlePatreon}
        className="mt-7 px-5 py-2.5 w-full rounded-md text-white text-sm outline-none bg-blue-600 hover:bg-blue-700"
      >
        <span>{strings.becomePatreon}</span>
      </button>
    </div>
  );
};
