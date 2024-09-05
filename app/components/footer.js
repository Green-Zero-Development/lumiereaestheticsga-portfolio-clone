'use client';

import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';

function getYear() {
    return new Date().getFullYear();
}

const FooterStyle = styled.footer`
    background-color: #fcf7f4;
    .wrapper {
        max-width: 1380px;
        margin: 0 auto;
        padding: 95px 16px 100px 16px;
        address {
            color: #222;
            font-family: var(--font-general);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 135%;
            opacity: 0.9;
        }
        .contact-details {
            color: #222;
            font-family: var(--font-general);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 135%;
            opacity: 0.9;
        }
        a {
            color: #222;
            font-family: var(--font-general);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 135%;
            opacity: 0.9;
            transition: 0.25s;
            &:hover {
                transform: translateY(-5px);
                transition: 0.25s;
                address {
                    transform: translateY(-5px);
                    transition: 0.25s;
                }
            }
        }
        .social {
            .icon {
                svg {
                    width: 32px;
                    height: 32px;
                    transition: 0.25s;
                    &:hover {
                        fill: #F9C829;
                        transition: 0.25s;
                    }
                }
            }
        }
    }
    .words {
        height: 110px !important;
        @media (min-width: 516px) {
            height: 160px !important;
        }
        @media (min-width: 768px) {
            height: 200px !important;
        }
        @media (min-width: 992px) {
            height: 250px !important;
        }
        @media (min-width: 1200px) {
            height: 340px !important;
        }
        img {
            object-position: bottom;
        }
    }
    @media (min-width: 992px) {
        
    }
`;

export default function Page({siteName, footerMenu, socialMedia, emails, physicalAddresses}) {

    const instagram = socialMedia[0].acf.value_list[0].value;

    const email = emails[0].acf.value_list[0].value;

    const storeAddress = physicalAddresses[0].acf.value_list[0].street + ', ' + physicalAddresses[0].acf.value_list[0].city + ' ' + physicalAddresses[0].acf.value_list[0].state + ', ' + physicalAddresses[0].acf.value_list[0].zip;

    const storeStreet = physicalAddresses[0].acf.value_list[0].street;

    const storeCity = physicalAddresses[0].acf.value_list[0].city + ', ' + physicalAddresses[0].acf.value_list[0].state + ' ' + physicalAddresses[0].acf.value_list[0].zip;


    return (
        <FooterStyle className="relative w-full text-center lg:text-left h-80">
            <div className="grid grid-cols-12 wrapper">
                <Image className="col-span-12 xl:col-span-2 mx-auto lg:ml-0 pb-12 xl:pb-0" src='https://inside.lumiereaestheticsga.com/wp-content/uploads/2024/06/Group-8440.svg' alt='' width={60} height={70} />
                <a href="https://maps.app.goo.gl/Gw7QgMfGRaZ7hrLG9" className="col-span-12 md:col-span-6 xl:col-span-3 pb-8 xl:pb-0">
                    <address>
                        {storeStreet}<br />
                        {storeCity}
                    </address>
                </a>
                <div className="flex flex-wrap col-span-12 md:col-span-6 xl:col-span-3 pb-8 xl:pb-0 contact-details">
                    <a href={`mailto:${email}`} className="w-full email">
                        {email} 
                    </a>
                    <a href="https://shop.lumiereaestheticsga.com/" className="w-full">
                        By Appointment Only
                    </a>
                </div>
                
                <div className="flex col-span-12 xl:col-span-3 gap-6 justify-center lg:justify-end social">
                    <a href={instagram} className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#222222"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                    </a>
                </div>
            </div>
            <div className="relative words">
                <Image className="absolute w-full" src='https://inside.lumiereaestheticsga.com/wp-content/uploads/2024/06/LUMIERE.svg' alt='' fill style={{ objectFit: 'contain' }} />
            </div>
        </FooterStyle>
    );
}