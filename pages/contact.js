import Head from "next/head";
import Link from "next/link";
import Header from "./header";
import Footer from "./footer";

export default function Contact() {
    return (
        <div className="container">
            <Head>
                <title>Contact | 1 Martian Way</title>
                <meta
                    name="Description"
                    content="Contact 1 Martian Way to enquire about our products and services."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>
                <div className="jumbotron">
                    <div className="h1">Contact - 1 Martian Way</div>
                </div>
                <div className="card border-dark mb-3">
                    <div className="card-header">Contact Us</div>
                    <div className="card-body text-dark">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    1 Martian Way Industries Pvt. Ltd
                                    <br />
                                    https://1martianway.com
                                    <br />
                                    <p />
                                    <b>Regd. Office</b>
                                    <br />
                                    502 Satya Sadan, Bhimani Street, Matunga
                                    East,
                                    <br />
                                    Mumbai – 400 019
                                    <br />
                                    India
                                    <br />
                                    <p />
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
