import React, { useState, type InputHTMLAttributes } from "react";
import "./Input.css";

type Props = {
  clearable?: boolean;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  type?: "text" | "password" | "number";
};

export const Input: React.FC<Props> = ({ clearable = false, type = "text", value, onChange, ...rest }) => {
  const [visible, setVisible] = useState(false);
  const isPassword = type === "password";

  const handleClear = () => {
    const ev = { target: { value: "" } } as unknown as React.ChangeEvent<HTMLInputElement>;
    if (onChange) onChange(ev);
  };

  return (
    <div className="rc-input">
      <input
        {...rest}
        type={isPassword ? (visible ? "text" : "password") : type}
        value={value}
        onChange={onChange}
        className="rc-input__field"
      />
      {isPassword && (
        <button
          type="button"
          aria-label="toggle password"
          className="rc-input__icon"
          onClick={() => setVisible((v) => !v)}
        >
          {visible ? "Closed" : "Open"}
        </button>
      )}
      {clearable && (value as any) && (
        <button className="rc-input__clear" onClick={handleClear} aria-label="clear">
          Clear
        </button>
      )}
    </div>
  );
};

export default Input;
