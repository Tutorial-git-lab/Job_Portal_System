import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import AppModal1 from "./RegisterPop";
import AppModal from "./LoginPop";

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container d-flex justify-content-left align-item-center p-0 ">
          <div
            className="collapse navbar-collapse p-0 "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto  mb-lg-0 ">
              <li className="nav-item p-3">
                <NavLink className="nav-link " to="/">
                  <strong>Home</strong>
                </NavLink>
              </li>
              <li className="nav-item p-3">
                <NavLink className="nav-link " to="/about">
                  <strong> About Us</strong>
                </NavLink>
              </li>
              <li className="nav-item p-3">
                <NavLink className="nav-link " to="/services">
                  <strong>Services</strong>
                </NavLink>
              </li>

              <li className="nav-item p-3">
                <NavLink className="nav-link " to="/career">
                  <strong>Career</strong>
                </NavLink>
              </li>

              <li className="nav-item p-3">
                <NavLink className="nav-link " to="/contact">
                  <strong>Contact</strong>
                </NavLink>
              </li>
            </ul>
            <ul>
              <ul className="navbar-nav ms-auto mt-3">
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    to="/login"
                  >
                    <strong>Login</strong>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop1"
                    to="/register"
                  >
                    <strong>Register</strong>
                  </NavLink>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </nav>

      <AppModal />
      <AppModal1 />
      <Outlet />
    </>
  );
};

export default Layout;
