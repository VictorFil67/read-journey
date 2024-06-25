import { useDispatch, useSelector } from "react-redux";
import { selectBookInfo } from "../../store/books/selectors";
import {
  getBookInfo,
  saveFinishPage,
  saveStartPage,
} from "../../store/books/operations";
import { useEffect, useState } from "react";
import { PageContainer } from "../MyLibraryPage/MyLibraryPage.Styled";
import { Dashboard } from "../../components/Dashboard/Dashboard";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { createPortal } from "react-dom";
import { BookIsReadModal } from "../../components/BookIsReadModal/BookIsReadModal";
import { MyReading } from "../../components/MyReading/MyReading";

const ReadingPage = () => {
  const { _id, progress, totalPages } = useSelector(selectBookInfo);
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [activeSection, setActiveSection] = useState("Diary");
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]);

  const inputs = [
    {
      title: "Page number:",
      placeholder: "0",
      name: "page",
      type: "number",
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    dispatch(getBookInfo(_id));
  }, [_id, dispatch]);

  function onSubmit({ page }) {
    progress?.length === 0 ||
    progress[progress?.length - 1].status === "inactive"
      ? dispatch(saveStartPage({ id: _id, page }))
          .unwrap()
          .then(() => {
            toast.success("You are reading the book now");
          })
          .catch((err) => {
            toast.error(err);
          })
      : dispatch(saveFinishPage({ id: _id, page }))
          .unwrap()
          .then(() => {
            toast.success("You stopped reading the book");
            if (page == totalPages) {
              setModal(true);
            }
          })
          .catch((err) => {
            toast.error(err);
          });
  }

  return (
    <PageContainer>
      <Dashboard
        title={
          progress?.length === 0 ||
          (progress?.length > 0 &&
            progress[progress?.length - 1].status === "inactive")
            ? "Start page:"
            : "Stop page:"
        }
        inputs={inputs}
        titleButton={
          progress?.length === 0 ||
          (progress?.length > 0 &&
            progress[progress?.length - 1].status === "inactive")
            ? "To start"
            : "To stop"
        }
        secondPart={progress?.length === 0 ? "Progress" : "Workout info"}
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        validation={true}
        errors={errors}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        setStart={setStart}
      />
      <MyReading
        indicator={
          progress?.length === 0 ||
          (progress?.length > 0 &&
            progress[progress?.length - 1].status === "inactive")
            ? false
            : true
        }
        activeSection={activeSection}
        start={start}
      />
      {modal &&
        createPortal(<BookIsReadModal setModal={setModal} />, document.body)}
    </PageContainer>
  );
};

export default ReadingPage;
