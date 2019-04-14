import React from "react";

import { H1 } from "components/atoms/Typography";
import Page from "components/templates/Page";
import Main from "components/templates/Main";

import SearchForMovie from "components/organisms/SearchForMovie";
import RateNewMovie from "components/organisms/RateNewMovie";

const Add = () => (
  <Page>
    <Main>
      <H1>Add</H1>
      <SearchForMovie />
      <RateNewMovie />
    </Main>
  </Page>
);

export default Add;
