import React from "react";
import { strings } from "@/app/utils/strings";
import Modal from "./Modal";

export const BecomeTester = () => {
  return (
    <div className="mt-10 items-center flex flex-col">
      <p className="text-cyan-300 text-justify text-xl font-bold">{strings.message}</p>
      <Modal
        title={strings.become_beta_tester}
        buttonStyle="disabled:bg-gray-600 bg-blue-400 hover:bg-blue-500 mt-10 self-center"
      />
    </div>
  );
};
