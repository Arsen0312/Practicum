import React, {useEffect, useState} from 'react';
import cls from "./Header.module.scss"
import {Link} from "react-router-dom";
import logoLeft from "./Icons/logoLeft.jpeg"
import NavBar from "./NavBar/ui/NavBar";
import {classNames} from "../../../6Shared/lib/classNames/classNames";
import { CiMenuBurger } from "react-icons/ci";

const Header = () => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false)
    const [isMobile, setIsMobile] = useState<boolean>(false)
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (window.innerWidth <= 990) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }, [width]);


    return (
        <header className={cls.main}>
            <nav className={cls.nav}>
                <div className={cls.wrapperLogo}>
                    <Link to={'/'}>
                        <img className={cls.logo} src={logoLeft} alt=""/>
                        <h1>Practicum</h1>
                    </Link>
                    <button className={cls.button} onClick={() => setIsCollapsed(prev => !prev)}>
                        <CiMenuBurger/>
                    </button>
                </div>

                {isMobile
                    ? <NavBar className={classNames(cls.navItemsMobile, {[cls.isCollapsed]: isCollapsed})}/>
                    : <NavBar className={cls.navItems}/>}
            </nav>
        </header>
    );
};

export default Header;