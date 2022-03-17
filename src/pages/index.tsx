import {Dashboard} from "../components/Dashboard";
import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>Music Library - Dashboard</title>
            </Head>
            <Dashboard/>
        </>
    )
}
