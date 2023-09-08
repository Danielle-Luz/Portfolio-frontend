import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages";

export const RoutesContainer = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={() => <></>} />
      <Route path="/about" element={() => <></>} />
      <Route path="/contact" element={() => <></>} />
      <Route path="*" element={() => <Navigate to="/" />} />
    </Routes>
  );
};
