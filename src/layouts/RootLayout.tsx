import { Outlet, NavLink, ScrollRestoration } from "react-router-dom";
// import Breadcrumbs from "../components/Breadcrumbs";
import { Header } from "../components/Header/Header";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <ScrollRestoration />
      <Header />
      <header>
        <nav>
          <h1>fARnitures</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="desks">Desks</NavLink>
          <NavLink to="chairs">Chairs</NavLink>
          <NavLink to="sofas">Sofas</NavLink>

          <NavLink to="basket">Basket</NavLink>

          <NavLink to="login">Log In</NavLink>
          <NavLink to="signup">Sign Up</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
