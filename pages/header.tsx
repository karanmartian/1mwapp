import Image from "next/image";
import Link from "next/link";
import React, { memo, useEffect } from "react";
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
            <NavbarBrand href="/">
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
                    <span style={{ marginLeft: 10 }}>1 Martian Way</span>
                </div>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/" active={currentUrl === "/"}>
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            href="/products"
                            active={currentUrl === "/products"}
                        >
                            Products
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            href="/brands"
                            active={currentUrl === "/brands"}
                        >
                            Brands
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            href="/licensing"
                            active={currentUrl === "/licensing"}
                        >
                            Licensing
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/press" active={currentUrl === "/press"}>
                            Press
                        </NavLink>
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

export default memo(Header);
