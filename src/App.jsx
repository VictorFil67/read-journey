import { Suspense, useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout/Layout";
// import Home from "./pages/Home/Home";
// import Library from "./pages/Library/Library";
// import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Reading from "./pages/Reading/Reading";
import { Loader } from "./components/Loader/Loader";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { currentThunk, refreshTokensThunk } from "./store/auth/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectExpireTime, selectUser } from "./store/auth/selectors";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";

import { toast } from "react-toastify";
// import MyLibraryPage from "./pages/MyLibraryPage/MyLibraryPage";
import { setPath } from "./store/books/booksSlise";
// import styled from "styled-components";
// import LibraryP from "./components/LibraryP/LibraryP";
// import { LibraryPage } from "./pages/LibraryPage/LibraryPage";
// import Testtest from "./components/LibraryP/LibraryP";

// import styled from "styled-components";
import LibraryP from "./components/LibraryP/LibraryP";
import RecommendPage from "./pages/RecommendPage/RecommendPage";
import MyLibraryPage from "./pages/MyLibraryPage/MyLibraryPage";
// const Test = styled.div``;

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const expireTime = useSelector(selectExpireTime);
  const { pathname } = useLocation();

  // const [location, setLocation] = useState(pathname);
  console.log(pathname);
  useEffect(() => {
    if (pathname === "/register" || pathname === "/login") {
      return;
    }
    dispatch(setPath(pathname));
    // setLocation(pathname);
  });

  // console.log(user);
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
          <Route path="/" element={<Layout />}>
            {/* <Route
              element={
                <PrivateRoute>
                  <LibraryP />
                  <Home />
                </PrivateRoute>
              }
            /> */}
            <Route
              path="/recommended"
              element={
                <PrivateRoute>
                  <RecommendPage />
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
                  <Reading />
                </PrivateRoute>
              }
            />
          </Route>

          <>
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
          </>
          {/* <Route path="*" element={<ErrorPage />} /> */}
          <Route path="*" element={<Navigate to="/recommended" />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
