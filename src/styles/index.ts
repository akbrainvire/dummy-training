import Link from "next/link";
import styled from "styled-components";

export const DashboardContainer = styled.div`
  width: 100%;
`;

export const ContentSidebarContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const SidebarContainer = styled.div`
  width: 20%;
`;

export const ContentContainer = styled.div`
  width: 80%;
`;

export const HeaderContainer = styled.div`
  /* width: 100%; */
  display: flex;
  justify-content: center;
  padding: 1rem;
  border-bottom: 1px solid black;
`;

export const SpanContainer = styled.span<{
  $wrap?: boolean;
  $bold?: boolean;
  $background?: string;
  $padding?: boolean;
  $nowrap?: boolean;
  $widthWrap?: boolean;
  $applyItemNameStyle?: boolean;
}>`
  /* min-width: 0;
    white-space: nowrap;
    text-overflow: ellipsis; */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #000000;
  padding: 1rem;

  /* font-size: ${(props) => (props.$bold ? "0.875rem" : "0.75rem")};
  font-style: normal;
  font-weight: ${(props) => (props.$bold ? "600" : "400")};
  line-height: normal; */
  /* color: #3a3a3a; */
  /* white-space: ${(props) => (props.$nowrap ? "nowrap" : "")}; */

  /* height: 50px; */
  /* background-color: ${(props) =>
    props.$background ? props.$background : ""}; */
  /* margin: 0.3rem 0; */
  /* padding: ${(props) => (props.$padding ? "0.2rem" : "0.3rem 0")}; */

  /* white-space: ${(props) => (props.$wrap ? "nowrap" : "")};

  @media only screen and (max-widht: 500px) {
    font-size: 0.775rem;
  } */
`;

export const SearchFindLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0.625rem;
`;

export const LinkStyle = styled(Link)<{ $isSelected?: boolean }>`
  text-decoration: none;
  color: #9d9d9d;
  cursor: pointer;

  &:active {
    color: #9d9d9d;
  }

  &:focus {
    color: black;
  }
`;
