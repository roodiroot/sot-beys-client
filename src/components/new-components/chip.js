import React from "react";

const Chip = ({ title = "Пустой чипс" }) => {
  return (
    <div className='chip'>
      <span>{title}</span>
    </div>
  );
};

export default Chip;
