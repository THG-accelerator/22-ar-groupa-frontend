import s from "./Header.styles";

export const Header: React.FC = () => {
  return (
    <s.headerContainer>
      <s.header_logo>fARnitures</s.header_logo>
      <s.header_navbar>Home</s.header_navbar>
      <s.header_navbar>Desks</s.header_navbar>
      <s.header_navbar>Chairs</s.header_navbar>
      <s.header_navbar>Sofas</s.header_navbar>
      <s.header_basket>Basket</s.header_basket>
      <s.header_login>Log In</s.header_login>
      <s.header_signup>Sign Up</s.header_signup>
    </s.headerContainer>
  );
};
