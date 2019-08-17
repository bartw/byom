import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { colors } from "./global-style";

const FeedItem = styled.div`
  margin: 10px;
  padding: 10px;
  background-color: ${colors.contrast};
  color: ${colors.default};
`;

const Title = styled.h1``;

const Video = styled.iframe`
  margin-top: 10px;
`;

const VoteButtons = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
`;

const Votes = styled.div`
  flex-grow: 1;
  text-align: center;
`;

const VoteButton = styled.button`
  color: ${colors.default};
  border: 1px solid ${colors.default};
  border-radius: 3px;
  font-size: 1.5em;
  background-color: ${colors.contrast};
`;

export default ({ id, artist, title, votes }) => (
  <FeedItem key={id}>
    <Title>
      {artist} - {title}
    </Title>
    <Video title="video" src={`https://www.youtube.com/embed/${id}`} />
    <VoteButtons>
      <VoteButton>
        <FontAwesomeIcon icon={faThumbsUp} fixedWidth />
      </VoteButton>
      <Votes>{votes}</Votes>
      <VoteButton>
        <FontAwesomeIcon icon={faThumbsDown} fixedWidth />
      </VoteButton>
    </VoteButtons>
  </FeedItem>
);
