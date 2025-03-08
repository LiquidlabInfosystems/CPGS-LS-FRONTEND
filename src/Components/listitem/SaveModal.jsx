import { useState, useEffect } from "react";

export default function SavedModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 flex justify-center items-center">

    <div className="modal-overlay bg-white border border-gray-700 rounded-lg " onClick={onClose}>
      <div className="modal-content p-10  " onClick={(e) => e.stopPropagation()}>
        <h2>You Changes Have been Saved Successfully</h2>
        {/* <h2>Saved</h2>
        <button onClick={onClose}>Close</button> */}
      </div>
    </div>
    </div>

  );
}
