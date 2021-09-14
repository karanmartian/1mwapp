import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "./header";
import Footer from "./footer";

export default function AI() {
    return (
        <div className="container">
            <Head>
                <title>Artificial Intelligence | 1 Martian Way</title>
                <meta
                    name="Description"
                    content="1 Martian Way is an Artificial Intelligence company
                    which manufactures software & embedded AI products that power drones, robots, web/mobile
                    platforms and advanced automation systems."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>
                <div className="jumbotron">
                    <div className="h1">
                        Artificial Intelligence - Web/Mobile Platforms
                    </div>
                </div>
                <div className="card border-dark mb-3">
                    <div className="card-header">1MW Backduck</div>
                    <div className="card-body text-dark">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-sm-6">
                                    <Image
                                        src="/assets/img/idrlai.jpg"
                                        alt="1MW Backduck"
                                        layout="responsive"
                                        width="832"
                                        height="528"
                                    />
                                </div>
                                <div className="col-xs-12 col-sm-6">
                                    <p />
                                    1MW Backduck is the software that’s powering
                                    large drone racing communities such as{" "}
                                    <a
                                        href="https://droneracingindia.com"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        IDRL
                                    </a>
                                    . Incorporating cutting-edge client/server
                                    side frameworks and AI,its helping build
                                    local and international communities.
                                    <p />
                                    The platform comes with core social
                                    networking features such as Newsfeed,
                                    Follow/Following, Real-time chat as well as
                                    powerful AI features such as detecting the
                                    emotions/mood of users, learning from
                                    behavior of large set of users,
                                    recommendations engine etc as we continue to
                                    build more features. It can easily be
                                    adapted to build ecommerce marketplaces,
                                    building any sort of community or
                                    incorporating data analysis and
                                    visualization tools.
                                    <p />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <Link href="/contact">
                            <button
                                className="btn btn-outline-success float-right"
                                type="button"
                            >
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="card border-dark mb-3">
                    <div className="card-header">1MW Backduck Mobile</div>
                    <div className="card-body text-dark">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-sm-6">
                                    <Image
                                        src="/assets/img/bdmobile.jpg"
                                        alt="1MW Backduck Mobile"
                                        layout="responsive"
                                        width="832"
                                        height="471"
                                    />
                                </div>
                                <div className="col-xs-12 col-sm-6">
                                    <p />
                                    1MW Backduck Mobile is our AI platform for
                                    mobile devices based on 1MW Backduck. Built
                                    on industry leading tools, it is
                                    customizable for a range of industries that
                                    require on-the-go insight into their data.
                                    <p />
                                    At 1 Martian Way, we believe in simplicity
                                    for developers and users and hence have
                                    designed the mobile platform such that you
                                    can target different devices with one code
                                    base. With Backduck Mobile you get a
                                    powerful suite of features on the front-end
                                    as well as access to APIs at the backend
                                    that perform all that AI magic.
                                    <p />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <Link href="/contact">
                            <button
                                className="btn btn-outline-success float-right"
                                type="button"
                            >
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
