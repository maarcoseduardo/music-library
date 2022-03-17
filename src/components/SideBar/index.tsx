import { FiSettings } from "react-icons/fi";
import Link from 'next/link'
import Profile from "../../assets/images/profile.jpg";
import {
    BiNews,
    BiMusic,
    BiMessage,
    BiNotification,
    BiUser,
    BiGridAlt,
    BiBarChart,
    BiWorld
} from "react-icons/bi";
import {
    Aside,
    DivProfile,
    ImageProfile,
    DivDescription,
    H1,
    Paragraph,
    Section,
    Unlist,
    List,
    Anchor
} from "./styles";

export function SideBar() {
    return (
        <Aside>
            <DivProfile>
                <ImageProfile src={Profile.src} />
                <DivDescription>
                    <H1>Marcos Eduardo</H1>
                    <Paragraph>
                        Edit profile <FiSettings color="white" />
                    </Paragraph>
                </DivDescription>
            </DivProfile>
            <Section>
                <Unlist>
                    <List>
                        <Link href="/">
                            <Anchor><BiBarChart color="white" /> Overview</Anchor>
                        </Link>
                    </List>
                    <List>
                        <Link href="/">
                            <Anchor><BiNews color="white" /> News </Anchor>
                        </Link>
                    </List>
                    <List>
                        <Link href="/">
                            <Anchor><BiMusic color="white" /> Playlists </Anchor>
                        </Link>
                    </List>
                    <List>
                        <Link href="/">
                            <Anchor><BiWorld color="white" /> Discover</Anchor>
                        </Link>
                    </List>
                </Unlist>
                <Unlist>
                    <List>
                        <Link href="/">
                            <Anchor><BiGridAlt color="white" /> Dashboard</Anchor>
                        </Link>
                    </List>
                    <List>
                        <Link href="/">
                            <Anchor><BiMessage color="white" /> Messages</Anchor>
                        </Link>
                    </List>
                    <List>
                        <Link href="/">
                            <Anchor><BiNotification color="white" /> Notifications</Anchor>
                        </Link>
                    </List>
                    <List>
                        <Link href="/">
                            <Anchor><BiUser color="white" /> Account</Anchor>
                        </Link>
                    </List>
                </Unlist>
            </Section>
        </Aside>
    );
}
