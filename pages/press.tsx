import Head from "next/head";
import ResponsiveEmbed from "react-responsive-embed";
import Footer from "./footer";
import Header from "./header";

const Press = () => {
    return (
        <div className="container">
            <Head>
                <title>Press | 1 Martian Way</title>
                <meta
                    name="Description"
                    content="1 Martian Way has been featured in numerous local and international media."
                />
                <meta
                    property="og:title"
                    content="Press | 1 Martian Way"
                    key="title"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>
                <div className="jumbotron">
                    <div className="h1">Press - 1 Martian Way</div>
                </div>
                <div className="card-deck">
                    <div className="card border-dark mb-3">
                        <div className="card-header">
                            Panel Discussion on Drone Terror Strikes on India
                            Today TV with Karan Kamdar, CEO, 1 Martian Way
                        </div>
                        <div className="card-body text-dark">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="text-center">
                                            <ResponsiveEmbed
                                                src="https://youtube.com/embed/78wNbYpipKU"
                                                allowFullScreen
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card border-dark mb-3">
                        <div className="card-header">
                            1 Martian Way - The drone age is here!
                        </div>
                        <div className="card-body text-dark">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="text-center">
                                            <ResponsiveEmbed
                                                src="https://www.youtube.com/embed/PuVs4PxGxSo"
                                                allowFullScreen
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-deck">
                    <div className="card border-dark mb-3">
                        <div className="card-header">
                            RoboLand Interview @ Comic Con
                        </div>
                        <div className="card-body text-dark">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="text-center">
                                            <ResponsiveEmbed
                                                src="https://www.youtube.com/embed/Gi9jDC0BlqU"
                                                allowFullScreen
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card border-dark mb-3">
                        <div className="card-header">
                            CBS News USA - 1MW Chess Robots
                        </div>
                        <div className="card-body text-dark">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="text-center">
                                            <ResponsiveEmbed
                                                src="https://www.youtube.com/embed/vZvZ8Fo9TGc"
                                                allowFullScreen
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-deck">
                    <div className="card border-dark mb-3">
                        <div className="card-header">
                            OC Register USA - 1MW Chess Robots
                        </div>
                        <div className="card-body text-dark">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="text-center">
                                            <ResponsiveEmbed
                                                src="https://www.youtube.com/embed/iYxV1vJvKwk"
                                                allowFullScreen
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card border-dark mb-3">
                        <div className="card-header">
                            The Story of 1 Martian Way
                        </div>
                        <div className="card-body text-dark">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="text-center">
                                            <ResponsiveEmbed
                                                src="https://www.youtube.com/embed/mJ7IckWKwUM"
                                                allowFullScreen
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-deck">
                    <div className="card border-dark mb-3">
                        <div className="card-header">
                            DD Sports - IDRL Coverage
                        </div>
                        <div className="card-body text-dark">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="text-center">
                                            <ResponsiveEmbed
                                                src="https://youtube.com/embed/xtuhu25S6x4"
                                                allowFullScreen
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card border-dark mb-3">
                        <div className="card-header">
                            NewsMyntra - 1MW Drones & Robots
                        </div>
                        <div className="card-body text-dark">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="text-center">
                                            <ResponsiveEmbed
                                                src="https://www.youtube.com/embed/094tVppTG7M"
                                                allowFullScreen
                                            />
                                        </div>
                                    </div>
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

export default Press;
