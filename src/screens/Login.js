import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  faInstagram,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Wrapper = styled.div`
  max-width: 350px;
  width: 100%;
`;

const WhiteBox = styled.div`
  background-color: white;
  border: 1px solid rgb(219, 219, 219);
  boder: 1px solid ${(props) => props.theme.borderColor};
  width: 100%;
`;

const TopBox = styled(WhiteBox)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 35px 40px 25px 40px;
  margin-bottom: 10px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 35px;
    width: 100%;
    justify-items: center;
    align-items: center;
  }
`;

const BottomBox = styled(WhiteBox)`
  padding: 20px 0px;
  text-align: center;

  a {
    font-weight: 600;
    margin-left: 5px;
  }
`;

const Input = styled.input`
  width: 100%;
  border-radius: 3px;
  padding: 7px;
  background-color: #fafafa;
  border: 0.5px solid rgb(219, 219, 219);
  margin-top: 5px;
  box-sizing: border-box;
  &::placeholder {
    font-size: 12px;
  }
`;

const Button = styled.input`
  width: 100%;
  border: none;
  border-radius: 3px;
  margin-top: 12px;
  background-color: #0095f6;
  color: white;
  text-align: center;
  padding: 8px 0px;
  font-weight: 600;
`;

const Separator = styled.div`
  width: 100%;
  margin: 20px 0px 30px 0px;
  text-transform: uppercase;

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 100%;
    height: 1px;
    background-color: lightgrey;
  }

  span {
    margin: 0px 10px;
    font-weight: 600;
    font-size: 12px;
    color: #8e8e8e;
  }
`;

const FacebookLoginContainer = styled.div`
  color: #385285;
  span {
    margin-left: 10px;
    font-weight: 600;
  }
`;

function Login() {
  // userState(): 컴포넌트에서 바뀌는 변수 도는 값을 관리할 수 있게 해준다.
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (event) => {
    const { name, value } = event.currentTarget;
    console.log(name, value);

    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <Container>
      <Helmet>
        <title>Instagram</title>
      </Helmet>
      <Wrapper>
        <TopBox>
          <div>
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </div>

          <form onSubmit={onSubmit}>
            <Input
              type="text"
              name="username"
              placeholder="유저네임"
              onChange={onChange}
              required
            />
            <Input
              type="password"
              name="password"
              placeholder="비밀번호"
              onChange={onChange}
              required
            />
            <Button type="submit" value="로그인 하기" />
          </form>

          <Separator>
            <div></div>
            <span>OR</span>
            <div></div>
          </Separator>

          <FacebookLoginContainer>
            <FontAwesomeIcon icon={faFacebookSquare} />
            <span>Facebook으로 로그인</span>
          </FacebookLoginContainer>
        </TopBox>

        <BottomBox>
          <span>계정이 없으신가요?</span>
          <Link to="/signup">가입하기</Link>
          {/* 버튼을 클릭하면 사이트로 가게끔. Link를 import 안 해주면 오류 난다.*/}
        </BottomBox>
      </Wrapper>
    </Container>
  );
}

export default Login;
