import React from 'react'
import '../../../../../assets/styles/App.scss'
import CheckBox from '../../../../../fields/CheckBox';


export const Filter = () => {
  return (
      <div className='filter'>
        <div className="filter__block">
          <p className="filter__block__title">Фильтр</p>
          <CheckBox label={'Модельеры'} id={'1'}/>
          <CheckBox label={'Товары'} id={'1'}/>
          <CheckBox label={'Коллекции'} id={'1'}/>
        </div>

        <div className="filter__block">
          <p className="filter__block__title">Сезоны</p>
          <CheckBox label={'Весна-Лето'} id={'1'}/>
          <CheckBox label={'Осень-Зима'} id={'1'}/>
          <CheckBox label={'Новые коллекции'} id={'1'}/>
          <CheckBox label={'Прошлые коллекции'} id={'1'}/>
        </div>

        <div className="filter__block">
          <p className="filter__block__title">Все категории</p>
          <CheckBox label={'Аксессуары'} id={'1'}/>
          <CheckBox label={'Блузы и рубашки'} id={'1'}/>
          <CheckBox label={'Брюки и шорты'} id={'1'}/>
          <CheckBox label={'Верхняя одежда'} id={'1'}/>
          <CheckBox label={'Джемпера'} id={'1'}/>
          <CheckBox label={'Жакеты и бомберы'} id={'1'}/>
          <CheckBox label={'Платья'} id={'1'}/>
          <CheckBox label={'Юбки'} id={'1'}/>
        </div>

        <div className="button button_black">Показать</div>
      </div>
  );
}


