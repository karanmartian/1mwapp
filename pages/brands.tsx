import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import ResponsiveEmbed from "react-responsive-embed";
import Footer from "./footer";

const Header = dynamic(() => import("./header"), {
    ssr: false,
});

const Brands = () => {
    return (
        <div className="container">
            <Head>
                <title>Brands | 1 Martian Way</title>
                <meta
                    name="Description"
                    content="1 Martian Way Brands include IDRL - Indian Drone Racing League and Roboland."
                />
                <meta
                    property="og:title"
                    content="Brands | 1 Martian Way"
                    key="title"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>
                <div className="jumbotron">
                    <div className="h1">Brands - 1 Martian Way</div>
                </div>
                <div className="card-deck">
                    <div className="card border-dark mb-3">
                        <div className="card-header">
                            IDRL - Indian Drone Racing League
                        </div>
                        <div className="card-body text-dark">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="text-center">
                                            <ResponsiveEmbed
                                                src="https://www.youtube.com/embed/JNijPHRBqdM?start=63"
                                                allowFullScreen
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <p />
                                        <a
                                            href="https://droneracingindia.com"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            The Indian Drone Racing League
                                            (IDRL)
                                        </a>{" "}
                                        is India's First and Largest Drone
                                        Racing Sports League. Since our
                                        inception in August 2016 at IIT
                                        Gandhinagar, we have completed 9
                                        editions of IDRL Season 1 races across
                                        the nation at various prominent
                                        institutes and locations which are
                                        outstanding examples of world class
                                        drone racing events hosted by IDRL.
                                        <p />
                                        IDRL also has the reputation of
                                        conducting India's first night drone
                                        racing at IIT Madras. The IDRL Community
                                        has 1700+ registered pilots on the
                                        platform.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <a
                                href="https://droneracingindia.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <button
                                    className="btn btn-outline-success float-right"
                                    type="button"
                                >
                                    Learn More
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="card border-dark mb-3">
                        <div className="card-header">RoboLand</div>
                        <div className="card-body text-dark">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="text-center">
                                            <ResponsiveEmbed
                                                src="https://www.youtube.com/embed/r0XPzhJlQiI"
                                                allowFullScreen
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <p />
                                        RoboLand is the World's First Human
                                        Robot Gaming Zone. We take Man-Machine
                                        interaction to a whole new level by
                                        building and deploying entertainment
                                        concepts using unique and innovative
                                        robotics. You can have a RoboLand setup
                                        for any event whether it be corporate
                                        showcase or birthday parties, we have
                                        something for you always.
                                        <p />
                                        We also conduct RoboLand Workshops which
                                        present a unique opportunity for
                                        everyone to engage in learning about the
                                        technology that make robots work. Build
                                        your own robots too and play with them!
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

export default Brands;
