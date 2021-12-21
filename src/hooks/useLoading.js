import { css } from "@emotion/react";
import PropagateLoader from "react-spinners/PropagateLoader";

const override = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border-color: red;
  margin-top: 20%;
`;

const useLoading = () => {
  return <PropagateLoader color="#20312d" css={override} size={15} />;
};

export default useLoading;
