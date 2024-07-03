import React from 'react';
import cls from "./Footer.module.scss"
import { IoLogoInstagram } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";

import {Link} from "react-router-dom";

const Footer = () => {

    return (
        <div className={cls.main}>
            <div className={cls.companyData}>
                <div className={cls.wrapperCompanyDate}>
                    <div className={cls.elementCompanyDate}>
                        <h2>
                            Социальные сети
                        </h2>
                        <div className={cls.wrapperIconsForSocialMedia}>
                            <Link to={"https://www.instagram.com/buhgalter_bishkek_1c"}>
                                <div className={cls.wrapperIcon}>
                                    <IoLogoInstagram/>
                                </div>
                            </Link>
                            <Link to={"https://www.instagram.com/buhgalter_bishkek_1c"}>
                                <div className={cls.wrapperIcon}>
                                    <FaWhatsapp/>
                                </div>
                            </Link>
                            <Link to={"https://t.me/madinka"}>
                                <div className={cls.wrapperIcon}>
                                    <FaTelegram/>
                                </div>
                            </Link>
                            <Link to={"https://www.tiktok.com/@buhgalter_bishkek_1c"}>
                                <div className={cls.wrapperIcon}>
                                    <IoLogoTiktok/>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className={cls.elementCompanyDate}>
                        <h2>
                            Контакты
                        </h2>
                        <div className={cls.wrapperIconsForContacts}>
                            <div className={cls.wrapperContact}>
                                <Link to={"https://2gis.kg/bishkek/firm/70000001078720042"}>
                                    <MdLocationOn color={"white"}/>
                                    Наш Адрес
                                </Link>
                            </div>
                            <div className={cls.wrapperContact}>
                                <Link to={"tel:+996700766507"}>
                                    <FaPhone color={"white"}/>
                                    +996700766507
                                </Link>
                            </div>
                            <div className={cls.wrapperContact}>
                                <Link to={"mailto:baktigul_sd@gmail.com"}>
                                    <LuMail color={"white"}/>
                                    baktigul_sd@gmail.com
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cls.wrapperCompanyDate}>
                    <div className={cls.elementCompanyDate}>
                        <h2>
                            СВИДЕТЕЛЬСТВО
                        </h2>
                        <p>
                            О ГОСУДАРСТВЕННОЙ РЕГИСТРАЦИИ ЮРИДИЧЕСКОГО ЛИЦА
                            Регистрационный номер: 204683-3301-ООО
                            ОКПО:31420032
                            ИНН:03103202210174
                        </p>
                    </div>
                    <div className={cls.elementCompanyDate}>
                        <h2>
                            ЛИЦЕНЗИЯ
                        </h2>
                        <p>
                            ОсОО "Практикум"
                            Регистрационный номер: E2022-0105
                        </p>
                    </div>
                </div>
            </div>
            <div className={cls.companyDopData}>
                <h3>
                    © Practicum, All Right Reserved. Developed By Oskonbaev & Shatmanov
                </h3>
            </div>
        </div>
    );
};

export default Footer;