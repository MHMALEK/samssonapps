import React from "react";
import Container from "../../UI/Container";

const Footer = props => {
  const { content } = props;
  return (
    <div className="layout footer">
      <Container>
          {content}
      </Container>
    </div>
  );
};

export default Footer;
