import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'

import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const navItems = [
    { id: "home", label: "Home", href: "#home", offset: 0 },
    { id: "about", label: "About Me", href: "#about", offset: 70 },
    { id: "skills", label: "Skills", href: "#skills", offset: 70 },
    { id: "projects", label: "Portfolio", href: "#projects", offset: 70 },
    { id: "contact", label: "Contact", href: "#contact", offset: 70 },
];

const Navbar = () => {
    const [menu, setMenu] = useState("home")
    const menuRef = useRef();

    useEffect(() => {
        const sections = navItems
            .map((item) => document.getElementById(item.id))
            .filter(Boolean);

        const updateActiveSection = () => {
            const currentSection = sections.reduce((active, section) => {
                const sectionTop = section.getBoundingClientRect().top;
                return sectionTop <= 140 ? section.id : active;
            }, "home");

            setMenu(currentSection);
        };

        updateActiveSection();
        window.addEventListener("scroll", updateActiveSection, { passive: true });
        window.addEventListener("resize", updateActiveSection);

        return () => {
            window.removeEventListener("scroll", updateActiveSection);
            window.removeEventListener("resize", updateActiveSection);
        };
    }, []);

    const openMenu = () => {
        menuRef.current.style.right = "0";
    };
    const closeMenu = () => {
        menuRef.current.style.right = "-350px";
    };
      
  return (
    <div className='navbar'>
      <img src={menu_open} onClick={openMenu} alt='' className='nav-mob-open'/>
      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} onClick={closeMenu} alt='' className='nav-mob-close'/>
        {navItems.map((item) => (
          <li key={item.id} className={menu === item.id ? 'nav-active' : ''}>
            <AnchorLink
              className='anchor-link'
              offset={item.offset}
              href={item.href}
              onClick={() => {
                setMenu(item.id);
                closeMenu();
              }}
            >
              <p>{item.label}</p>
            </AnchorLink>
            {menu === item.id ? <img src={underline} alt=''/> : null}
          </li>
        ))}
      </ul>
      <div className='nav-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar
