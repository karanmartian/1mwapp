import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "./footer";

const Header = dynamic(() => import("./header"), {
    ssr: false,
});

const Products = () => {
    return (
        <div className="container">
            <Head>
                <title>Products | 1 Martian Way</title>
                <meta
                    name="Description"
                    content="1 Martian Way produces innovative cutting-edge products in the areas of drones, robotics and automation."
                />
                <meta
                    property="og:title"
                    content="Products | 1 Martian Way"
                    key="title"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>
                <div className="jumbotron">
                    <div className="h1">Products - 1 Martian Way</div>
                </div>
                <div className="card-deck">
                    <div className="card border-dark mb-3">
                        <div className="card-header">1MW AirDiff</div>
                        <div className="card-body text-dark">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="text-center">
                                            <Link href="/geospatial">
                                                <Image
                                                    src="/assets/img/airdiff-cover.png"
                                                    alt="1MW AirDiff"
                                                    width="220"
                                                    height="220"
                                                    priority
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <p />
                                        Our suite of advanced geospatial
                                        intelligence software comprises of 1MW
                                        AirDiff - Change Detection Software for
                                        large infrastructure assets and 1MW
                                        xFleetY - Drone fleet monitoring and
                                        tracking
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <Link href="/geospatial">
                                <button
                                    className="btn btn-outline-success float-right"
                                    type="button"
                                >
                                    Learn More
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="card border-dark mb-3">
                        <div className="card-header">1MW xFleetY</div>
                        <div className="card-body text-dark">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="text-center">
                                            <Link href="/geospatial">
                                                <Image
                                                    src="/assets/img/xfleety-cover.png"
                                                    alt="1MW xFleetY"
                                                    width="220"
                                                    height="220"
                                                    priority
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <p />
                                        1MW xFleetY is the first software for
                                        the Indian UAV industry for monitoring
                                        and tracking a fleet of drones. We are
                                        building a standards platform for
                                        civilian UAVs to be tracked in the low
                                        altitude Indian airspace.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <Link href="/geospatial">
                                <button
                                    className="btn btn-outline-success float-right"
                                    type="button"
                                >
                                    Learn More
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="card-deck">
                    <div className="card border-dark mb-3">
                        <div className="card-header">1MW Backduck</div>
                        <div className="card-body text-dark">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="text-center">
                                            <Link href="/artificialintelligence">
                                                <Image
                                                    src="/assets/img/backduck-cover.png"
                                                    alt="1MW Backduck"
                                                    width="220"
                                                    height="220"
                                                    priority
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <p />
                                        1MW Backduck is the software that’s
                                        powering large drone racing communities
                                        such as{" "}
                                        <a
                                            href="https://droneracingindia.com"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            IDRL
                                        </a>
                                        . Incorporating cutting-edge
                                        client/server side frameworks and AI,its
                                        helping build local and international
                                        communities.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <Link href="/artificialintelligence">
                                <button
                                    className="btn btn-outline-success float-right"
                                    type="button"
                                >
                                    Learn More
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="card border-dark mb-3">
                        <div className="card-header">1MW Backduck Mobile</div>
                        <div className="card-body text-dark">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="text-center">
                                            <Link href="/artificialintelligence">
                                                <Image
                                                    src="/assets/img/backduckmobile-cover.png"
                                                    alt="1MW Backduck Mobile"
                                                    width="220"
                                                    height="220"
                                                    priority
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <p />
                                        1MW Backduck Mobile is our AI platform
                                        for mobile devices based on 1MW
                                        Backduck. Built on industry leading
                                        tools and one code base philosophy, it
                                        delivers simplicity and customization
                                        for a range of industries that require
                                        on-the-go insight into their data.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <Link href="/artificialintelligence">
                                <button
                                    className="btn btn-outline-success float-right"
                                    type="button"
                                >
                                    Learn More
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Products;
