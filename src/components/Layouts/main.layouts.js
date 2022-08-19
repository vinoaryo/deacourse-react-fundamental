import Container from "react-bootstrap/Container";
import Navigation from "./navigation.layouts";
import './main.layouts.css';

const MainLayouts = ({ children }) => {
  return (
    <>
      <Navigation />
      <Container>{children}</Container>
    </>
  );
};

export default MainLayouts;
