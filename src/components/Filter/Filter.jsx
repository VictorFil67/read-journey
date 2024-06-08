import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useForm } from "react-hook-form";

import { recommendedBooksThunk } from "../../store/books/operations";
import styled from "styled-components";

const Test = styled.div``;

const Filter = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });
  const handleBook = ({ title, autor }) => {
    dispatch(recommendedBooksThunk({ title, autor }));
  };

  return (
    <>
      <>
        <>
          <form onSubmit={handleSubmit(handleBook)}>
            <input
              {...register("title")}
              type="text"
              id="title"
              placeholder="Enter text"
            />
            <span>Book title:</span>

            <input
              {...register("author")}
              type="text"
              id="autor"
              placeholder="Enter text"
            />
            <span>The author:</span>

            <button>To apply</button>
          </form>
        </>
      </>
    </>
  );
};

export default Filter;
