import React, {useState} from 'react';
import style from './productItem.module.css';
import CheckBox from '../../../../fields/CheckBox';
import InvisibleBackDrop from '../../UI/invisibleBackDrop/invisibleBackDrop';
import ToggleButton from '../../UI/toggleButton/toggleButton';

const ProductItem = ({
                       id,
                       labelSize,
                       commissionPriceRub,
                       commissionPricePercent,
                       imageUrl,
                       title, vendorCode, date, price,
                     }) => {

  const [toggle, setToggle] = useState(false);

  const showContexMenuHandler = () => {
    setToggle(prevState => !prevState);
  };
  const hideMenu = () => {
    setToggle(false);
  };

  const [toggleButton, setToggleButton] = useState(true)

  const changeToggleButton = (value) => {
    setToggleButton(value)
  }

  let cls = '';
  if (toggle) {
    cls = style.showContex;
  } else {
    cls = style.hideContex;
  }

  let styleToggleButton = ''
  if(!toggleButton){
    styleToggleButton = style.disable
  }

  return (
      <div className={`${style.productItem} ${styleToggleButton}`}>
        <div style={{display: 'flex', alignItems: 'center'}}>

          <div className={style.checkBlock}>
            <CheckBox
                label={vendorCode}
                id={id}
                label_size={labelSize}
            />
          </div>
          <div className={style.info}>
            <div className={style.itemImg}>
              <img alt={''} style={{height: '58px', width: '37px'}} src={imageUrl}/>
            </div>
            <div className={`${style.center} ${style.itemTitle}`}>
              {title}
            </div>
            <div className={`${style.center} ${style.itemDate}`}>
              {date}
            </div>
            <div className={`${style.center} ${style.itemCommission}`}>
              <div>{commissionPriceRub}&#8381; </div>
              <div style={{color: 'blue'}}>{commissionPricePercent}%</div>
            </div>
            <div className={`${style.center} ${style.itemPrice}`}>
              {price}
            </div>
            <div className={`${style.center} ${style.itemToggle}`}>
              <ToggleButton
                onChangeToggle={changeToggleButton}
                isChecked={toggleButton}
              />
            </div>
            <div className={`${style.itemAction} ${style.center}`}>
              <img alt={'Contex menu'} onClick={showContexMenuHandler} style={{padding: '5px'}}
                   src={require('../../../../assets/img/action_icon.svg')}/>
              <div className={cls}>
                <ul>
                  <li
                      style={{marginTop: '0px'}}>Редактировать
                  </li>
                  <li>Удалить</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {toggle ? <InvisibleBackDrop onClickHandler={hideMenu}/> : null}

      </div>
  );
};

export default ProductItem;