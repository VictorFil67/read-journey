import { useDispatch, useSelector } from "react-redux";
import {
  HeaderButtonBurger,
  HeaderContainer,
  HeaderDivLink,
  HeaderIconUser,
  HeaderLink,
  HeaderTabletLogOut,
  HeaderUserContainer,
  LogoStyled,
  LogoTitleSvgStyled,
  Name,
} from "./Header.Styled";
import { selectUser } from "../../store/auth/selectors";
import BurgerOpen from "../../images/BurgerOpen";
import { useState } from "react";
import MobaleBurger from "../Modal/MobaleBurger/MobaleBurger";
import Backdrop from "../Backdrop/Backdrop";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logoutThunk } from "../../store/auth/operations";
import { LogoLink } from "../Login/Login.Styled";

const Header = () => {
  const user = useSelector(selectUser);
  const [isMobaleBurger, setIsMobaleBurger] = useState(false);
  const userName = user && user.name;
  const firstLetter = user && user.name ? user.name.charAt(0) : "";
  const [isBackdropActiveOpen, setIsBackdropActiveOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutThunk())
      .then(() => {
        toast.success("You  logged out successfully.");
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const handleBurgerOpen = () => {
    setIsMobaleBurger(!isMobaleBurger);
    setIsBackdropActiveOpen(true);
  };

  const closeModal = () => {
    setIsMobaleBurger(false);
    setIsBackdropActiveOpen(false);
  };

  return (
    <>
      <>
        {isBackdropActiveOpen && <Backdrop closeModal={closeModal} />}
        {setIsMobaleBurger && (
          <>
            <MobaleBurger
              handleLogout={handleLogout}
              closeModal={closeModal}
              isOpen={isMobaleBurger}
            />
          </>
        )}
      </>
      <HeaderContainer>
        <LogoLink to={"/recommended"}>
          <LogoStyled />
          <LogoTitleSvgStyled />
        </LogoLink>
        <HeaderDivLink>
          <HeaderLink
            to={"/recommended"}
            aria-label="Home"
            style={{ textDecoration: "none" }}
          >
            Home
          </HeaderLink>
          <HeaderLink
            to={"/library"}
            aria-label="My library"
            style={{ textDecoration: "none" }}
          >
            My library
          </HeaderLink>
        </HeaderDivLink>
        <HeaderUserContainer>
          <HeaderIconUser>
            <span>{firstLetter}</span>
          </HeaderIconUser>
          <Name>{userName}</Name>
          <HeaderTabletLogOut onClick={handleLogout}>
            Log out
          </HeaderTabletLogOut>
          <HeaderButtonBurger onClick={handleBurgerOpen}>
            <BurgerOpen />
          </HeaderButtonBurger>
        </HeaderUserContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;
