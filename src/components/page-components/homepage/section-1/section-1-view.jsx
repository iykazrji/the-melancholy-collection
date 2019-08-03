import React from "react";
import Styled from "styled-components/macro";

const SectionWrapper = Styled.div`
    min-height: 70vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${props =>
      props.theme.fonts ? props.theme.fonts.crimson : `'Crimson Pro', serif`};
`;

const HeroContentWrapper = Styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const MainHeroText = Styled.h1`
    font-size: 6rem;
    display: block;
    font-weight: 300;
    text-align: center;
    margin-bottom: 3rem;
    @media screen and (max-width: 736px){
      font-size: 2.4rem;
    }
`;
const MainHeroSubtext = Styled.span` 
    display: block;
    font-size: 1.2rem;
    font-weight: 400;
    letter-spacing: 10;
    font-family: ${props =>
      props.theme.fonts
        ? props.theme.fonts.redHat
        : `'Red Hat Display', serif`};
  
    @media screen and (max-width: 736px){
      font-size: 1rem;
    }    
`;
const Section1 = () => {
  return (
    <SectionWrapper>
      <HeroContentWrapper>
        <MainHeroText>The Melancholy Collection</MainHeroText>
        <MainHeroSubtext>
          A Collection of works from Elon Einstein.
        </MainHeroSubtext>
      </HeroContentWrapper>
    </SectionWrapper>
  );
};

export default Section1;
