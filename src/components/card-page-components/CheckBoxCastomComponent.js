import React from 'react';

function CheckBoxCastomComponent({ style, selected }) {
  return (
    <div style={style} className="checkBoxCastom">
      <legend className="checkBoxCastom__legend">Какой цвет вы хотите*</legend>
      <div className="checkBoxCastom__radioButtonsBlock">
        <label className="silver">
          <input
            onChange={(e) => selected(e.target.value)}
            className="checkBoxCastom-Input"
            type="radio"
            name="color"
            value={'silver'}
          />
          <span className="checkBoxCastom-Fake"></span>
        </label>
        <label className="gold">
          <input
            onChange={(e) => selected(e.target.value)}
            className="checkBoxCastom-Input"
            type="radio"
            name="color"
            value={'gold'}
          />
          <span className="checkBoxCastom-Fake"></span>
        </label>
      </div>
    </div>
  );
}

export default CheckBoxCastomComponent;
