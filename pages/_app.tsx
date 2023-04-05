import Head from "next/head";
// add bootstrap 5.0 css
// import "bootstrap/dist/css/bootstrap.css";
import "../styles/bootstrap.min.css";
import "../styles/custom.css";

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default App;
