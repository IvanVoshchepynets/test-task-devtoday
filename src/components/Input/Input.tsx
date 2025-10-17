import React, { useState, type InputHTMLAttributes } from 'react';
import './Input.css';

type Props = {
  clearable?: boolean;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> & {
    type?: 'text' | 'password' | 'number';
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };

export const Input: React.FC<Props> = ({
  clearable = false,
  type = 'text',
  value,
  onChange,
  ...rest
}) => {
  const [visible, setVisible] = useState(false);
  const isPassword = type === 'password';

  const handleClear = () => {
    if (onChange) {
      const ev = { target: { value: '' } } as React.ChangeEvent<HTMLInputElement>;
      onChange(ev);
    }
  };

  return (
    <div className="rc-input">
      <input
        {...rest}
        type={isPassword ? (visible ? 'text' : 'password') : type}
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
          {visible ? 'Hide' : 'Show'}
        </button>
      )}
      {clearable && typeof value === 'string' && value.length > 0 && (
        <button type="button" className="rc-input__clear" onClick={handleClear} aria-label="clear">
          Clear
        </button>
      )}
    </div>
  );
};

export default Input;
