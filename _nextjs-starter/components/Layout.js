import Footer from "@/components/Footer"
import Navbar from "@/components/Nav"

const Layout = ({ children }) => {

    // const check404 = router.pathname
    // if router pathname 404
    // render blank 404
    // else render the navbar and all

    return ( 
        <main className="">
            <Navbar />
            { children }
            <Footer />
        </main>
     );
}
 
export default Layout;
