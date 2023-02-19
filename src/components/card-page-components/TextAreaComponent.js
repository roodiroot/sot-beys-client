import React from 'react';

function TextAreaComponent({ style, selected, value, children }) {
  const setTextArea = (e) => {
    selected(e);
  };
  return (
    <div style={style} className="textAreaCastom">
      <legend className="textAreaCastom__legend">{children}</legend>
      <textarea
        value={value}
        onChange={(e) => setTextArea(e.target.value)}
        name="textAreaCastom"></textarea>
    </div>
  );
}

export default TextAreaComponent;
