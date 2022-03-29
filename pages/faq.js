import Head from "next/head";
import Link from '../src/components/common/Link';

//export async function getServerSideProps(){
export async function getStaticProps(){
    const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';
    const faq  = await fetch(FAQ_API_URL)
        .then((response) => {
            return response.json()
        })
        .then(response => {
            return response
        })

    return {
        props: {
            faq
        }
    }
}

export default function Faq({ faq }){    
    return(
        <div>
            <Head>
                <title>Faq - Alura Cases Campanha</title>
            </Head>
            <h1>Alura Cases - Pagina de Perguntas FAQ</h1>
            <Link href="/">
                Voltar para Home
            </Link>
            <ul>
                {faq.map(({ answer, question }) =>{
                    return(
                        <li key={Math.random()}>
                            <article>
                                <h2>{question}</h2>
                                <p>{answer}</p>
                            </article>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}