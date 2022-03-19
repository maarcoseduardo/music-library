import styled from 'styled-components';

export const Aside = styled.aside`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 300px;
    width: 100%;
    height: 100vh;
    background: var(--black-900);
    color: var(--white-300);
`; 

export const DivProfile = styled.div`
    max-width: 270px;
    min-width: 270px;
    display: flex;
    gap: 1rem;
    margin: 4rem 1rem;
`;

export const ImageProfile = styled.img`
    width: 110px;
    height: 110px;
    border-radius: 10px;
`;

export const DivDescription = styled.div`
    height: 80px;
    width: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const H1 = styled.h1`
`;

export const Paragraph = styled.p`
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 70vh;
`;

export const Unlist = styled.ul`
    height: 200px;
    width: 130px;
    border-top: 1px solid var(--white-300); //Adicionar linha como content
`;

export const List = styled.li`
    margin: 10px 0;
`;

export const Anchor = styled.a`
    color: var(--white-300);

    &:hover{
        transition: 0.2s;
        filter: brightness(60%);
    }
`;