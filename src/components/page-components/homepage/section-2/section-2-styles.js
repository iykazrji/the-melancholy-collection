import Styled from "styled-components/macro";

export const SectionWrapper = Styled.div`
    min-height: 100vh;
    width: 100%;
    font-family: ${props =>
      props.theme.fonts ? props.theme.fonts.crimson : `'Crimson Pro', serif`};
`;

export const ImageGridContainer = Styled.div`
  min-height: 300px;
  width: 70%;
  margin: 0 auto;
  @media screen and (max-width: 960px){
    width: 90%; 
  }
  @media screen and (max-width: 736px){
    width: 95%; 
  }
`;

export const ImageGridWrapper = Styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100%;
    overflow-x: hidden;
  `;

export const ImageGridLayer = Styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: noWrap;
  @media screen and (max-width: 480px){
    flex-direction: column;
  }
`;

export const ImageContentColumn = Styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
  @media screen and (max-width: 480px){
    width: 100%; 
  }
`;

export const ImageContainer = Styled.div`
  margin-bottom: 30px;
  padding: 0 15px;
`;

export const ImageWrapper = Styled.div`
 > img {
   max-width: 100%;
   width: 100%;
   background-color: rgba(200, 200, 200, 0.5);
 }`;

export const LoadingIconContainer = Styled.div`
  width: 100%;
  height: 3.5rem;
  opacity: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0px;
  > img {
    height: 100%;
  }`;
