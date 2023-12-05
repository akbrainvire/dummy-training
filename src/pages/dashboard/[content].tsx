import ContentCompoent from "@/components/ContentCompoent";
import Sidebar from "@/components/Sidebar";
import { ContentSidebarContainer } from "@/styles";
import React from "react";

type Props = {};

const Content = (props: Props) => {
  return (
    <ContentSidebarContainer>
      <Sidebar />
      <ContentCompoent />
    </ContentSidebarContainer>
  );
};

export default Content;
