// import { Dashboard1 } from "../../components/ControlBoard/DashBoard1/DashBoard1";
import { Dashboard } from "../../components/Dashboard/Dashboard";
import { MyLibraryBooks } from "../../components/MyLibraryBooks/MyLibraryBooks";

const MyLibraryPage = () => {
  const inputs = [
    { title: "Book title:", placeholder: "Enter text" },
    { title: "The author:", placeholder: "Enter text" },
    { title: "Number of pages:", placeholder: "0" },
  ];

  return (
    <>
      <Dashboard
        title={"Filters:"}
        inputs={inputs}
        titleButton={"Add book"}
        secondPart={"statistics"}
      />
      <MyLibraryBooks />
    </>
  );
};

export default MyLibraryPage;
