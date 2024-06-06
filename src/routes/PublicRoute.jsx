import { useSelector } from "react-redux";
import { selectUser } from "../store/auth/selectors";
import { Navigate } from "react-router-dom";
// import { useEffect, useRef } from "react";
import { selectPath } from "../store/books/selectors";

const PublicRoute = ({ children }) => {
  const user = useSelector(selectUser);
  const path = useSelector(selectPath);
  // console.log(path);
  // const usePrevios = (value) => {
  //   const ref = useRef();
  //   useEffect(() => {
  //     ref.current = value;
  //   });
  //   return ref.current;
  // };
  // const prevLocation = usePrevios(path);
  // console.log(prevLocation + "=>" + path);

  if (!user) {
    return children;
  }
  return <Navigate to={path ?? "/recommended"} />;
};

export default PublicRoute;
