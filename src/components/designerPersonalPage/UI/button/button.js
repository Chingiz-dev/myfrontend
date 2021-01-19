import React from 'react';
import style from './button.module.css'

const Button = ({height, width, title, background, color, border, onClickHandler}) => {
  return (
      <div className={style.btn}
           style={{
             height: `${height}`,
             width: `${width}` ,
             background:`${background}`,
             color:`${color}`,
             border:`${border}`,
           }}
           onClick={onClickHandler}
      >
        {title}
      </div>
      
  );
};

export default Button;