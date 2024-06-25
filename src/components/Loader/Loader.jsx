import { Hourglass } from "react-loader-spinner";
import { LoaderWrap } from "./Loader.styled";

export const Loader = () => {
  return (
    <LoaderWrap>
      <Hourglass
        visible={true}
        height={
          window.innerWidth > 319 && window.innerWidth < 768 ? "250" : "400"
        }
        width={
          window.innerWidth > 319 && window.innerWidth < 768 ? "250" : "400"
        }
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={["#686868", "#f9f9f9"]}
      />
    </LoaderWrap>
  );
};
