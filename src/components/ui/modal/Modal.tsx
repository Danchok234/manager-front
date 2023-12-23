"use client";

import { ReactNode } from "react";
import { useModal } from "@/hooks/useModal";

interface IModal {
  children: ReactNode;
}

export default function Modal({ children }: IModal) {
  const { ref, isModalOpen, setIsModalOpen } = useModal();

  return (
    <>
      {isModalOpen && (
        <>
          <div className="bg-grey_basic bg-opacity-25 absolute top-0 left-0 z-30 w-full h-full" />
          <div ref={ref} className="bg-white min-h-fit h-[30%] w-[20%] p-4 rounded-md absolute top-[35%] left-[40%] z-40 flex items-center justify-center">
            {children}
          </div>
        </>
      )}
    </>
  );
}
