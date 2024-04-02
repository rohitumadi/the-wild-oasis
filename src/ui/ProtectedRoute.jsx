import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  display: flex;
  background-color: var(--color-grey-50);
  justify-content: center;
  align-items: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //load the authenticated user
  const { user, isLoading, isAuthenticated, fetchStatus } = useUser();

  //if the user is not authenticated, redirect to the login page
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading && fetchStatus !== "fetching")
        navigate("/login");
    },
    [isAuthenticated, isLoading, navigate, fetchStatus]
  );
  //while loading the user, show a loading indicator
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  //if the user is authenticated, render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
