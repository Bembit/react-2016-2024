import { Fragment } from "react";
import Head from "next/head";

export const getStaticPaths  = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();

    const paths = data.map(product => {
        return {
            params: { id: product.id.toString()}
        }
    })

    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps = async ( context ) => {
    // context object checks all the paths for all the id-s needed
    const id = context.params.id
    const res = await fetch('https://fakestoreapi.com/products/' + id)
    const data = await res.json();
    
    return {
        props: { product: data }
    }
}
 
// read destructuring again
const Product = ({ product }) => {
    return ( 
        // difference between Fragment and <>
        // fragment supports the key attribute
        // I'm using Fragment cause it's more readable than () => ...d=o <> : D ? ! 3" fucking javascript sometimes
        <Fragment>
            <Head>
                <title>{product.title}</title>
            </Head>
            <div>{product.id}</div>
            <div>{product.title}</div>
            <div>{product.image}</div>
            <div>{product.description}</div>
            <div>{product.price}</div>
        </Fragment>
     );
}
 
export default Product;