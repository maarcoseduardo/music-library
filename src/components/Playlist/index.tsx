import { FiSearch } from "react-icons/fi";
import {
  SectionContainer,
  Content,
  Div,
  Input,
  SectionPlaylist,
  PLaylistContainer,
  Title,
  DivContainerAlbum,
  ImageAlbum,
  TitlePlaylist,
  Paragraph,
  SectionViewsTracks,
  DivView,
  UnlistView,
  List,
  ImageProfileAlbum,
  DivContainerProfileDescription,
  DivProfile,
  DivProfileDescription,
  TitleProfile,
  ParagraphDate,
  ParagraphAlbum,
  UnlistTracks,
  ListTracks,
  ImageTracks,
  DivTracks,
  TitleTracksAuthors,
  TitleTracks,
  DivTracksDescription,
} from "./styles";

import { playlists } from "../../services/playlistsAlbums";
import { profileView } from "../../services/profileView";
import { playlistTracks } from "../../services/playlistTracks";

export function Playlist() {
  return (
    <SectionContainer>
      <Content>
        <Div>
          <span>
            <FiSearch color="white" />
          </span>
          <Input placeholder="Search artists, playlists or tracks" />
        </Div>
        <Title>Featured Playlists</Title>
        <SectionPlaylist>
          <PLaylistContainer>
            {playlists.map((playlists) => (
              <DivContainerAlbum key={playlists.id}>
                <ImageAlbum src={playlists.image} />
                <TitlePlaylist>{playlists.name}</TitlePlaylist>
                <Paragraph>{playlists.tracks}</Paragraph>
              </DivContainerAlbum>
            ))}
          </PLaylistContainer>
        </SectionPlaylist>
        <SectionViewsTracks>
          <DivView>
            <Title>Profile Views</Title>
            <UnlistView>
              {profileView.map((profileView) => (
                <List key={profileView.id}>
                  <DivProfile>
                    <DivContainerProfileDescription>
                      <ImageProfileAlbum src={profileView.image} />
                      <DivProfileDescription>
                        <TitleProfile>{profileView.profileName}</TitleProfile>
                        <ParagraphDate> {profileView.lastView}</ParagraphDate>
                      </DivProfileDescription>
                    </DivContainerProfileDescription>
                    <ParagraphAlbum>{profileView.albums}</ParagraphAlbum>
                  </DivProfile>
                </List>
              ))}
            </UnlistView>
          </DivView>
          <DivTracks>
            <Title>Tracks</Title>
            <UnlistTracks>
              {playlistTracks.map((tracks) => (
                <ListTracks key={tracks.id}>
                  <ImageTracks src={tracks.image} />
                  <DivTracksDescription>
                    <TitleTracksAuthors>{tracks.author}</TitleTracksAuthors>
                    <TitleTracks>{tracks.music}</TitleTracks>
                  </DivTracksDescription>
                </ListTracks>
              ))}
            </UnlistTracks>
          </DivTracks>
        </SectionViewsTracks>
      </Content>
    </SectionContainer>
  );
}
