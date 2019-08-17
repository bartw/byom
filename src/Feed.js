import React from "react";
import styled from "styled-components";
import FeedItem from "./FeedItem";

const Feed = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const videos = [
  { id: "uomdL-iv4-4", votes: 3284, artist: "Terror", title: "One With The Underdogs" },
  { id: "nqtobIpZt68", votes: 5642, artist: "$UICIDEBOY$", title: "Paris" },
  { id: "iZr2x-BZ-tk", votes: 666, artist: "Aborted", title: "TerrorVision" },
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
    <FeedItem key={id} id={id} artist={artist} title={title} votes={votes} />
  ));
  return <Feed>{videoComponents}</Feed>;
};
