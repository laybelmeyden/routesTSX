import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { publicRoutes, RouteNames } from "../routes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        {publicRoutes.map((e) => (
          <Route path={e.path} element={<e.element />} key={e.path} />
        ))}
        <Route path="*" element={<Navigate to={RouteNames.PAGE1} />} />
      </Routes>
    </>
  );
};
