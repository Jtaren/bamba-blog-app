import Header from "../components/header"
import Footer from "../components/footer"
import Head from "next/head"

export default function format( { children, posts }){
    // const {posts} = children

    return (
        <>
            <Head>
                <title>Bamba community</title>
            </Head>

            <Header posts={posts}></Header>
            <main>{children}</main>
            <Footer></Footer>
        </>
    )
} 