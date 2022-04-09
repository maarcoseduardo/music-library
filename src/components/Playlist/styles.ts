import styled from "styled-components";

export const SectionContainer = styled.section`
  //max-width: 1746px;
  width: 100%;
  background-color: var(--blue-600);
`;
export const Content = styled.div`
  padding: 1rem 2rem;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  background: var(--blue-600);
  color: var(--white-300);
  max-width: 500px;
  width: 100%;
  margin: 10px;
  padding: 5px;
  border: none;
  box-shadow: none;
`;

export const SectionPlaylist = styled.section`
  height: 300px;
  @media (max-width: 1080px) {
    overflow-x: scroll;
    max-width: 800px;
    transition: 0.2s;
  }
`;

export const PLaylistContainer = styled.div`
  display: flex;
  gap: 20px;
`;
export const Title = styled.h2`
  color: var(--white-300);
  margin: 15px 0;
`;

export const DivContainerAlbum = styled.div``;

export const ImageAlbum = styled.img`
  width: 330px;
  height: 200px;
`;

export const TitlePlaylist = styled.h3`
  margin: 10px 0;
  color: var(--white-300);
`;

export const Paragraph = styled.p`
  color: var(--white-300);
  filter: brightness(60%);
`;

export const SectionViewsTracks = styled.section`
  display: flex;
  width: 100%;
  gap: 50px;
  @media (max-width: 1080px) {
    gap: 20px;
    transition: 0.2s;
  }

  @media (max-width: 720px) {
    display: block;
  }
`;

export const DivView = styled.div`
  max-width: 330px;
  width: 100%;

  @media (max-width: 1080px) {
    max-width: 350px;
    transition: 0.2s;
  }
`;

export const DivTracks = styled.div``;

export const UnlistView = styled.ul``;

export const List = styled.li``;

export const ImageProfileAlbum = styled.img`
  width: 55px;
  height: 55px;
`;

export const DivProfile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 450px;
  margin-bottom: 1rem;

  @media (max-width: 1080px) {
    width: 100%;
    transition: 0.2s;
  }
`;
export const DivContainerProfileDescription = styled.div`
  display: flex;
  width: 180px;
  justify-content: space-between;
`;
export const DivProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 107px;
`;

export const TitleProfile = styled.h3`
  color: var(--white-300);
  margin-bottom: 1rem;
`;

export const ParagraphDate = styled.p`
  font-size: 0.7rem;
  color: var(--white-300);
  filter: brightness(60%);
`;

export const ParagraphAlbum = styled.p`
  font-size: 0.7rem;
  color: var(--white-300);
  filter: brightness(60%);
`;

export const UnlistTracks = styled.ul`
  display: flex;
  gap: 20px;
  @media (max-width: 1080px) {
    overflow-x: scroll;
    transition: 0.2s;
    max-width: 500px;
  }

  @media (max-width: 1080px) {
    max-width: 800px;
  }
`;

export const ListTracks = styled.li``;

export const ImageTracks = styled.img`
  width: 125px;
  height: 110px;
  border-radius: 5px;
`;

export const DivTracksDescription = styled.div`
  margin-bottom: 1rem;
`;

export const TitleTracksAuthors = styled.h3`
  color: var(--white-300);
  margin-bottom: 0.4rem;
`;

export const TitleTracks = styled.p`
  font-size: 0.7rem;
  color: var(--white-300);
  filter: brightness(60%);
`;
