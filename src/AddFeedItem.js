import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "./global-style";

const Form = styled.form`
  margin-top: 10px;
  padding: 10px;
  background-color: ${colors.contrast};
  color: ${colors.default};
  width: 70%;
`;

const FormElement = styled.div`
  margin-top: 10px;
`;

const Label = styled.label`
  display: block;
`;

const Input = styled.input`
  display: block;
  margin-top: 5px;
  border: 2px solid ${colors.default};
  border-radius: 3px;
  width: 75%;
  font-size: 1em;
`;

const AddButton = styled.button`
  border: 2px solid ${colors.default};
  border-radius: 3px;
  color: ${colors.default};
  font-size: 1.5em;
  background-color: ${colors.contrast};
`;

export default ({ addFeedItem }) => {
  const [artist, setArtist] = useState("");
  const [title, setTitle] = useState("");
  const [youtubeId, setYoutubeId] = useState("");

  return (
    <Form>
      <FormElement>
        <Label htmlFor="artist">Artist</Label>
        <Input
          type="text"
          name="artist"
          value={artist}
          onChange={e => setArtist(e.target.value)}
        />
      </FormElement>
      <FormElement>
        <Label htmlFor="title">Title</Label>
        <Input
          type="text"
          name="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </FormElement>
      <FormElement>
        <Label htmlFor="youtube-id">Youtube Id</Label>
        <Input
          type="text"
          name="youtube-id"
          value={youtubeId}
          onChange={e => setYoutubeId(e.target.value)}
        />
      </FormElement>
      <FormElement>
        <AddButton
          type="button"
          onClick={() => addFeedItem({ artist, title, youtubeId })}
        >
          Add
        </AddButton>
      </FormElement>
    </Form>
  );
};
