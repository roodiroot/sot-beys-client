import React from "react";

const CheckBoxOk = ({ style, label, selected, value }) => {
  return (
    <div style={style} className='checkBoxCastom'>
      <legend className='checkBoxCastom__legend'>{label}*</legend>
      <div className='checkBoxCastom__radioButtonsBlock'>
        <label className='silver'>
          <input
            onChange={(e) => selected(!value)}
            className='checkBoxCastom-Input-checkbox'
            type='checkbox'
            name={label}
            value={value}
          />
          <span className='checkBoxCastom-Fake-checkbox'></span>
        </label>
      </div>
    </div>
  );
};

export default CheckBoxOk;
