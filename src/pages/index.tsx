import { Dashboard } from "../components/Dashboard";
import Head from "next/head";
import { GetServerSideProps } from "next";

interface HomeProps {
    props: void;
}

export default function Home(props: HomeProps) {
  return (
    <>
      <Head>
        <title>Music Library - Dashboard</title>
      </Head>
      <Dashboard />
    </>
  );
}
export const getServerSideProps: GetServerSideProps = async() => {
  return {
    props: {

    },
  };
};
