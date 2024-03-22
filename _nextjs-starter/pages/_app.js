import "@/app/globals.css";
import Layout from "@/components/Layout";

function myApp({ Component, pageProps }) {
    return(
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default myApp;