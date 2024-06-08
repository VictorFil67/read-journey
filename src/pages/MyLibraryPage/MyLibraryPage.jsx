// import { Dashboard1 } from "../../components/ControlBoard/DashBoard1/DashBoard1";
// import styled from "styled-components";
import { Dashboard } from "../../components/Dashboard/Dashboard";
import { MyLibraryBooks } from "../../components/MyLibraryBooks/MyLibraryBooks";
import { PageContainer } from "./MyLibraryPage.Styled";

const MyLibraryPage = () => {
  const inputs = [
    { title: "Book title:", placeholder: "Enter text" },
    { title: "The author:", placeholder: "Enter text" },
    { title: "Number of pages:", placeholder: "0" },
  ];
  // const Test = styled.div``;
  return (
    <PageContainer>
      {/* <Test>апвыапвапавпвапва</Test> */}
      <Dashboard
        title={"Filters:"}
        inputs={inputs}
        titleButton={"Add book"}
        secondPart={"Recommended books"}
      />
      <MyLibraryBooks />
    </PageContainer>
  );
};

export default MyLibraryPage;
