import React from "react";
import logo from "../../assets/Logo.png";
import CartWidget from "../CartWidget/CartWidget";
import { COLORS } from "../../constants/color";
import { Link, NavLink } from "react-router-dom";

const viewport = {
  width: document.documentElement.clientWidth,
  height: document.documentElement.clientHeight,
};

const Navbar = () => {
  const categories = [
    { name: "Fibra", id: 0, route: "/category/electronics" },
    { name: "Registros", id: 1, route: "/category/jewelery" },
    { name: "Ferreteria", id: 2, route: "/category/men's clothing" },
    { name: "Seguridad", id: 3, route: "/category/women's clothing" },
  ];

  return (
    <header style={styles.container}>
      <div style={styles.branchContainer}>
        <Link to="/">
          <img style={styles.logo} src={logo} alt="" />
        </Link>
        <h1 style={styles.title}>INCOM</h1>
      </div>

      <div style={styles.links}>
        <nav>
          {categories.map((category) => (
            <NavLink key={category.id} style={styles.link} to={category.route}>
              {category.name}
            </NavLink>
          ))}
        </nav>
        <Link to="/cart">
          <CartWidget />
        </Link>
      </div>
    </header>
  );
};

const styles = {
  container: {
    display: viewport.width > 900 ? "flex" : "none",
    backgroundColor: COLORS.blue,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  branchContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
  },
  links: {
    display: "flex",
  },
  link: {
    fontSize: 16,
    padding: 20,
  },
  logo: {
    height: 80,
  },
};

export default Navbar;
