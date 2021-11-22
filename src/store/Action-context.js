import React from "react";

const ActionContext = React.createContext({
  items: [],
  itemChecked: false,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default ActionContext;
