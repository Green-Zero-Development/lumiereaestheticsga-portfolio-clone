'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

function toggleDropdown(dropTrig) {
  dropTrig.target.nextSibling.classList.toggle("desktop-menu-toggle");
}

function toggleMobileDropdown(dropTrig) {
    dropTrig.target.nextSibling.classList.toggle("mobile-menu-toggle");
    dropTrig.target.querySelector('.mobile-menu-dropdown-icon').classList.toggle('mobile-menu-dropdown-icon-flipped');
}

function toggleDropdownOn(dropTrig) {
    dropTrig.target.nextSibling.classList.add("desktop-menu-toggle");
}
  
function toggleDropdownOff(dropTrig) {
    const desktopDropdowns = document.querySelectorAll('.dropdown');
    for (let i = 0; i < desktopDropdowns.length; i++) {
        desktopDropdowns[i].classList.remove("desktop-menu-toggle");
    }
}

const mobiletoggle = () => {
  document.getElementById("mobile-menu").classList.toggle("mobile-menu-active");
  document.getElementById("mobile-menu-close").classList.toggle("mobile-menu-toggle-icon");
}

// #region Styles

const HeaderStyle = styled.header`
display: none;
    position: sticky;
    top: 0;
    width: 100%;
    background-color: #222222;
    padding: 25px 8px 25px 8px;
    z-index: 50;
    transition: .25s;
    .header-wrapper {
        max-width: 1408px;
        margin: auto;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        align-items: center;
        justify-content: center;
    }
    .desktop-menu-toggle {
        opacity: 1 !important;
        pointer-events: auto !important;
    }
    .mobile-menu-toggle {
        opacity: 1 !important;
        height: 100% !important;
        padding-top: 8px !important;
    }
    .mobile-menu-active {
        pointer-events: initial !important;
        opacity: 1 !important;
        transform: scale(1.0) !important;
        z-index: 999;
        transition: .25s;
    }
    .active-menu-toggle {
        opacity: 1 !important;
        width: 100% !important;
        height: 100% !important;
        padding: 10px !important;
    }
    .mobile-menu-active {
        pointer-events: initial !important;
        opacity: 1 !important;
        transform: scale(1.0) !important;
        transition: .25s;
        .mobile-menu-toggle {
            pointer-events: auto !important;
        }
    }
`;

const DesktopLogoLink = styled.div`
    grid-column: span 12 / span 12;
    margin: 0 auto;
    @media (min-width: 992px) {
        grid-column: span 6 / span 6;
        margin-left: 0px;
    }
`;

const MobileMenuOpen = styled.div`
    position: fixed;
    bottom: 55px;
    left: auto;
    right: auto;
    width: 100%;
    z-index: 5;
    svg {
        margin: auto;
    }
    @media (min-width: 992px) {
        display: none;
    }
`

const MobileMenuClose = styled.div`
    display: none;
    position: fixed;
    bottom: 55px;
    left: auto;
    right: auto;
    width: 100%;
    z-index: 999;
    svg {
        margin: auto;
    }
`

const MainNavi = styled.div`
    grid-column: span 6 / span 6;
    display: flex;
    align-items: center;
    ul {
        display: none;
        font-size: 14px;
        align-items: center;
        margin-left: auto;
        @media (min-width: 992px) {
            display: flex;
        }
        @media (min-width: 1200px) {
            font-size: 16px;
        }
        li {
            color: #ffffff;
            a {
                color: #ffffff;
                padding: 8px 0px 8px 0px;
                @media (min-width: 992px) {
                    padding: 22px 0px 20px 0px;
                }
                @media (min-width: 1200px) {
                    padding: 26px 0px 24px 0px;
                }
            }
            @media (min-width: 992px) {
                margin-left: 30px;
            }
            @media (min-width: 1200px) {
                margin-left: 30px;
            }
            @media (min-width: 1440px) {
                margin-left: 48px;
            }
            .dropdown-trigger {
                padding: 8px 8px 8px 8px;
                @media (min-width: 992px) {
                    padding: 22px 8px 20px 8px;
                }
                @media (min-width: 1200px) {
                    padding: 26px 8px 24px 8px;
                }
            }
            .dropdown {
                opacity: 0;
                pointer-events: none;
                position: absolute;
                display: flex;
                flex-wrap: wrap;
                background-color: #ffffff;
                padding: 5px;
                a {
                    width: 100%;
                    color: #222222;
                    padding: 5px 0 5px 0;
                }
            }
        }
    }
`

const MobileMenu = styled.div`
    position: fixed;
    inset: 0;
    overflow-y: scroll;
    pointer-events: none;
    opacity: 0;
    transform: scale(1.1);
    background-color: #222222;
    padding: 48px 0px 0px 0px;
    z-index: -1;
    transition: .25s;
    .mobile-items {
        position: relative;
        padding-bottom: 200px;
    }
    .mobile-menu-header {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        align-items: center;
        justify-content: center;
        padding: 6px 6px 6px 6px;
    }
    ul {
        padding-top: 3rem;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        li {
            width: 100%;
            font-size: 25px;
            color: #ffffff;
            margin-bottom: 1rem;
            a {
                display: flex;
                width: 100%;
            }
        }
        .mobile-single-drop {
            width: 100%;
            font-size: 25px;
            color: #ffffff;
            margin-bottom: 1rem;
            .dropdown-trigger {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            svg {
                pointer-events: none;
            }
            .dropdown {
                opacity: 0;
                height: 0;
                pointer-events: none;
                display: flex;
                flex-wrap: wrap;
                font-size: 25px;
                margin-left: 8px;
                a {
                    width: 100%;
                }
            }
            .drop-title {
                pointer-events: none;
            }
        }
    }
    .social {
        display: flex;
        padding: 1.5rem;
        a {
            margin-right: 1rem;
        }
    }
    .after-menu {
        padding: 1.5rem;
        h6 {
            font-family: franklin-gothic-urw,sans-serif;
            color: #fef4ea;
            display: flex;
            flex-wrap: wrap;
            padding-bottom: 1.5rem;
            b {
                width: 100%;
            }
        }
    }
`

// #endregion

export default function Page({ logos, mainMenu, mobileMenu }) {

    const mainLogo = logos[0].acf.logo.url;
    const mainLogoAlt = logos[0].acf.logo.alt;

    const mobileLogo = logos[0].acf.mobile_menu_logo.url;
    const mobileLogoAlt = logos[0].acf.mobile_menu_logo.alt;

    return (
        <>
 
        </>
    );
}