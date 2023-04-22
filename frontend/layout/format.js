import Header from "../components/header"
import Footer from "../components/footer"
import Section2 from "../components/section2"
import Head from "next/head"

export default function format( { children, posts }){
    // const {posts} = children

    return (
        <>
            <Head>
                <title>Bamba community</title>
            </Head>

            <Header posts={posts}></Header>
            <main>{children}<Section2></Section2></main>
            <Footer></Footer>
        </>
    )
} 