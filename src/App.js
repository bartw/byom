import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withContentful } from "./Contentful";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const App = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const AppComponent = ({ contentful }) => {
  const [pages, setPages] = useState([]);
  const [selectedPage, setSelectedPage] = useState("home");

  useEffect(() => {
    contentful.getPages().then(setPages);
  }, [contentful]);

  const pageToShow = pages.find(({ slug }) => slug === selectedPage);

  return (
    <App>
      <Header
        pages={pages.map(({ name, slug }) => ({ name, slug }))}
        selectedPage={selectedPage}
        selectPage={slug => setSelectedPage(slug)}
      />
      <Main richText={pageToShow ? pageToShow.richText : null} />
      <Footer />
    </App>
  );
};

export default withContentful(AppComponent);
