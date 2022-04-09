import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  overflow: hidden;
  height: 100vh;

  @media (max-width: 720px){
    display: block;
    overflow: visible;
  }
`;
