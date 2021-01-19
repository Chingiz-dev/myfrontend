import React from 'react';
import {Logo} from './childs/Logo';
import {FaFacebookF, FaInstagram, FaVk} from 'react-icons/fa';

export const Footer = () => {
  return (
      <div className='footer'>
        <div className="footer_top">
          <Logo black={true}/>
        </div>
        <div className="footer_mid">
          <div className="footer_mid__ul_block">
            <ul>
              <li>Все модельеры</li>
              <li>Модельерам</li>
              <li>Снять мерки</li>
            </ul>
          </div>
          <div className="footer_mid__ul_block">
            <ul>
              <li>Доставка</li>
              <li>Оплата</li>
              <li>Возврат</li>
            </ul>
          </div>
          <div className="footer_mid__ul_block">
            <ul>
              <li>Условия использования</li>
              <li>Политика конфиденциальности</li>
              <li>Куки</li>
            </ul>
          </div>
          <div className="footer_mid__ul_block_ss">
            <ul>
              <li><div style={{ borderWidth: 1, borderColor: '#fff', borderRadius: 25}}><FaVk size={25} /></div></li>
              <li><FaFacebookF size={25} /></li>
              <li><FaInstagram size={25} /></li>
            </ul>
          </div>

        </div>
        <div className="footer_bottom">
          <p className='copyrite'>&copy; 2020 Fit For You. Все права защищены</p>
        </div>
      </div>
  )
}