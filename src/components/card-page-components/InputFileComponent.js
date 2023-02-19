import React from 'react';

function InputFileComponent({ style, children, setValue }) {
  const setFile = (e) => {
    setValue(e.target.files);
  };
  return (
    <div style={style} className="inputCastom">
      <legend className="inputCastom__legend">{children}</legend>
      <div className="inputCastom__body file-input">
        <input onChange={setFile} type="file" multiple accept=".jpg,.jpeg,.png" />
      </div>
    </div>
  );
}

export default InputFileComponent;
