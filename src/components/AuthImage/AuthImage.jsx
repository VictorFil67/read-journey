import { AuthImageWrap, Picture } from "./AuthImage.Styled";
import IPhone from "../../images/IPhone.png";

export const AuthImage = () => {
  return (
    <AuthImageWrap>
      <Picture src={IPhone} alt="IPhone" />
    </AuthImageWrap>
  );
};
