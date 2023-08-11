import React, { useRef } from 'react';
import { VscCheck } from "react-icons/vsc";
import ViewDetails from "../../Modal/ViewDetails";

function Success() {
  const modalRef = useRef(null);
  const openModal = () => {
    modalRef.current.handleShow();
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="w-100 h-10 flex flex-row flex-wrap items-center justify-center px-45 py-14">
          <div className="w-10 h-10 bg-indigo-500 text-white text-center font-medium p-7 rounded-full">
            <VscCheck size={"20"} style={{ "position": "relative", "bottom": "10px", "right": "10px" }}/>
          </div>
        </div>
        <div className="text-3xl font-medium self-center mt-5">Congratulations, Eden!</div>
        <div className="text-1xl text-gray-400 font-medium text-gray-500 self-center mt-2">You have completed onboarding, you can start using the Eden!</div>
        <button
          className="w-4/5 rounded-md bg-indigo-500 font-small text-white mt-7 p-3"
          onClick={() => openModal()}
        >
          Launch Eden
        </button>
        <ViewDetails ref={modalRef} />
      </div>
    </>
  );
}

export default Success;
