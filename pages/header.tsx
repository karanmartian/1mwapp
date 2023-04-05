import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import {
    Button,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    Navbar,
    NavbarBrand,
    NavbarToggler,
} from "reactstrap";

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [currentUrl, setCurrentUrl] = React.useState("");

    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        setCurrentUrl(window.location.pathname);
    }, []);

    return (
        <Navbar color="light" light expand="md">
            <Link href="/" passHref>
                <NavbarBrand>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Image
                            src="/assets/img/1mw-logo.png"
                            alt="1mw logo"
                            width="68"
                            height="30"
                        />
                        &nbsp;1 Martian Way
                    </div>
                </NavbarBrand>
            </Link>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Link href="/" passHref>
                            <NavLink active={currentUrl === "/"}>Home</NavLink>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link href="/products" passHref>
                            <NavLink active={currentUrl === "/products"}>
                                Products
                            </NavLink>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link href="/brands" passHref>
                            <NavLink active={currentUrl === "/brands"}>
                                Brands
                            </NavLink>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link href="/licensing" passHref>
                            <NavLink active={currentUrl === "/licensing"}>
                                Licensing
                            </NavLink>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link href="/press" passHref>
                            <NavLink active={currentUrl === "/press"}>
                                Press
                            </NavLink>
                        </Link>
                    </NavItem>
                    <Link href="/contact" passHref>
                        <Button outline color="success">
                            Contact
                        </Button>
                    </Link>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;
