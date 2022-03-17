import { Playlist } from "../Playlist";
import { SideBar } from "../SideBar";
import { Container } from './styles';

export function Dashboard() {
  return (
    <>
      <Container>
        <SideBar />
        <Playlist />
      </Container>
    </>
  );
}
