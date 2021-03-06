import styled from "styled-components";

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 300px;
  height: 100vh;
  background: var(--black-900);
  color: var(--white-300);

  @media (max-width: 720px) {
    max-width: 100%;
    height: 700px;
    transition: 0.3s;
  }
`;

export const DivProfile = styled.div`
  display: flex;
  gap: 1rem;
  margin: 6rem 1rem;

  @media (max-width: 1080px) {
    display: block;
    width: 150px;
    text-align: center;
    transition: 0.3s;
  }

  @media (max-width: 720px) {
    max-width: 100%;
    margin: 6rem auto;
    transition: 0.3s;
  }
`;

export const ImageProfile = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 10px;

  @media (max-width: 1080px) {
    margin-bottom: 1rem;
  }
`;

export const DivDescription = styled.div`
  height: 80px;
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const H1 = styled.h1``;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70vh;

  @media (max-width: 1080px) {
    transition: 0.3s;
  }
`;

export const Unlist = styled.ul`
  height: 200px;
  width: 130px;
  border-top: 1px solid var(--white-300); //Adicionar linha como content

  @media (max-width: 720px) {
    height: 150px;
    transition: 0.3s;
  }
`;

export const List = styled.li`
  margin: 10px 0;
`;

export const Anchor = styled.a`
  color: var(--white-300);
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 0 auto;
  
  &:hover {
    transition: 0.3s;
    filter: brightness(60%);
  }
`;

export const AnchorEdit = styled.a`
  color: var(--white-300);
  display: flex;
  align-items: center;
  text-align: center;
  gap: 5px;

  @media (max-width: 1080px) {
    justify-content: center;
  }
  @media (max-width: 720px) {
    justify-content: center;
  }
  
  &:hover {
    transition: 0.2s;
    filter: brightness(60%);
  }
`;
export const SpanIcon = styled.span``;
