import { currentThunk, refreshTokensThunk } from "./store/auth/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectExpireTime, selectUser } from "./store/auth/selectors";
import { Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import styled from "styled-components";
import { setPath } from "./store/books/booksSlise";
import { toast } from "react-toastify";
import Layout from "./components/Layout/Layout";
import { Loader } from "./components/Loader/Loader";
import PrivateRoute from "./routes/PrivateRoute";
import LibraryP from "./components/LibraryP/LibraryP";
import PublicRoute from "./routes/PublicRoute";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import MyLibraryPage from "./pages/MyLibraryPage/MyLibraryPage";

const Test = styled.div``;

const AppTest = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const expireTime = useSelector(selectExpireTime);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/register" || pathname === "/login") {
      return;
    }
    dispatch(setPath(pathname));
  });

  useEffect(() => {
    if (!user) {
      if (expireTime >= Date.now()) {
        dispatch(currentThunk()).catch((error) => {
          console.error("Error fetching user data:", error);
        });
      } else {
        dispatch(refreshTokensThunk())
          .unwrap()
          .then(() => {
            dispatch(currentThunk()).catch((error) => toast.error(error));
          })
          .catch((error) => toast.error(error));
      }
    }
  }, [dispatch, user, expireTime]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route
            path="/recommended"
            element={
              <PrivateRoute>
                <LibraryP />
              </PrivateRoute>
            }
          />
          <Route
            path="/library"
            element={
              <PrivateRoute>
                <MyLibraryPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/reading"
            element={
              <PrivateRoute>
                <LibraryP />
                {/* <Reading /> */}
              </PrivateRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="*"
            element={
              // <ErrorPage />
              <LibraryP />
            }
          />
        </Routes>
      </Suspense>
      <Test>AppTest</Test>
    </>
  );
};

export default AppTest;
