import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "./header";
import Footer from "./footer";

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>
                    1 Martian Way - AI for Drones, Robots, Automation Systems |
                    India
                </title>
                <meta
                    name="Description"
                    content="1 Martian Way is an Artificial Intelligence company
                    which manufactures software & embedded AI products that power drones, robots, web/mobile
                    platforms and advanced automation systems"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>
                <div className="jumbotron">
                    <div className="h1">
                        India's AI Company for Drones, Robots, Automation
                    </div>
                    <p className="lead">
                        1 Martian Way (1MW) is an Artificial Intelligence
                        company based in Mumbai, India which manufactures
                        software & embedded AI products that power drones,
                        robots, web/mobile platforms and advanced automation
                        systems. We are most popularly known as the creators of
                        the internationally acclaimed{" "}
                        <a
                            href="https://droneracingindia.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <b>Indian Drone Racing League (IDRL)</b>
                        </a>
                        .
                    </p>
                    <hr className="my-2" />
                    <p>
                        Our products include the 1MW Geospatial Intel Suite, 1MW
                        Backduck and 1MW xFleetY. Our brand family includes the{" "}
                        <a
                            href="https://droneracingindia.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Indian Drone Racing League (IDRL)
                        </a>
                        &nbsp;and Roboland. We also license our technology to
                        third party vendors and companies. For queries related
                        to licensing and IP transfer kindly refer to our{" "}
                        <Link href="/licensing">licensing</Link> section.
                    </p>
                    <p className="lead">
                        <Link href="/products">
                            <button
                                type="button"
                                className="btn btn-primary btn-lg"
                            >
                                Products
                            </button>
                        </Link>
                        &nbsp;
                        <Link href="/brands">
                            <button
                                type="button"
                                className="btn btn-secondary btn-lg"
                            >
                                Brands
                            </button>
                        </Link>
                        &nbsp;
                    </p>
                </div>
                <div className="card-deck">
                    <div className="card border-dark mb-3">
                        <div className="card-header">
                            1MW Geospatial Intel Suite
                        </div>
                        <div className="card-body text-dark">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="text-center">
                                            <Link href="/geospatial">
                                                <Image
                                                    src="/assets/img/airdiff-cover.png"
                                                    alt="1MW AirDiff"
                                                    layout="responsive"
                                                    width="220"
                                                    height="220"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <p />
                                        Our suite of advanced geospatial
                                        intelligence software comprises of 1MW
                                        AirDiff – Change Detection Software for
                                        large infrastructure assets and 1MW
                                        xFleetY – Drone fleet monitoring and
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
                        <div className="card-header">
                            AI Web/Mobile Platforms
                        </div>
                        <div className="card-body text-dark">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="text-center">
                                            <Link href="/artificialintelligence">
                                                <Image
                                                    src="/assets/img/backduck-cover.png"
                                                    alt="1MW BackDuck"
                                                    layout="responsive"
                                                    width="220"
                                                    height="220"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <p />
                                        Our AI driven Web/Mobile Platform
                                        includes solutions that power large
                                        drone racing communities such as{" "}
                                        <a
                                            href="https://droneracingindia.com"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            IDRL
                                        </a>
                                        . We have also delivered software for
                                        the healthcare sector.
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
}
