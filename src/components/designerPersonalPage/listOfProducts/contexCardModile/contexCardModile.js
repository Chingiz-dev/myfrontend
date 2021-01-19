import React from 'react';
import ContextCard from '../contextCard/contextCard';
import style from './contexCardModile.module.css'

const ContexCardModile = () => {
  return (
      <div className={style.contexBlock}>
        <div className={style.title}>Добавить товар</div>
        <ContextCard
            titleBtn={'Добавить'}
        />
      </div>
  );
};

export default ContexCardModile;