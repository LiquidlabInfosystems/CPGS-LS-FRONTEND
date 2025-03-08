import { useState, useEffect } from "react";

const DynamicToggle = ({
  id,
  label,
  checked = false,
  onChange,
  required,
  error,
  touched,
  Class,
  activeLabel = "Active",
  inactiveLabel = "Inactive",
}) => {
  const [isActive, setIsActive] = useState(checked);

  useEffect(() => {
    setIsActive(checked);
  }, [checked]); 

  const handleToggle = (isActiveState) => {
    setIsActive(isActiveState);
    if (onChange) {
      onChange(id, isActiveState);
    }
  };

  return (
    <div className="mb-4 w-60">
      {label && (
        <label
          htmlFor={id}
          className="block text-gray-700 text-sm font-semibold capitalize mb-1"
        >
          {label}
          {required && <span className="text-red-700 ml-1">*</span>}
        </label>
      )}
      <div className={"relative h-11 flex items-center border rounded overflow-hidden " + Class}>
        <span
          className={`absolute w-1/2 h-full text-white flex items-center justify-center rounded transition-transform duration-300 ease-in-out ${
            isActive ? "transform translate-x-0 bg-primary" : "transform translate-x-full bg-gray-500"
          }`}
        />
        <button
          type="button"
          onClick={() => handleToggle(true)}
          className={`z-10 w-1/2 h-full focus:outline-none transition-colors duration-300 
            ${isActive ? "text-white bg-primary font-bold" : "text-gray-300"}
            `}
        >
          {activeLabel}
        </button>
        <button
          type="button"
          onClick={() => handleToggle(false)}
          className={`z-10 w-1/2 h-full focus:outline-none transition-colors duration-300 ${
            !isActive ? "text-white bg-primary font-bold" : "text-gray-300"
          }`}
        >
          {inactiveLabel}
        </button>
      </div>
      {error && touched && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default DynamicToggle;
