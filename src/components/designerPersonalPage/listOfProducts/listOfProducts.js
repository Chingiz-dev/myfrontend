import React, {useState} from 'react';
import style from './listOfProducts.module.css';
import {Search} from '../../main/childs/childs/Search';
import CheckBox from '../../../fields/CheckBox';
import CategoryItem from '../categoryItem/categoryItem';
import ProductItem from './productItem/productItem';
import ContextCard from './contextCard/contextCard';
import DarkBackDrop from '../UI/darkBackDrop/darkBackDrop';
import Button from '../UI/button/button';
import ButtonShowElse from '../UI/buttonShowElse/buttonShowElse';
import ButtonPoint from '../UI/buttonBreakPoint/buttonPoint';
import {NavLink} from 'react-router-dom';

const itemsCategory = [
  {title: 'Фото', icon: false},
  {title: 'Наименование товара', icon: false},
  {title: 'Дата создания', icon: true},
  {title: 'Комиссия на продажу', icon: false},
  {title: 'Цена', icon: true},
  {title: 'Скрыть', icon: false},
  {title: 'Действие', icon: false},
];

const ListOfProducts = () => {

  const [toggleAddProduct, setToggleAddProduct] = useState(false);

  const renderCategory = () => {
    return itemsCategory.map((item, index) => {
      return (
          <CategoryItem
              title={item.title}
              icon={item.icon}
              key={index}
          />
      );
    });
  };

  const showAddProductHandler = () => {
    setToggleAddProduct(true);
  };
  const hideAddProductHandler = () => {
    setToggleAddProduct(false);

  };

  return (
      <div className={style.listBlock}>
        <div className={style.title}>
          <h2>Список товаров</h2>
          <div className={style.btn}>
          <Button
              width={'220px'}
              height={'48px'}
              title={'Добавить товар'}
              onClickHandler={showAddProductHandler}
          />
          </div>
          <div className={style.btnPoint}>
            <NavLink to={'/addProductMobile'}>
            <ButtonPoint
                width={'48px'}
                height={'48px'}
                background={'#EE2A7B'}
                image={require('../../../assets/img/plusBtn_icon.svg')}
            />
            </NavLink>
          </div>
        </div>


        <div className={style.scroll}>


          <div className={style.searchAndCategory}>
            <Search
                color={'black'}
            />
            <div className={style.category}>
              <div className={style.checkBox}>
                <CheckBox
                    label={'Артикул'}
                    label_size={16}
                    id={'check'}
                />
                &#x2193;
              </div>
              <div>
                <ul className={style.listCategory}>
                  {renderCategory()}
                </ul>
              </div>
              <div className={style.plug}>

              </div>
            </div>
          </div>
          <div className={style.listProducts}>
            <ProductItem
                id={1}
                labelSize={'14px'}
                title={'Название'}
                price={'5000'}
                commissionPriceRub={'500'}
                commissionPricePercent={'10'}
                vendorCode={'123456789'}
                date={'18.05.2020'}
            />
            <ProductItem
                id={1}
                labelSize={'14px'}
                title={'Название'}
                price={'5000'}
                commissionPriceRub={'500'}
                commissionPricePercent={'10'}
                vendorCode={'123456789'}
                date={'18.05.2020'}
            />

          </div>
        </div>

        <ButtonShowElse/>

        <div className={style.numberPages}>
          Номера страниц
        </div>
        {
          toggleAddProduct ?
              <>
                <ContextCard add={true}
                             titleBtn={'Добавить'}
                             onClickHandler={hideAddProductHandler}
                             title={'Добавить товар'}
                />
                <DarkBackDrop onClickHandler={hideAddProductHandler}/>
              </>
              :
              null}

      </div>
  );
};

export default ListOfProducts;