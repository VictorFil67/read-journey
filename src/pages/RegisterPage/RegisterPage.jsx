import { AuthImage } from "../../components/AuthImage/AuthImage";
// import { Container } from "../../components/Layout/Layout.Styled";
import { Register } from "../../components/Register/Register";
import { AuthContainer } from "./RegisterPage.Styled";

const RegisterPage = () => {
  return (
    <AuthContainer>
      <Register />
      <AuthImage />
    </AuthContainer>
  );
};

export default RegisterPage;
