import { Navigate, Route, Routes } from "react-router-dom";

export const RoutesContainer = () => {
  return (
    <Routes>
      <Route path="/" element={() => <></>} />
      <Route path="/projects" element={() => <></>} />
      <Route path="/about" element={() => <></>} />
      <Route path="/contact" element={() => <></>} />
      <Route path="*" element={() => <Navigate to="/" />} />
    </Routes>
  );
};
