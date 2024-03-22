import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <header className="">

            <nav className="">
                {/* Image component auto lazyloads */}
                {/* <Link href="/"><Image src="/logo-placeholder-image.png" alt="test" width={50} height={50} /></Link> */}
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/terms">Terms</Link>
                <Link href="/products">Products</Link>
                <Link href="/products/test">Products/test.js</Link>
                <Link href="/asd">Trigger 404</Link>
            </nav> 

        </header>
    );
}
 
export default Navbar;