import CloseSVG from "../../images/CloseSVG";
import read from "../../images/reading/read.png";
import read2x from "../../images/reading/read@2x.png";
import {
  CloseButton,
  ContentWrap,
  Modal,
  Overlay,
  Picture,
  Span,
  Text,
  TextWrap,
  Title,
} from "../AddBookModal/AddBookModal.Styled";

export const BookIsReadModal = ({ setModal }) => {
  function handleClick(e) {
    if (e.target === e.currentTarget) {
      setModal(false);
    }
  }
  document.addEventListener("keydown", onWindowEscape);
  function onWindowEscape(e) {
    if (e.code === "Escape") {
      setModal(false);
      document.removeEventListener("keydown", onWindowEscape);
    }
  }

  return (
    <Overlay onClick={handleClick}>
      <Modal>
        <CloseButton onClick={() => setModal(false)}>
          <CloseSVG />
        </CloseButton>
        <ContentWrap>
          <picture>
            <source srcSet={read + " 1x, " + read2x + " 2x"} />
            <Picture src={read} alt="The book is read" loading="lazy" />
          </picture>
          <TextWrap>
            <Title>The book is read</Title>
            <Text>
              It was an <Span>exciting journey</Span>, where each page revealed
              new horizons, and the characters became inseparable friends.
            </Text>
          </TextWrap>
        </ContentWrap>
      </Modal>
    </Overlay>
  );
};
