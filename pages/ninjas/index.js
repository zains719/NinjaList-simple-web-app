import Head from 'next/head'
import Styles from '../../styles/Ninjas.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
    const res = await fetch("http://localhost:8000/ninjas");
    const data = await res.json();

    return {
        props: {ninjas : data}
    };
};

const Ninjas = ({ninjas}) => {
    return ( 
        <>
            <Head>
                <title>
                 Ninja List | Ninja Listings
                </title>
                <meta name="keywords" content="ninjas" />
            </Head>
            <div>
                <h1>All Ninjas</h1>
                {ninjas.map(ninja => (
                    <Link href={'ninjas/' + ninja.id} key={ninja.id}>
                        <a className={Styles.single}>
                            <h3>{ninja.name}</h3>
                        </a>
                    </Link>
                ))} 
                <Link href="ninjas/create"><a className={Styles.btn}>Create New Ninja</a></Link>
            </div>
        </>
     );
}
 
export default Ninjas;