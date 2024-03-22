import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {

    const router = useRouter();

// rework this to a coundownish component
// will be redirected in 5.. 4.. 3.. bla bla
// this is shit cause redirect fires even if I leave the 404 page early
    useEffect(() => {
        console.log('using effect');
        setTimeout(() => {
            router.push('/')
        }, 3000)
        // why do I have to include router there
    }, [router])

    return ( 

        <div>
            {/* conditional? what if i dont want to show navbar and footer on a 404 */}
            <h1>not found</h1>
            <Link href="/">Go Home</Link>
        </div>

     );
}
 
export default NotFound;