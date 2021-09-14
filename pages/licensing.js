import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

export default function Licensing() {
    return (
        <div className="container">
            <Head>
                <title>Licensing | 1 Martian Way</title>
                <meta
                    name="Description"
                    content="1 Martian Way licenses its innovations for third-party usage."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>
                <div className="jumbotron">
                    <div className="h1">Licensing - 1 Martian Way</div>
                </div>
                <div className="card border-dark mb-3">
                    <div className="card-header">Licensing</div>
                    <div className="card-body text-dark">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <p>
                                        Our Licensing Policy is currently being
                                        revised and will be updated shortly.
                                    </p>
                                    <p />
                                    <h5>Contact Us</h5>
                                    <p />
                                    If you have any questions about our
                                    Licensing Policy please contact us at:
                                    <p />
                                    1 Martian Way Corp.
                                    <br />
                                    https://1martianway.com
                                    <br />
                                    Regd. Office
                                    <br />
                                    502 Satya Sadan, Bhimani Street, Matunga
                                    East,
                                    <br />
                                    Mumbai – 400 019, India
                                    <br />
                                    Tel: +91 8850.227233
                                    <br />
                                    Email: sales[at]1martianway[dot]com
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
