import { FiSettings } from "react-icons/fi";
import Link from "next/link";
import Profile from "../../assets/images/profile.jpg";
import {
  BiNews,
  BiMusic,
  BiMessage,
  BiNotification,
  BiUser,
  BiGridAlt,
  BiBarChart,
  BiWorld,
} from "react-icons/bi";
import {
  Aside,
  DivProfile,
  ImageProfile,
  DivDescription,
  H1,
  Section,
  Unlist,
  List,
  Anchor,
  SpanIcon,
  AnchorEdit
} from "./styles";

export function SideBar() {
  return (
    <Aside>
      <DivProfile>
        <ImageProfile src={Profile.src} />
        <DivDescription>
          <H1>Marcos Eduardo</H1>
          <Link href="/">
            <AnchorEdit>
              Edit profile
              <SpanIcon>
                <FiSettings color="white" />
              </SpanIcon>
            </AnchorEdit>
          </Link>
        </DivDescription>
      </DivProfile>
      <Section>
        <Unlist>
          <List>
            <Link href="/">
              <Anchor>
                <SpanIcon>
                  <BiBarChart color="white" />
                </SpanIcon>
                Overview
              </Anchor>
            </Link>
          </List>
          <List>
            <Link href="/">
              <Anchor>
                <SpanIcon>
                  <BiNews color="white" />
                </SpanIcon>
                News
              </Anchor>
            </Link>
          </List>
          <List>
            <Link href="/">
              <Anchor>
                <SpanIcon>
                  <BiMusic color="white" />
                </SpanIcon>
                Playlists
              </Anchor>
            </Link>
          </List>
          <List>
            <Link href="/">
              <Anchor>
                <SpanIcon>
                  <BiWorld color="white" />
                </SpanIcon>
                Discover
              </Anchor>
            </Link>
          </List>
        </Unlist>
        <Unlist>
          <List>
            <Link href="/">
              <Anchor>
                <SpanIcon>
                  <BiGridAlt color="white" />
                </SpanIcon>
                Dashboard
              </Anchor>
            </Link>
          </List>
          <List>
            <Link href="/">
              <Anchor>
                <SpanIcon>
                  <BiMessage color="white" />
                </SpanIcon>
                Messages
              </Anchor>
            </Link>
          </List>
          <List>
            <Link href="/">
              <Anchor>
                <SpanIcon>
                  <BiNotification color="white" />
                </SpanIcon>
                Notifications
              </Anchor>
            </Link>
          </List>
          <List>
            <Link href="/">
              <Anchor>
                <SpanIcon>
                  <BiUser color="white" />
                </SpanIcon>
                Account
              </Anchor>
            </Link>
          </List>
        </Unlist>
      </Section>
    </Aside>
  );
}
