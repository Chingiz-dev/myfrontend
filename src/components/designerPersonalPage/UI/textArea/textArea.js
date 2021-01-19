import React from 'react';
import style from './textArea.module.css'

const TextArea = ({label, id, fzLabel,borderRadius, height, border, marginTop, width}) => {
  return (
      <div style={{
        marginTop: `${marginTop}`
      }}
           className={style.blockText}>
        <label
            style={{
              fontSize: `${fzLabel}`,
            }}
            htmlFor={id}>
          {label}
        </label>
      <textarea
          style={{
            height: `${height}`,
            width: `${width}`,
            border: `${border}`,
            borderRadius: `${borderRadius}`
          }}
        className={style.text}
        id
      >
      </textarea>
      </div>
  );
};

export default TextArea;