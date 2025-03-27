import React from "react";

export default function AuthGuard({ Component, isAuth }) {
  return (
    <>
      {!isAuth && <p>You don't have rights to view this page</p>}
      {!!isAuth && Component}
    </>
  );
}
