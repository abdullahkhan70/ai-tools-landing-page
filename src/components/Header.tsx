"use client";
import Image from "next/image";
import { Button } from "./Button";
import { strings } from "@/app/utils/strings";
import Dialog from "./Dialog";
import { useState } from "react";
import Modal from "./Modal";
export function Header() {
  
  function onClose() {
    alert("Model has Closed!");
  }
  function onOk() {
    alert("OK was clicked!");

  }
  function handleJoinWishlist() {
    console.log("Hello World")
  }

  return (
    <header className="dark:bg-gray-900">
      <div className="container flex w-full flex-col h-16 px-4 items-center">
        <Image
          alt="Image not Found"
          src={"/logo.png"}
          width="72"
          height="82"
          className="order-first sm:-order-none "
        />
        {/* <Button variant="primary" onClick={() => handleJoinWishlist()}>
          {strings.join_wishlist}
        </Button> */}
        {/* <Modal title={strings.join_wishlist} buttonStyle="disabled:bg-gray-600 bg-blue-400 hover:bg-blue-500" /> */}
      </div>
   
    </header>
  );
}
