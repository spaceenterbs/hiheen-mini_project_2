import styled from "styled-components";

// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart as SolidHeart } from "@fortawesome/free-solid-svg-icons";

// import { far } from "@fortawesome/free-regular-svg-icons";

const ProfileContainer = styled.div`
  display: flex;
  max-width: 630px;
  margin: 0 auto;
  border: 1px solid black;
`;
const HeaderContainer = styled.div``;
const ContentContainer = styled.div`
  width: 100vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  grid-auto-rows: 290px;
`;
const HeaderImg = styled.img`
  display: flex;
  width: 150px;
`;

// const ContentImg = styled.img`
//   width: 100%;
//   height: auto;
//   object-fit: cover;
// `;

// const GridItem = styled.img`
//   width: 100%;
//   height: auto;
//   object-fit: cover;
//   opacity: 0.5;
//   &:hover {
//     opacity: 1;
//   }
// `;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  opacity: 1;
  &:hover {
    opacity: 0.5;
  }
  margin-top: 10px;
`;

// const InnerContainer = styled.div`
//   display: flex;
//   position: relative;
//   align-items: center;
//   justify-content: center;
//   width: 33%;
//   height: 33%;
//   opacity: 0;
//   &:hover {
//     opacity: 1;
//   }
// `;

// const Icon = styled.span`
//   font-size: 20px;
//   display: flex;
//   align-items: center;
//   margin: 0 5px;
//   svg {
//     font-size: 14px;
//     margin-right: 5px;
//   }
// `;
function Profile() {
  return (
    <>
      <ProfileContainer>
        <HeaderContainer>
          <HeaderImg src="https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg"></HeaderImg>
        </HeaderContainer>
        <HeaderContainer>
          <h2>sick</h2>
          <h3>anotherhell</h3>
        </HeaderContainer>
      </ProfileContainer>
      <ContentContainer>
        <Grid bg="https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg"></Grid>
        <Grid bg="https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg"></Grid>
        <Grid bg="https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg"></Grid>
      </ContentContainer>
    </>
  );
}

export default Profile;
