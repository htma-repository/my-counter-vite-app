import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-slate-600 py-2 px-4 rounded-md"
    >
      {children}
    </button>
  );
};

export default Button;
