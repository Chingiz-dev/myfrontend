import React from 'react';
import style from './footer.module.css';

const Footer = () => {
  return (
      <div className={style.footer}>

        <div className={style.info}>
          <div className={style.logo}>
            <img src={require('../../../assets/img/main_logo.svg')}
                 alt={'Fit for you'}/>
          </div>

          <div className={style.cols}>

            <div>
              <ul>
                <li>
                  <a className={style.link} href={'#'}>Все модельеры</a>
                </li>
                <li className={style.item}>
                  <a className={style.link} href={'#'}>Модельерам</a>
                </li>
                <li className={style.item}>
                  <a className={style.link} href={'#'}>Снять мерки</a>
                </li>
              </ul>
            </div>

            <div>
              <ul>
                <li>
                  <a className={style.link} href={'#'}>Доставка</a>
                </li>
                <li className={style.item}>
                  <a className={style.link} href={'#'}>Оплата</a>
                </li>
                <li className={style.item}>
                  <a className={style.link} href={'#'}>Возврат</a>
                </li>
              </ul>
            </div>

            <div className={style.item3}>
              <ul>
                <li>
                  <a className={style.link} href={'#'}>Условия использования</a>
                </li>
                <li className={style.item}>
                  <a className={style.link} href={'#'}>Политики
                    конфиденциальности</a>
                </li>
                <li className={style.item}>
                  <a className={style.link} href={'#'}>Куки</a>
                </li>
              </ul>
            </div>

            <div className={style.social}>
              <a href={'#'}>
                <img className={style.icon}
                     src={require('../../../assets/img/vk_icon.svg')}/>
              </a>
              <a href={'#'}>
                <img className={style.icon}
                     src={require('../../../assets/img/facebook_icon.svg')}/>
              </a>
              <a href={'#'}>
                <img className={style.icon}
                     src={require(
                         '../../../assets/img/instagram_icon.svg')}/>
              </a>
            </div>

            <div className={style.icons}>
              <img className={style.masterCard}
                   src={require('../../../assets/img/mastercard_icon.svg')}/>
              <img className={style.visa} style={{marginLeft: '19px'}}
                   src={require('../../../assets/img/visa_icon.svg')}/>
              <img className={style.yandex}
                   src={require('../../../assets/img/yandex_icon.svg')}/>
            </div>
          </div>
        </div>

        <div className={style.protect}>
          <div>© 2020 Fit For You. Все права защищены</div>
          <img className={style.jsCorpImg}
               src={require('../../../assets/img/jsCorp_icon.svg')}/>
        </div>

      </div>
  );
};

export default Footer;