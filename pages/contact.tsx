import Head from "next/head";
import Footer from "./footer";
import Header from "./header";

const Contact = () => {
    return (
        <div className="container">
            <Head>
                <title>Contact | 1 Martian Way</title>
                <meta
                    name="Description"
                    content="Contact 1 Martian Way to enquire about our products and technology."
                />
                <meta
                    property="og:title"
                    content="Contact | 1 Martian Way"
                    key="title"
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
                                    <p>
                                        *Time Saving Tip*: Email is the best way
                                        to get in touch with us as our exact
                                        department can reach out to you quickly
                                        and efficiently within minutes,
                                        sometimes even a few seconds :)
                                    </p>
                                    <b>1 Martian Way Industries Pvt. Ltd</b>
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
                                    <p />
                                    The Martians love their Email:
                                    sales[at]1martianway[dot]com
                                    <br />
                                    Drop us a line if you spotted a Martian: +91
                                    8850.227233
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
