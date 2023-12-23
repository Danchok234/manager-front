import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const ref = useRef<HTMLDivElement>(null);

  const router = useRouter();

  const handleClickOutside = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsModalOpen(false);
      router.push("/");
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  return { ref, isModalOpen, setIsModalOpen };
};
