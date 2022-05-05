import { Routes } from "react-router-dom";
import AppBar from "./AppBar";
import Container from "./Container";

export const App = () => {
  return (
    <Container>
      <AppBar />
      <Routes>
        {/* <Route path="/" element={<HomeView />} />
        <Route path="/authors/*" element={<AuthorsView />} /> */}
        </Routes>
   </Container>
  );
};
