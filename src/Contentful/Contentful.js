import { createClient } from "contentful";

const config = {
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_DELIVERY_TOKEN
};

class Contentful {
  constructor() {
    this.client = createClient(config);
  }

  getPages = () =>
    this.client
      .getEntries()
      .then(({ items }) => items.map(({ fields }) => fields));
}

export default Contentful;
