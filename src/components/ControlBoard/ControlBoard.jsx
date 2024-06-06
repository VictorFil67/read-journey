import { ContentWrap } from "./ControlBoard.Styled";

export const ControlBoard = ({ title, inputs, titleButton, secondPart }) => {
  function chooseSecondPart(string) {
    switch (string) {
      case "statistics":
        return <></>;
      case "2":
        return <></>;
      case "3":
        return <></>;
      case "4":
        return <></>;
      case "5":
        return <></>;

      default:
        break;
    }
  }
  return (
    <>
      <ContentWrap>
        {/* <Form> */}
        {/* <FiltersFormWraper> */}
        {/* <FiltersTitle>{title}</FiltersTitle> */}
        <ul>
          {inputs.map((el, idx) => (
            <li key={idx}>
              <label>
                {el.label}
                <input placeholder={el.placeholder}></input>
              </label>
            </li>
          ))}
        </ul>
        {/* </FiltersFormWraper> */}
        <button>{titleButton}</button>
        {/* </Form> */}
        <div>{chooseSecondPart(secondPart)}</div>
      </ContentWrap>
    </>
  );
};
