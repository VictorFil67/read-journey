import { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { RegisterForm } from "../RegisterForm/RegisterForm";
import { LoginForm } from "../LoginForm/LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../store/auth/selectors";
import { logout } from "../../store/auth/authSlice";
import { getAuth, signOut } from "firebase/auth";
import { toast } from "react-toastify";
import s from "./Layout.module.css";
import AvatarIconSvg from "../../images/SvgAvatarIcon";
import SvgBurgerMenu from "../../images/SvgBurgerMenu";
import SvgClose from "../../images/modalIcons/SvgClose";

export const Layout = () => {
  const [modalRegistration, setModalRegistration] = useState(false);
  const [modalLogIn, setModalLogIn] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const location = useLocation();

  function open(setModal) {
    setModal(true);
  }
  function close() {
    setModalRegistration(false);
    setModalLogIn(false);
    setMobileMenu(false);
  }
  function toggle(setModal) {
    setMobileMenu(false);
    setModal(true);
  }
  function handleClick(e) {
    if (e.target === e.currentTarget) {
      setMobileMenu(false);
    }
  }
  function getExit() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(logout());
        toast.success(`Sign-out successful. Goodbye!`);
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  }
  function handleExit() {
    getExit();
    setMobileMenu(false);
  }
  useEffect(() => {
    if (modalRegistration || modalLogIn || mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modalRegistration, modalLogIn, mobileMenu]);

  return (
    <>
      {location.pathname === "/" && <div className={s.background}></div>}
      <header className={s.header}>
        <div className={s.container}>
          <div
            className={
              location.pathname === "/"
                ? s.headerWrap
                : s.headerWrap + " " + s.largeGap
            }
          >
            <Link to={"/"} className={s.logo} aria-label="Link to home page">
              <span className={s.logoSpan}>psychologists.</span>services
            </Link>
            {mobileMenu && (
              <div className={s.mobileOverlay} onClick={handleClick}></div>
            )}
            <div
              className={mobileMenu ? s.navWrap + " " + s.active : s.navWrap}
            >
              {mobileMenu && (
                <button className={s.closeButton} onClick={close}>
                  <SvgClose />
                </button>
              )}
              <nav className={s.nav}>
                <NavLink
                  to={"/"}
                  className={s.pageLink}
                  onClick={() => {
                    setMobileMenu(false);
                  }}
                  aria-label="Link to home page"
                >
                  Home
                </NavLink>
                <NavLink
                  to={"/psychologists"}
                  className={s.pageLink}
                  onClick={() => {
                    setMobileMenu(false);
                  }}
                  aria-label="Link to psychologists page"
                >
                  Psychologists
                </NavLink>
                {user && (
                  <NavLink
                    to={"/favorites"}
                    className={s.pageLink}
                    onClick={() => {
                      setMobileMenu(false);
                    }}
                    aria-label="Link to favorites page"
                  >
                    Favorites
                  </NavLink>
                )}
              </nav>
              <div className={s.buttonsWrap}>
                {!user ? (
                  <>
                    <button
                      className={s.loginButton}
                      onClick={() => {
                        toggle(setModalLogIn);
                      }}
                      aria-label="login"
                    >
                      Log In
                    </button>
                    <button
                      className={s.registrationButton}
                      onClick={() => {
                        toggle(setModalRegistration);
                      }}
                      aria-label="registration"
                    >
                      Registration
                    </button>
                  </>
                ) : (
                  <>
                    <div className={s.avatar}>
                      <AvatarIconSvg />
                      <p className={s.username}>{user?.name ?? "user"}</p>
                    </div>
                    <button
                      className={s.logoutButton}
                      onClick={handleExit}
                      aria-label="log out"
                    >
                      Log Out
                    </button>
                  </>
                )}
              </div>
            </div>
            <button
              className={s.menuButton}
              onClick={() => {
                open(setMobileMenu);
              }}
              aria-label="menu button"
            >
              <SvgBurgerMenu />
            </button>
            {modalLogIn && <LoginForm close={close} />}
            {modalRegistration && <RegisterForm close={close} />}
          </div>
        </div>
      </header>
      <main>
        <div className={s.container}>
          <Outlet />
        </div>
      </main>
    </>
  );
};
