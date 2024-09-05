'use client';

import { motion } from "framer-motion";
import styled from 'styled-components';
import Image from 'next/image';

function getButtonLink(linkToWhere, onSiteLink, offSiteLink, fileLink) {
    switch (linkToWhere) {
      case "Onsite":
        return (onSiteLink);
      case "Offsite":
        return (offSiteLink);
      case "File":
        return (fileLink);
      default:
        return ('/');
    }
}

const Content = styled.div`
    @media (min-width: 992px) {
        
    }
`;

export default function Page({ pageData }) {

    let heroButtonLink = getButtonLink(pageData.acf.hero_section.button.link_to_where, pageData.acf.hero_section.button.onsite_link, pageData.acf.hero_section.button.offsite_link, pageData.acf.hero_section.button.file_link);

    return (
        <>
        <div className="absolute top-0 left-0 w-full">
            <Image className="w-full" src='https://inside.lumiereaestheticsga.com/wp-content/uploads/2024/06/LUMIERE.svg' alt='' width={100} height={100} quality={100} />
        </div>
        <div className="py-80"></div>
        <div className="py-80"></div>
        <div className="py-80"></div>
        <Content>
            
            <div className="wrapper">
              <h1>{pageData.acf.hero_section.title}</h1>
              <p>{pageData.acf.hero_section.description}</p>
              <a href={heroButtonLink}>
                  <div className="button">{pageData.acf.hero_section.button.text}</div>
              </a>
            </div>
        </Content>
        </>
    );
}