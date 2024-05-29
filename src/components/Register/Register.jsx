import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import EyeOpenSvg from "../../images/EyeOpenSvg";
import EyeCloseSvg from "../../images/EyeCloseSvg";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useState } from "react";
import { signUpThunk } from "../../store/auth/operations";
import { selectIsLoading } from "../../store/auth/selectors";
import { Link, useNavigate } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";
import SvgFavicon from "../../images/favicon/SvgFavicon";
import { Container } from "../Layout/Layout.Styled";

const schema = yup.object({
  name: yup.string().required("The name is required"),
  email: yup
    .string()
    .email("Please write a valid email")
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "Please write a valid email")
    .required("The email is required"),
  password: yup
    .string()
    .min(7, "The password must contain a minimum of 7 characters")
    .required("The password is required"),
});

export const Register = () => {
  const isLoading = useSelector(selectIsLoading);
  const [eye, setEye] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  function onSubmit({ email, password, name }) {
    dispatch(signUpThunk({ email, password, name }))
      .unwrap()
      .then(() => {
        toast.success("Sign up done!");
        navigate("/recommended");
      })
      .catch(() => toast.error("Ooops... Something went wrong!"));
  }

  return (
    <>
      {isLoading && <Loader />}
      <Container>
        <div>
          <SvgFavicon />
          <p>read journey</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h1>Registration</h1>
            <p>
              Thank you for your interest in our platform! In order to register,
              we need some information. Please provide us with the following
              information.
            </p>
          </div>
          <div>
            <label>
              <input placeholder="Name" type="text" {...register("name")} />
              <span>{errors.name?.message}</span>
            </label>
            <label>
              <input placeholder="Email" type="text" {...register("email")} />
              <span>{errors.email?.message}</span>
            </label>
            <label>
              <input
                placeholder="Password"
                type={eye ? "text" : "password"}
                {...register("password")}
              />
              <span>{errors.password?.message}</span>
              <button
                type="button"
                onClick={() => setEye(!eye)}
                aria-label="show or hide password"
              >
                {eye ? <EyeOpenSvg /> : <EyeCloseSvg />}
              </button>
            </label>
          </div>

          <button name="submit" type="submit" aria-label="Sign Up">
            Registration
          </button>
          <Link to={"/login"}>Already have an account?</Link>
        </form>
      </Container>
    </>
  );
};
