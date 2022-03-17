import ImagePlaylist1 from '../assets/images/playlist1.jpg'
import ImagePlaylist2 from '../assets/images/playlist2.jpg'
import ImagePlaylist3 from '../assets/images/playlist3.jpg'
import ImagePlaylist4 from '../assets/images/playlist4.jpg'

type PlayListProps = {
    id: number;
    image: any;
    name: string;
    tracks: string;
}
        
export const playlists: PlayListProps[]  = [
    {
        id:1,
        image: ImagePlaylist1.src,
        name: "STARDUST",
        tracks: "24 tracks",
    },
    {
        id:2,
        image: ImagePlaylist2.src,
        name: "Mike Vella",
        tracks: "12 tracks",
    },
    {
        id:3,
        image: ImagePlaylist3.src,
        name: "the best singles s2",
        tracks: "163 tracks",
    },
    {
        id:4,
        image: ImagePlaylist4.src,
        name: "Star",
        tracks: "138 tracks",
    },
]