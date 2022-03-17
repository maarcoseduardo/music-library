import ImageView1 from '../assets/images/view1.jpg'
import ImageView2 from '../assets/images/view2.jpg'
import ImageView3 from '../assets/images/view3.jpg'

type ProfileViewProps = {
    id: number;
    image: any;
    profileName: string;
    lastView: string;
    albums: string;
    className?: string;
}

export const profileView: ProfileViewProps[] = [
    {
        id: 1,
        image: ImageView1.src,
        profileName: 'Jenny Villa',
        lastView: '1 day ago',
        albums: '4 albums',
    },
    {
        id: 2,
        image: ImageView2.src,
        profileName: 'Aquila',
        lastView: '3 day ago',
        albums: '2 albums',
    },
    {
        id: 3,
        image: ImageView3.src,
        profileName: 'This is War',
        lastView: '2 week ago',
        albums: '5 albums',
    },
]