import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "./header";
import Footer from "./footer";

export default function GIS() {
    return (
        <div className="container">
            <Head>
                <title>GIS | 1 Martian Way</title>
                <meta
                    name="Description"
                    content="1 Martian Way produces Geospatial Intelligence Software such as 1MW AirDiff and 1MW xFleetY"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>
                <div className="jumbotron">
                    <div className="h1">
                        1MW Geospatial Intel Suite - 1 Martian Way
                    </div>
                </div>
                <div className="card border-dark mb-3">
                    <div className="card-header">1MW AirDiff</div>
                    <div className="card-body text-dark">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-sm-6">
                                    <Image
                                        src="/assets/img/airdiff.jpg"
                                        alt="1MW AirDiff"
                                        layout="responsive"
                                        width="832"
                                        height="609"
                                    />
                                </div>
                                <div className="col-xs-12 col-sm-6">
                                    <p />
                                    1MW AirDiff is a Change Detection Software
                                    for Visualization of differences between
                                    large aerial datasets acquired at different
                                    periods of time. It is applicable for use in
                                    monitoring large infrastructure assets such
                                    as oil and gas pipelines, roads, highways
                                    etc.
                                    <p />
                                    The software is agnostic to how the data is
                                    captured. This means that if we have two
                                    datasets of the same area but they are
                                    relatively different to each other in terms
                                    of their overall size, lighting conditions,
                                    rotation, translation, scaling or other such
                                    transformations including those when one
                                    image is a subset of the other, then the
                                    software is able to equalize these images
                                    and perform the change detection.
                                    <p />
                                    The AirDiff engine can run on a variety of
                                    platforms both on the client and server
                                    side. To the left is shown an instance of
                                    AirDiff running as an application on the
                                    desktop.
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
                    <div className="card-header">1MW xFleetY</div>
                    <div className="card-body text-dark">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-sm-6">
                                    <Image
                                        src="/assets/img/xfleety.jpg"
                                        alt="1MW xFleetY"
                                        layout="responsive"
                                        width="832"
                                        height="455"
                                    />
                                </div>
                                <div className="col-xs-12 col-sm-6">
                                    <p />
                                    1MW xFleetY is the first software for the
                                    Indian UAV industry for monitoring and
                                    tracking a fleet of drones. We are building
                                    a standards platform for civilian UAVs to be
                                    tracked in the low altitude Indian airspace.
                                    <p />
                                    This is going to largely help the industry
                                    takeoff as we believe that not being able to
                                    track the number of different drones out
                                    there is the predominant reason for the
                                    industry being held to a standstill.
                                    Although developed for the DGCA, we believe
                                    that our technology can also be used across
                                    many other industries. So if you would like
                                    to know more, kindly get in touch with us.
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
