import React from 'react';
import "./footer.css"
import "./footer-mobile.css"
import logo  from '../../image/Group 59.svg'
import naviIcon  from './icon-footer/placeVector.svg'
import phoneFooter  from './icon-footer/phoneFooter.svg'
import VK  from './icon-footer/VK.svg'
import INSTA from './icon-footer/instaFooter.svg'


function Footer() {
    return (
        <footer>
            <img className='logo' src={logo} alt="Логотип" />

            <p className='footer-info'>© 2021 Любое использование либо копирование материалов или подборки материалов сайта,
                элементов дизайна и оформления допускается лишь с разрешения правообладателя
                и только со ссылкой на источник: <bold>https://калининыделают.рф/</bold>.</p>

            <div className="group-footer">
                <p className='footer-title'><bold>Мы находимся :</bold></p>
                <div><img src={naviIcon} alt="" />
                    <p>г. Санкт-Петербург</p>
                </div>
            </div>
            <div className="group-footer">
                <p className='footer-title'><bold>Наши контакты :</bold></p>
                <div><img src={phoneFooter} alt="" />
                    <p>+7 (921) 4074212</p>
                </div>
            </div>
            <div className="group-footer">
                <p className='footer-title'><bold>Мы в соц. сетях :</bold></p>
                <div className='social-icons'>
                    <img src={VK} alt="" />
                    <img src={INSTA} alt="" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;