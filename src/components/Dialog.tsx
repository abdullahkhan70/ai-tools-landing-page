"use client";
import { useSearchParams } from "next/navigation";
import React, { useRef, useEffect } from "react";
import { Button } from "./Button";
type Props = {
  title: string;
  onClose: () => void;
  onOk: () => void;
  children: React.ReactNode;
};

export default function Dialog(props: Props) {
  const searchParams = useSearchParams();
  const dialogRef = useRef<null | HTMLDialogElement>(null);
  const showDialog = searchParams.get("showDialog");

  useEffect(() => {
    if (showDialog === "y") {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [showDialog]);

  const closeDialog = () => {
    dialogRef.current?.close();
    props.onClose();
  };

  const clickOk = () => {
    props.onOk();
    closeDialog();
  };

  const dialog: JSX.Element | null =
    showDialog === "y" ? (
      <dialog
        ref={dialogRef}
        className="fixed top-50 left-50 -translate-x-50 -translate-y-50 z-10 rounded-xl backdrop:bg-gray-800/50"
      >
        <div className="w-[500px] max-w-full-bg-gray-200 flex flex-col">
          <div className="flex flex-row justify-between mb-4 pt-2 px-5 bg-yellow-400">
            <h1 className="text-2xl">{props.title}</h1>
            <Button
              className="mb-2 py-1 px-2 cursor-pointer rounded border-none w-8 h-8 font-bold bg-red-600 text-white"
              onClick={closeDialog}
            >
              x
            </Button>
          </div>
          <div className="px-5 pb-6">
            {props.children}
            <div className="flex flex-row justify-end mt-2">
              <Button
                className="bg-green-500 py-1 px-2 rounded border-none"
                onClick={clickOk}
              >
                OK
              </Button>
            </div>
          </div>
        </div>
      </dialog>
    ) : null;

  return dialog;
}
