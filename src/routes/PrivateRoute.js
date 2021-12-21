import { css } from "@emotion/react";
import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";
import useAuth from "../hooks/useAuth";

const override = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border-color: red;
`;

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <PropagateLoader color="#20312d" css={override} size={15} />
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.displayName ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/register",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
