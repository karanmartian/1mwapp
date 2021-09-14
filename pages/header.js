import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button,
} from "reactstrap";

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    componentDidMount() {
        this.setState({ currentUrl: window.location.pathname });
    }

    render() {
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
                                layout="fixed"
                                width="68"
                                height="30"
                            />
                            &nbsp;1 Martian Way
                        </div>
                    </NavbarBrand>
                </Link>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link href="/" passHref>
                                <NavLink active={this.state.currentUrl === "/"}>
                                    Home
                                </NavLink>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link href="/products" passHref>
                                <NavLink
                                    active={
                                        this.state.currentUrl === "/products"
                                    }
                                >
                                    Products
                                </NavLink>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link href="/brands" passHref>
                                <NavLink
                                    active={this.state.currentUrl === "/brands"}
                                >
                                    Brands
                                </NavLink>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link href="/licensing" passHref>
                                <NavLink
                                    active={
                                        this.state.currentUrl === "/licensing"
                                    }
                                >
                                    Licensing
                                </NavLink>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link href="/press" passHref>
                                <NavLink
                                    active={this.state.currentUrl === "/press"}
                                >
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
    }
}
