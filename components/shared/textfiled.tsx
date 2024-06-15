import React, { ForwardRefRenderFunction, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  ref?: string;
}

const TextField: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, ...otherProps },
  ref
) => {
  return (
    <label>
      {label}
      <input
        {...otherProps}
        name={name}
        ref={ref}
        className={`min-w-96 outline-none rounded-3xl p-2 border border-caption ${otherProps.className}`}
      />
    </label>
  );
};

const FormInput = React.forwardRef(TextField);

export default FormInput;
