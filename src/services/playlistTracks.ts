import ImageTrack1 from '../assets/images/track1.jpg';
import ImageTrack2 from '../assets/images/track2.jpg';
import ImageTrack3 from '../assets/images/track3.jpg';
import ImageTrack4 from '../assets/images/track4.jpg';
import ImageTrack5 from '../assets/images/track5.jpg';
import ImageTrack6 from '../assets/images/track6.jpg';
import ImageTrack7 from '../assets/images/track7.jpg';

type PlaylistTracksProps = {
    id: number;
    image: any;
    author: string;
    music: string;
}

export const playlistTracks: PlaylistTracksProps[] = [
    {
        id:1,
        image: ImageTrack1.src,
        author: 'Mahara Bon',
        music: 'Sexy in Paris'
    },
    {
        id:2,
        image: ImageTrack2.src,
        author: 'Donna',
        music: 'Pseudo Life'
    },
    {
        id:3,
        image: ImageTrack3.src,
        author: 'Avven',
        music: 'Magic'
    },
    {
        id:4,
        image: ImageTrack4.src,
        author: 'Cony',
        music: 'Living'
    },
    {
        id:5,
        image: ImageTrack5.src,
        author: 'Random 1',
        music: 'Random 1'
    },
    {
        id:6,
        image: ImageTrack6.src,
        author: 'Random 2',
        music: 'Random 2'
    },
    {
        id:7,
        image: ImageTrack7.src,
        author: 'Random 3',
        music: 'Random 3'
    },
]