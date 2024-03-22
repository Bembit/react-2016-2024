import Head from "next/head";
import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";

// https://fakestoreapi.com/products/
// no useeffect, we need to fetch before render in next
// this function runs at buildtime, not in the browser
export const getStaticProps = async () => {
    const res = await fetch('https://fakestoreapi.com/products');

    const data = await res.json();

    return {
        props: { products: data ?? [] }
    }

} 

const Products = ({ products }) => {
    return ( 
        <Fragment>
        <Head>
            <title>Products | Main</title>
            <meta name="keywords" content="products" />
        </Head>
        <div className="bg-white container mx-auto p-4">
            {products.map(product => (
                <Link className="card text-center" key={product.id} href={`/products/${product.id}`}>
                    {/* can be overwritten in css, but it needs a size for SSR */}
                    <Image src={product.image} alt={product.description} height={125} width={125}></Image>
                    {/* truncate the title, check for built in like in Vues Nuxt */}
                    <div>{product.title}</div>
                    <div>{product.price}</div>
                </Link>
            ))}
        </div>
        </Fragment>
     );
}
 
export default Products;