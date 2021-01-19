import React from 'react';
import style from './info.module.css'

const Info = ({name, surname, email}) => {
  return (
      <div className={style.info}>
        <div className={style.name}>
          {`${name} ${surname}`}
        </div>
        <div className={style.email}>
          {email}
        </div>
      </div>
  );
};

export default Info;