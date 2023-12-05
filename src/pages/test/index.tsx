import { LinkStyle, SearchFindLinkContainer } from "@/styles";
import Link from "next/link";
import React from "react";

type Props = {};

const Test = (props: Props) => {
  return (
    <SearchFindLinkContainer>
      <LinkStyle href={"/test/react"}>React</LinkStyle>
      <LinkStyle href={"/test/angular"}>Angular</LinkStyle>
      <LinkStyle href={"/test/vue"}>Vue</LinkStyle>
    </SearchFindLinkContainer>
  );
};

export default Test;
