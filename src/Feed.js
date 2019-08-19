import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withFirebase } from "./Firebase";
import FeedItem from "./FeedItem";
import AddFeedItem from "./AddFeedItem";

const Feed = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const FeedComponent = ({ firebase }) => {
  const [feed, setFeed] = useState([]);
  useEffect(() => firebase.feed(setFeed), [firebase]);

  const addFeedItem = ({ artist, title, youtubeId }) => {
    if (artist && title && youtubeId) {
      firebase.addFeedItem({ artist, title, youtubeId, votes: 0 });
    }
  };
  const feedItems = feed.map(({ youtubeId, artist, title, votes }) => (
    <FeedItem key={youtubeId} id={youtubeId} artist={artist} title={title} votes={votes || 0} />
  ));
  return (
    <Feed>
      {[
        <AddFeedItem key="add-feed-item" addFeedItem={addFeedItem} />,
        ...feedItems
      ]}
    </Feed>
  );
};

export default withFirebase(FeedComponent);
