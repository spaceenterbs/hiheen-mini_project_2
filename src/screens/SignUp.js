import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  height: 100vh;import { useForm } from "react-hook-form";

`;

const Wrapper = styled.div`
  max-width: 350px;
  width: 100%;
`;

const WhiteBox = styled.div`
  background-color: white;
  border: 1px solid rgb(219, 219, 219);
  border: 1px solid ${(props) => props.theme.borderColor};
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
    margin-top: 15px;
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

// 버튼 중에 input 안에 다른 태그가 있으면 오류가 나는 경우가 있다.
const Button = styled.button`
  width: 100%;
  border: none;
  border-radius: 3px;
  margin-top: 12px;
  background-color: #0095f6;
  color: white;
  text-align: center;
  padding: 8px 0px;
  font-weight: 600;
  opacity: ${(props) => (props.disabled ? "0.3" : "1")};
`;

const Separator = styled.div`
  width: 100%;
  margin: 20px 0px 0px 0px;
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

const FacebookLogin = styled.div`
  color: #385285;
  span {
    margin-left: 10px;
    font-weight: 600;
  }
`;

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmitValid = (data) => {
    console.log(data);
    // 로그인 성공시 수행할 작업을 여기에 작성하면 됩니다.
  };

  const onSubmitInvalid = (errors) => {
    console.log(errors);
    // 로그인 실패시 수행할 작업을 여기에 작성하면 됩니다.
  };
  return (
    <Container>
      <Helmet>
        <title>Instagram | 가입하기</title>
      </Helmet>
      <Wrapper>
        <TopBox>
          <div>
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </div>
          {/* <SubTitle>친구들의 사진과 동영상을 보려면 가입하세요.</SubTitle> */}

          <FacebookLogin>
            <FontAwesomeIcon icon={faFacebookSquare} />
            <Button>Facebook으로 로그인</Button>
          </FacebookLogin>
          <Separator>
            <div></div>
            <span>OR</span>
            <div></div>
          </Separator>
          <form onSubmit={handleSubmit(onSubmitValid, onSubmitInvalid)}>
            <Input
              type="text"
              placeholder="이름"
              {...register("name", { required: true, minLength: 3 })}
            />
            {errors.name && errors.name.type === "minLength" && (
              <p style={{ color: "red" }}>
                이름은 최소 3글자 이상 입력 해주셔야 합니다.
              </p>
            )}
            <Input
              type="text"
              placeholder="휴대폰 번호"
              {...register("phone", { required: true })}
            />
            {errors.name && errors.name.type === "required" && (
              <p style={{ color: "red" }}>
                휴대폰 번호는 최소 3글자 이상 입력 해주셔야 합니다.
              </p>
            )}
            <Input
              type="text"
              placeholder="유저네임"
              {...register("username", { required: true })}
            />{" "}
            {errors.name && errors.name.type === "required" && (
              <p style={{ color: "red" }}>
                유저네임은 최소 2글자 이상 입력 해주셔야 합니다.
              </p>
            )}
            <Input
              type="password"
              placeholder="비밀번호"
              {...register("password", { required: true, minLength: 4 })}
            />
            {errors.name && errors.name.type === "minLength" && (
              <p style={{ color: "red" }}>
                휴대폰 번호는 최소 3글자 이상 입력 해주셔야 합니다.
              </p>
            )}
            <Button type="submit">가입하기</Button>
          </form>
        </TopBox>
        <BottomBox>
          <span>계정이 있으신가요?</span>
          <Link to="/">로그인하기</Link>
        </BottomBox>
      </Wrapper>
    </Container>
  );
}
