import React from "react";
import { Provider } from "react-redux";
type RootProps = {
  store: object
};
const Root: React.SFC<RootProps> = ({ children, store }) => (
  <Provider store={store}>{children}</Provider>
);
export default Root;
