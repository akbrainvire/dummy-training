import { HeaderContainer, SpanContainer } from "@/styles";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <HeaderContainer>
      <div style={{ width: "80%" }}>
        <SpanContainer $bold={true}>Home</SpanContainer>
        {/* <SpanContainer $bold={true}>Dashboard</SpanContainer> */}
        <SpanContainer $bold={true}>About Us</SpanContainer>
      </div>
      <div style={{ width: "20%", textAlign: "end" }}>
        <SpanContainer $bold={true}>Login</SpanContainer>
        <SpanContainer $bold={true}>SignUp</SpanContainer>
      </div>
    </HeaderContainer>
  );
};

export default Header;
