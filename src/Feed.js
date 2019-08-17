import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { colors } from "./global-style";

const Feed = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const Box = styled.div`
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

const videos = [
  { id: "nqtobIpZt68", votes: 5642, artist: "$UICIDEBOY$", title: "Paris" },
  { id: "iZr2x-BZ-tk", votes: 3284, artist: "Aborted", title: "TerrorVision" },
  { id: "oodecnyzohU", votes: 28, artist: "Beyoncé", title: "Sweet Dreams" },
  {
    id: "y55ewc09e4g",
    votes: 9321,
    artist: "Thunderdome",
    title: "Zombie Attack"
  },
  { id: "24xpoanZakA", votes: 1832, artist: "Sjaak", title: "Tractor" }
];

export default () => {
  const videoComponents = videos.map(({ id, artist, title, votes }) => (
    <Box key={id}>
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
    </Box>
  ));
  return <Feed>{videoComponents}</Feed>;
};
