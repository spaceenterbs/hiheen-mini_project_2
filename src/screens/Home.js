import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { far } from "@fortawesome/free-regular-svg-icons";
import { faHeart as SolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  border: 1px solid black;
  max-width: 350px;
  margin-bottom: 10px;
  border-radius: 3px;
  margin: 0 auto;
`;

const FeedHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
`;

const UserProfileName = styled.span``;

const FeedImg = styled.img`
  height: 100vh;
  width: 100%;
  max-width: 350px;
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

// const Icon = styled.div`
//   margin: 0px 3px;
// `;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #0095f6;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 4px;
`;

const FeedActions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 350px;
  padding: 10px;
`;

const LikeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CommentInput = styled.input`
  width: 100%;
  max-width: 350px;
  padding: 10px;
`;

function Home() {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleComment = (event) => {
    if (event.key === "Enter") {
      setComments([...comments, event.target.value]);
      event.target.value = "";
    }
  };

  const FeedAction = styled.div``;

  return (
    <FeedContainer>
      <FeedHeader>
        <UserProfileName>민식</UserProfileName>
      </FeedHeader>
      <FeedImg
        src="data:image/jpeg;base64,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"
        alt="Feed"
      />{" "}
      <Wrapper>
        <Column>
          <FontAwesomeIcon
            style={{ color: "tomato" }}
            icon={false ? SolidHeart : far.faHeart}
          ></FontAwesomeIcon>
          <FontAwesomeIcon icon={faPaperPlane} />
        </Column>
        <Column>
          <FontAwesomeIcon icon={faPaperPlane} />
          <FontAwesomeIcon icon={faPaperPlane} />
          <Button>send</Button>
        </Column>
      </Wrapper>
      <FeedActions>
        <FeedAction></FeedAction>
        <LikeButton onClick={handleLike}>👍 Like {likes}</LikeButton>
      </FeedActions>
      <CommentContainer>
        {comments.map((comment, index) => (
          <p key={index}>{comment}</p>
        ))}
        <CommentInput
          type="text"
          placeholder="Add a comment..."
          onKeyDown={handleComment}
        />
      </CommentContainer>
    </FeedContainer>
  );
}

export default Home;
