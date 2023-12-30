import React from "react";

function InputComponent({
  style,
  children,
  type,
  value,
  setValue,
  placeholder,
}) {
  type = type || "text";

  return (
    <div style={style} className='inputCastom'>
      <legend className='inputCastom__legend'>{children}</legend>
      <div className='inputCastom__body'>
        <input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type={type}
          placeholder={`Введите ${placeholder}`}
          className='inputCastom__input'
        />
      </div>
    </div>
  );
}

export default InputComponent;
