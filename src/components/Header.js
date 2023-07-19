/*
홈스크린, 헤더 


*/

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid black;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 20px;
  margin: 10px 10px;
  max-width: 630px;
`;

const Column = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled(FontAwesomeIcon)`
  margin: 0px 3px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #0095f6;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 4px;
`;

function Header() {
  return (
    <HeaderContainer>
      <Wrapper>
        <Column>
          <Icon icon={faInstagram} />
        </Column>
        <Column>
          <Icon icon={faInstagram} />
          <Icon icon={faInstagram} />
          <Icon icon={faInstagram} />
          <Button>login</Button>
        </Column>
      </Wrapper>
    </HeaderContainer>
  );
}

export default Header;
