'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import { ReactLenis, useLenis } from 'lenis/react'
import { motion, useScroll, useTransform, useInView } from "framer-motion";

// #region Styles

const Hero = styled.div`
    top: 32vw;
    .wrapper {
        position: relative;
        
        z-index: 1;
        
    }
    .img-box {
        position: sticky;
        top: 0;
        width: 90%;
        height: 440px !important;
        @media (min-width: 516px) {
            height: 600px !important;
        }
        @media (min-width: 768px) {
            position: absolute;
            width: 660px !important;
            height: 805px !important;
        }
    }
    .content {
        
        width: 80vw;
        margin: 0 auto;
        padding: 0px 16px 0px 16px;
        @media (min-width: 768px) {
            
            padding: 320px 16px 0px 16px;
        }
        @media (min-width: 1440px) {
            
            
        }
        h1 {
            padding-top: 150px;
            padding-bottom: 150px;
            color: #222;
            text-align: center;
            font-family: var(--font-clash);
            font-size: 32px;
            font-style: normal;
            font-weight: 300;
            line-height: 100%; /* 32px */
            letter-spacing: -0.64px;
            @media (min-width: 516px) {
                padding-top: 300px;
                padding-botttom: 0px;
                font-size: 48px;
            }
        }
        h2 {
            color: #222;
            font-family: var(--font-nantes);
            font-size: clamp(32px,  3.34vw, 100px);
            font-weight: 400;
            line-height: 100%;
           
        }
        .second-text {
            padding-top: 20px;
            text-align: right;
            @media (min-width: 768px) {
                padding-top: 80px;
            }
        }
    }
`;

const MobileHero = styled.div`
   
    
    .content {
        padding: 16px 0 0 0;
        width: 100%;
        margin: 0 auto;
        @media (min-width: 516px) {
            width: 80%;
        }
        @media (min-width: 768px) {
            width: 58%;
        }
        @media (min-width: 1440px) {
            
            
        }
        h1 {
            padding-top: 150px;
            padding-bottom: 150px;
            color: #222;
            text-align: center;
            font-family: var(--font-clash);
            font-size: 32px;
            font-style: normal;
            font-weight: 300;
            line-height: 100%; /* 32px */
            letter-spacing: -0.64px;
            @media (min-width: 516px) {
                padding-top: 300px;
                padding-botttom: 0px;
                font-size: 48px;
            }
        }
        h2 {
            color: #222;
            font-family: var(--font-nantes);
            font-size: clamp(32px,  3.34vw, 100px);
            font-weight: 400;
            line-height: 100%;
           
        }
        .second-text {
            padding-top: 20px;
            text-align: right;
            @media (min-width: 768px) {
                padding-top: 80px;
            }
        }
    }
`;

const AfterHero = styled.div`
    
    height: auto;
   
    @media (min-width: 992px) {
        height: 3000px;
    }
    @media (min-width: 1200px) {
        
    }
    .scrolling-img-box {
        height: 110vw;
        margin-top: 14%;
        @media (min-width: 516px) {
            height: 90vw;
        }
        @media (min-width: 768px) {
            height: 70vw;
        }
        @media (min-width: 992px) {
            
            height: 40vw;
        }
        img {
            object-position: top;
        }
        
    }
`;

const MobileTopImage = styled.div`
    height: 3000px;
    .img {
        
        @media (min-width: 400px) {
            
        }
        @media (min-width: 500px) {
            
        }
        img {
            
        }
    }
    
`;

const TopGallery = styled.div`
    
    margin-bottom: 250px;

    @media (min-width: 992px) {
        margin-bottom: 250px;
    }
    .gallery-first-desktop-title {
        bottom: 1800px;
        text-align: center;
        font-family: var(--font-nantes);
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -1.28px;
        color: #222;
        text-align: center;
        font-size: clamp(42px,  3.81vw, 100px);
        margin-top: -80px;
        
        @media (min-width: 1200px) {
            margin-top: 0px;
            
            
        }
        @media (min-width: 1440px) {
            
        }
    }
    .wrapper {
        padding-top: 0px;
        gap: 32px;
        @media (min-width: 992px) {
            padding-top: 100px;
        }
        .first-row {
            margin-top: 0px;
            @media (min-width: 992px) {
                margin-top: -1000px;
            }
            .img-box-one {
                height: 405px !important;
                margin-bottom: 32px;
                @media (min-width: 516px) {
                    height: 605px !important;
                }
                @media (min-width: 768px) {
                    height: 805px !important;
                }
                
                @media (min-width: 1440px) {
                    
                }
            }
            .img-box-two {
                height: 461px !important;
                @media (min-width: 1440px) {
                    
                }
            }
        }
        .second-row {
            margin-top: 550px;
            .img-box-one {
                width: 100% !important;
                height: 805px !important;
                @media (min-width: 1440px) {
                    
                }
            }
        }
        .third-row {
            margin-top: -5600px;
            .img-box-one {
                width: 100% !important;
                height: 461px !important;
                margin-bottom: 32px;
                @media (min-width: 1440px) {
                    
                }
            }
            .img-box-two {
                width: 100% !important;
                height: 805px !important;
                @media (min-width: 1440px) {
                    
                }
            }
        }
        h1 {
            bottom: 440px;
            text-align: center;
            font-family: var(--font-nantes);
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -1.28px;
            color: #222;
            text-align: center;
            font-size: clamp(42px,  3.81vw, 100px);
            margin-top: -80px;
            
            @media (min-width: 1200px) {
                margin-top: 0px;
               
                
            }
            @media (min-width: 1440px) {
               
            }
        }
    }
`;

const MobileTopGallery = styled.div`
    .img-box-one {
        height: 400px;
        @media (min-width: 768px) {
            height: 600px;
        }
    }
    .img-box-two {
        height: 250px;
        @media (min-width: 768px) {
            height: 450px;
        }
    }
    h1 {
        max-width: 600px;
        margin: 0 auto;
        color: #222;
        text-align: center;
        font-family: var(--font-clash);
        font-size: 32px;
        font-style: normal;
        font-weight: 300;
        line-height: 100%;
        letter-spacing: -1.28px;
        @media (min-width: 516px) {
            font-size: 48px;
        }
    }
    h2 {
        max-width: 600px;
        margin: 0 auto;
        color: #222;
        text-align: center;
        font-family: var(--font-clash);
        font-size: 32px;
        font-style: normal;
        font-weight: 300;
        line-height: 100%;
        letter-spacing: -1.28px;
        @media (min-width: 516px) {
            font-size: 48px;
        }
    }
`

const AfterGallery = styled.div`
    .wrapper {
        padding: 0 0px 250px 0px;
        @media (min-width: 1200px) {
            padding: 0 150px 250px 150px;
        }
        .inner-wrapper {
            max-width: 1080px;
        }
        h2 {
            color: #222;
            font-family: var(--font-nantresor);
            font-size: clamp(14px,  0.8vw, 100px);
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            letter-spacing: 2.8px;
            text-transform: uppercase;
        }
        p {
            color: #222;
            font-family: var(--font-general);
            font-size: clamp(24px,  1.43vw, 100px);
            font-style: normal;
            font-weight: 400;
            line-height: 135%;
            
        }
        h1 {
            color: #222;
            text-align: center;
            font-family: var(--font-clash);
            font-size: 32px;
            font-style: normal;
            font-weight: 300;
            line-height: 100%;
            letter-spacing: -1.28px;
            @media (min-width: 516px) {
                font-size: 48px;
            }
        }
    }
`;

const AccordionSection = styled.div`
    background-color: #f4ca33;
    padding: 120px 0 60px 0;
    @media (min-width: 992px) {
        padding: 120px 0 120px 0;
    }
    .wrapper {
        .content {
            @media (min-width: 1200px) {
                padding: 0px 150px 0px 150px;
            }
            h6 {
                color: #222;
                font-family: var(--font-nantresor);
                font-size: clamp(14px,  0.8vw, 100px);
                font-style: normal;
                font-weight: 600;
                line-height: normal;
                letter-spacing: 2.8px;
                text-transform: uppercase;
            }
            h2 {
                color: #222;
                font-family: var(--font-clash);
                font-size: clamp(56px,  7.1vw, 500px);
                font-style: normal;
                font-weight: 300;
                line-height: 100%;
                letter-spacing: -2.4px;
            }
            p {
                color: #222;
                font-family: var(--font-general);
                font-size: clamp(24px,  1.44vw, 100px);
                font-style: normal;
                font-weight: 400;
                line-height: 135%;
            }
        }
        .accordion-wrapper {
            @media (min-width: 1200px) {
                padding: 0 150px 0 150px;
            }
        }
        .img-box {
            height: 662px !important;
        }
        .accordion {
            padding-bottom: 32px;
            h3 {
                font-family: var(--font-clash);
                color: #222;
                font-size: clamp(24px,  2.35vw, 70px);
                font-style: normal;
                font-weight: 400;
                line-height: 100%;
                transition: transform 0.25s;
                &:hover {
                    transform: translateY(-2px);
                    font-weight: 500;
                    transition: 0.25s;
                }
            }
            .active-h3 {
                font-weight: 500;
            }
            .flipped-svg {
                transform: rotate(270deg);
            }
            p {
                color: #222;
                font-family: var(--font-general);
                font-size: 18px;
                font-style: normal;
                font-weight: 400;
                line-height: 135%;
                @media (min-width: 992px) {
                    font-size: 22px;
                }
            }
            a {
                color: #222;
                font-family: var(--font-general);
                font-size: 20px;
                font-style: normal;
                font-weight: 500;
                line-height: 135%;
                text-decoration-line: underline;
                @media (min-width: 992px) {
                    font-size: 24px;
                }
            }
        }
    }
`

const SliderSection = styled.div`
    padding-top: 240px;
    padding-bottom: 240px;
    @media (min-width: 1200px) {
        padding-left: 150px;
    }
    
    .splide__slide {
       
    }
    h2 {
        color: #222;
        font-family: var(--font-nantresor);
        font-size: clamp(14px,  0.8vw, 100px);
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        letter-spacing: 2.8px;
        text-transform: uppercase;
    }
    .border {
        border-left: 1px #222222 solid;
        border-right: 0px;
        border-top: 0px;
        border-bottom: 0px;
        padding: 32px 30px;
    }
    p {
        color: #222;
        font-family: var(--font-general);
        font-size: clamp(20px,  1.43vw, 70px);
        font-style: normal;
        font-weight: 400;
        line-height: 135%;
       
    }
    .name {
        color: #222;
        font-family: var(--font-nantes);
        font-size: clamp(24px,  1.91vw, 70px);
        font-weight: 400;
        line-height: 100%;
        padding-top: 100px;
    }
    svg {
        cursor: pointer;
        path {
            transition: 0.25s;
        }
        &:hover {
            path {
                stroke-width: 3px;
                transform: translateY(-2px);
                transition: 0.25s;
            }
        }
    }
`

const AboutSection = styled.div`

    .wrapper {
        padding-bottom: 120px;
        gap: 40px;
        @media (min-width: 1200px) {
            gap: 100px;
            padding-bottom: 240px;
            padding-right: 210px;
        }
        .content {
            
            padding-top: 64px;
            @media (min-width: 992px) {
                padding-top: 0px;
            }
        }
        h6 {
            color: #222;
            font-family: var(--font-nantresor);
            font-size: clamp(14px,  0.8vw, 100px);
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            letter-spacing: 2.8px;
            text-transform: uppercase;
        }
        h2 {
            color: #222;
            font-family: var(--font-clash);
            font-size: clamp(56px,  5.24vw, 500px);
            font-style: normal;
            font-weight: 300;
            line-height: 100%;
            letter-spacing: -1.76px;
            
        }
        p {
            color: #222;
            font-family: var(--font-general);
            font-size: clamp(24px,  1.43vw, 100px);
            font-style: normal;
            font-weight: 400;
            line-height: 135%;
        }
    }
    .img-box {
        height: 440px !important;
        @media (min-width: 516px) {
            height: 705px !important;
        }
        @media (min-width: 768px) {
            height: 905px !important;
        }
        @media (min-width: 992px) {
            height: 805px !important;
        }
    }
`

const GetInTouch = styled.div`
    border-top: 1px #222 solid;
    border-bottom: 1px #222 solid;
    text-align: center;
    a {
        color: #222;
        text-align: center;
        font-family: var(--font-clash);
        font-size: 92px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -3.4px;
        padding: 40px 0;
        transition: 0.25s;
        &:hover {
            transform: translateY(-5px);
            transition: 0.25s;
        }
        @media (min-width: 1200px) {
            font-size: 170px;
        }
    }
`

// #endregion

export default function Page({ pageData }) {

    const { scrollY } = useScroll();
    
    const growPicture = useTransform(scrollY, [0, 500], [0.95, 1]);

    const topPhotoCss = useTransform(scrollY, [0, 2500], ['0%', '5%']);

    const moveUp = useTransform(scrollY, [0, 2000], [0, -400]);

    const moveDown = useTransform(scrollY, [0, 2000], [0, 4600]);

    const moveUpUtilityBase = useTransform(scrollY, [0, 1000], [0, -1000]);

    const moveUpUtilitySlower = useTransform(scrollY, [0, 2000], [0, -1000]);

    const moveUpUtilitySlowest = useTransform(scrollY, [0, 5000], [0, -500]);

    const lenis = useLenis(({ scroll }) => {
        
    })

    const accordionData = pageData.acf.services_section.service;

    const [activeIndex, setActiveIndex] = useState(null);
    const [imageSrc, setImageSrc] = useState('https://i0.wp.com/inside.lumiereaestheticsga.com/wp-content/uploads/2024/07/image-140.jpg');
    const [isFading, setIsFading] = useState(false);

    const handleClick = (index, picUrl) => {
        if (activeIndex !== index) {
        setActiveIndex(index);
        setIsFading(true);
        setTimeout(() => {
            setImageSrc(picUrl);
            setIsFading(false);
        }, 250);
        }
    };

    const splideTestimonials = useRef(null);

    const handlePrev = () => {
        if (splideTestimonials.current) {
            splideTestimonials.current.splide.go('<');
        }
    };

    const handleNext = () => {
        if (splideTestimonials.current) {
            splideTestimonials.current.splide.go('>');
        }
    };

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const ref6 = useRef(null);
    const isInView1 = useInView(ref1, { once: true, margin: "0px 0px 0px 1000px" });
    const isInView2 = useInView(ref2, { once: true, margin: "0px 0px 0px 1000px" });
    const isInView3 = useInView(ref3, { once: true, margin: "0px 0px -400px 0px" });
    const isInView4 = useInView(ref4, { once: true, margin: "0px 0px -400px 0px" });
    const isInView5 = useInView(ref5, { once: true, margin: "0px 0px -400px 0px" });
    const isInView6 = useInView(ref6, { once: true, margin: "0px 0px -400px 0px" });
    
   
    return (
        <ReactLenis root>
            <AfterHero className="hidden lg:!flex relative z-20">
                <motion.div className="sticky w-full mx-auto overflow-hidden scrolling-img-box"
                    ref={ref1}
                    initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
                    animate={{ clipPath: isInView1 ? 'inset(0% 0% 0% 0%)' : 'inset(0% 0% 100% 0%)' }}
                    transition={{ duration: 1 }}
                    style={{ scale: growPicture, top: topPhotoCss }}>
                    <Image className="overflow-hidden" src={pageData.acf.hero_section.image.url} alt='' fill style={{ objectFit: 'contain' }} quality={100} />
                </motion.div>
            </AfterHero>
            <AfterHero className="lg:hidden flex relative z-20">
                <motion.div className="relative w-full mx-auto scrolling-img-box" 
                ref={ref2}
                initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
                animate={{ clipPath: isInView2 ? 'inset(0% 0% 0% 0%)' : 'inset(0% 0% 100% 0%)' }}
                transition={{ duration: 1 }}>
                    <Image className="overflow-hidden" src={pageData.acf.hero_section.image.url} alt='' fill style={{ objectFit: 'contain' }} quality={100} />
                </motion.div>
            </AfterHero>
            <div className="absolute top-0 left-0 w-full">
                <Image className="w-full" src='https://inside.lumiereaestheticsga.com/wp-content/uploads/2024/06/LUMIERE.svg' alt='' width={100} height={100} quality={100} />
            </div>
            <Hero className="hidden lg:!block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-30">
                <div className="relative w-11/12 md:w-full mx-auto wrapper pb-16">
                    <div className="relative md:flex justify-between z-20 content">
                        <motion.h2 style={{ y: moveUpUtilityBase }}>{pageData.acf.hero_section.left_title}</motion.h2>
                        <motion.h2 className="second-text" style={{ y: moveUpUtilitySlower }}>{pageData.acf.hero_section.right_title}</motion.h2>
                    </div>
                </div>
            </Hero>
            <MobileHero className="lg:!hidden w-full z-30">
                <div className="relative w-11/12 md:w-full mx-auto wrapper pb-16">
                    <div className="relative md:flex justify-between z-20 content">
                        <h2>{pageData.acf.hero_section.left_title}</h2>
                        <h2 className="second-text">{pageData.acf.hero_section.right_title}</h2>
                    </div>
                </div>
            </MobileHero>
            <TopGallery className="hidden lg:!block relative">
                <div className="relative lg:flex wrapper">
                    <motion.h2 className="hidden lg:!block relative lg:absolute w-full text-center gallery-first-desktop-title z-20" style={{ y: moveUpUtilitySlowest }} dangerouslySetInnerHTML={{__html: pageData.acf.gallery_section.pre_gallery_title}}></motion.h2>
                    <div className="flex flex-wrap lg:block w-full lg:w-1/3 first-row">
                        <motion.div className="relative w-11/12 md:w-3/4 lg:w-full img-box-one" style={{ y: moveUp }} >
                            <Image src={pageData.acf.gallery_section.left_top_image.url} alt='' fill style={{ objectFit: 'cover' }} quality={100} />
                        </motion.div>
                        <motion.div className="relative w-3/4 lg:w-full ml-auto lg:ml-0 img-box-two" style={{ y: moveUp }}>
                            <Image src={pageData.acf.gallery_section.left_bottom_image.url} alt='' fill style={{ objectFit: 'cover' }} quality={100} />
                        </motion.div>
                    </div>
                    <div className="hidden lg:!block w-1/3 second-row">
                        
                    </div>
                    <div className="hidden lg:!block w-1/3 third-row">
                        <motion.div className="relative img-box-one" style={{ y: moveDown }}>
                            <Image src={pageData.acf.gallery_section.right_top_image.url} alt='' fill style={{ objectFit: 'cover' }} quality={100} />
                        </motion.div>
                        <motion.div className="relative img-box-two" style={{ y: moveDown }}>
                            <Image src={pageData.acf.gallery_section.right_bottom_image.url} alt='' fill style={{ objectFit: 'cover' }} quality={100} />
                        </motion.div>
                    </div>
                    <motion.h1 className="hidden lg:!block relative lg:absolute w-full text-center -mb-80" style={{ y: moveUpUtilitySlowest }} dangerouslySetInnerHTML={{__html: pageData.acf.gallery_section.post_gallery_title}}></motion.h1>
                </div>
            </TopGallery>
            <MobileTopGallery className="lg:!hidden relative">
                <div className="relative wrapper">
                    <h2 className="relative w-full text-center pt-24 pb-32 px-6" style={{ y: moveUpUtilitySlowest }} dangerouslySetInnerHTML={{__html: pageData.acf.gallery_section.pre_gallery_title}}></h2>
                    <motion.div className="relative w-5/6 mb-12 img-box-one"
                    ref={ref3}
                    initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
                    animate={{ clipPath: isInView3 ? 'inset(0% 0% 0% 0%)' : 'inset(0% 0% 100% 0%)' }}
                    transition={{ duration: 1 }}>
                        <Image src={pageData.acf.gallery_section.left_top_image.url} alt='' fill style={{ objectFit: 'cover' }} quality={100} />
                    </motion.div>
                    <motion.div className="relative w-2/3 ml-auto mb-12 img-box-two"
                   ref={ref4}
                   initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
                   animate={{ clipPath: isInView4 ? 'inset(0% 0% 0% 0%)' : 'inset(0% 0% 100% 0%)' }}
                    transition={{ duration: 1 }}>
                        <Image src={pageData.acf.gallery_section.right_top_image.url} alt='' fill style={{ objectFit: 'cover' }} quality={100} />
                    </motion.div>
                    <h1 className="relative w-full text-center pt-12 pb-32 px-6" dangerouslySetInnerHTML={{__html: pageData.acf.gallery_section.post_gallery_title}}></h1>
                </div>
            </MobileTopGallery>
            <AfterGallery className="px-6 xl:px-0 lg:-mt-40">
                <motion.div className="pt-12 sm:pt-32 md:pt-48 lg:pt-0 wrapper" 
                    initial={{ y: 40 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                        duration: 0.5
                    }}>
                    <div className="inner-wrapper">
                        <h2 className="pb-1">{pageData.acf.post_gallery_section.title}</h2>
                        <p>{pageData.acf.post_gallery_section.paragraph}</p>
                    </div>
                </motion.div>
            </AfterGallery>
            <AccordionSection className="">
                <div className="px-6 xl:px-0 wrapper">
                    <motion.div className="w-full content" 
                    initial={{ y: 80 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                        duration: 0.5
                    }}>
                        <h6 className="pb-4">{pageData.acf.services_section.pretitle}</h6>
                        <h2>{pageData.acf.services_section.title}</h2>
                        <p className="pt-6 pb-12">{pageData.acf.services_section.paragraph}</p>
                    </motion.div>
                    <motion.div className="flex flex-wrap w-full accordion-wrapper"
                    initial={{ y: 80 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                        duration: 0.5
                    }}>
                        <div className="w-full lg:w-7/12 lg:pr-24 accordion-content">
                            {accordionData.map((item, index) => (
                                <div className="accordion" key={index}>
                                    <div className="flex items-center justify-between cursor-pointer" onClick={() => handleClick(index, item.image.url)}>
                                        <h3
                                            className={`${activeIndex === index ? 'active-h3' : ''}`}
                                        >{item.title}</h3>
                                        <svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg" className={`xl:hidden ${activeIndex === index ? 'flipped-svg' : ''}`}>
                                            <g id="Base/CaretDown">
                                            <path id="Vector" d="M9.43945 5.65628L16.9814 13.8267L9.43945 21.9971" stroke="#222222" stroke-width="2.00881" stroke-linejoin="round"/>
                                            </g>
                                        </svg>
                                    </div>
                                    
                                    <div className={`overflow-hidden transition-max-height duration-500 ${activeIndex === index ? 'max-h-80' : 'max-h-0'}`}>
                                        <p className="py-4">{item.description}</p>
                                        <a href={item.cta_link} className="block">{item.cta_text}</a>
                                    </div>
                                </div>
                            ))}
                            
                        </div>
                        <motion.div className="hidden lg:!block relative w-full lg:w-5/12 img-box"
                            ref={ref5}
                            initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
                            animate={{ clipPath: isInView5 ? 'inset(0% 0% 0% 0%)' : 'inset(0% 0% 100% 0%)' }}
                            transition={{ duration: 1 }}>
                            <Image id="accordion-img" className={`mt-4 transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`} src={imageSrc} alt='' fill style={{ objectFit: 'cover' }} quality={100} />
                        </motion.div>
                    </motion.div>
                </div>
            </AccordionSection>
            <SliderSection className="hidden pl-6 xl:pl-0">
                <motion.div className="" 
                    initial={{ y: 80 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                        duration: 0.5
                    }}>
                <h2 className="pb-8">From those feeling 100%</h2>
                <Splide hasTrack={ false }
                    ref={splideTestimonials}
                    options={ {
                        type: 'loop',
                        perPage: 4,
                        perMove: 1,
                        arrows: false,
                        pagination: false,
                        rewind: false,
                        noDrag: true,
                        keyboard: 'global',
                        gap: '60px',
                        padding: '0px',
                        breakpoints: {
                            416: {
                                padding: '0px',
                            },
                            516: {
                                perPage: 1,
                                padding: { left: '', right: '0px' },
                            },
                            768: {
                                perPage: 1,
                                padding: { left: '', right: '150px' },
                            },
                            992: {
                                perPage: 2,
                                padding: { left: '', right: '150px' },
                            },
                            1200: {
                                perPage: 2,
                                padding: { left: '', right: '150px' },
                            },
                            2000: {
                                perPage: 3,
                                padding: { left: '', right: '125px' },
                            },
                            5000: {
                                perPage: 3,
                                padding: { left: '', right: '125px' },
                                
                            }
                        }
                    } }
                    >
                    <SplideTrack>
                        <SplideSlide className={`splide__slide`}>
                            <div className="mx-4 lg:mx-0 border">
                                <p>Lorem ipsum dolor sit amet consectetur. Cursus sed lorem sed cursus pellentesque. Quis vitae mauris ut porttitor. Quam aliquam pellentesque sed elit nam mus placerat cursus. Sagittis massa lectus platea sed. </p>
                                <div className="flex items-center name">
                                    <div className="slash">-</div>
                                    <h5>Samantha</h5>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide className={`splide__slide`}>
                            <div className="mx-4 lg:mx-0 border">
                                <p>Lorem ipsum dolor sit amet consectetur. Cursus sed lorem sed cursus pellentesque. Quis vitae mauris ut porttitor. Quam aliquam pellentesque sed elit nam mus placerat cursus. Sagittis massa lectus platea sed. </p>
                                <div className="flex items-center name">
                                    <div className="slash">-</div>
                                    <h5>Samantha</h5>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide className={`splide__slide`}>
                            <div className="mx-4 lg:mx-0 border">
                                <p>Lorem ipsum dolor sit amet consectetur. Cursus sed lorem sed cursus pellentesque. Quis vitae mauris ut porttitor. Quam aliquam pellentesque sed elit nam mus placerat cursus. Sagittis massa lectus platea sed. </p>
                                <div className="flex items-center name">
                                    <div className="slash">-</div>
                                    <h5>Samantha</h5>
                                </div>
                            </div>
                        </SplideSlide>
                    </SplideTrack>
                </Splide>
                <div className="flex items-center pt-8 px-8 lg:px-0 custom-arrows">
                    <button onClick={handlePrev} className="pr-6 prev-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="27" viewBox="0 0 25 27" fill="none">
                        <path d="M15.0837 21.6411L7.54184 13.4707L15.0837 5.30029" stroke="#222222" stroke-width="2" stroke-linejoin="round"/>
                    </svg>
                    </button>
                    <button onClick={handleNext} className="next-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="27" viewBox="0 0 25 27" fill="none">
                        <path d="M9.18433 5.29984L16.7262 13.4702L9.18433 21.6406" stroke="#222222" stroke-width="2" stroke-linejoin="round"/>
                    </svg>
                    </button>
                </div>
                </motion.div>
                
            </SliderSection>
            <AboutSection className="pt-40 md:pt-64">
                <motion.div className="lg:flex items-center px-4 lg:px-0 wrapper" 
                    initial={{ y: 80 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                        duration: 0.5
                    }}>
                    <motion.div className="relative w-full lg:w-4/12 img-box"
                    ref={ref6}
                    initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
                    animate={{ clipPath: isInView6 ? 'inset(0% 0% 0% 0%)' : 'inset(0% 0% 100% 0%)' }}
                    transition={{ duration: 1 }}>
                        <Image src={pageData.acf.about_section.image.url} alt='' fill style={{ objectFit: 'cover' }} quality={100} />
                    </motion.div>
                    <div className="w-full lg:w-8/12 content">
                        <h6>{pageData.acf.about_section.pretitle}</h6>
                        <h2 className="py-6">{pageData.acf.about_section.title}</h2>
                        <p className="lg:pr-8">{pageData.acf.about_section.paragraph}</p>
                    </div>
                </motion.div>
            </AboutSection>
            <GetInTouch className="flex">
                <a href={pageData.acf.pre_footer_section.link} className="w-full">
                    {pageData.acf.pre_footer_section.text}
                </a>
            </GetInTouch>
        </ReactLenis>
    );
}