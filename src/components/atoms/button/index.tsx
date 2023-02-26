import { useRouter } from "next/navigation";
import React from "react";

const Button = () => {
  const router = useRouter();
  return (
    <button
      style={{
        fontWeight: "bold",
        margin: "1rem",
        fontSize: "20px",
        padding: ".5rem",
      }}
      type="button"
      onClick={() => router.back()}
    >
      Back
    </button>
  );
};

export default Button;
