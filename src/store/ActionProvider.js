import { useReducer } from "react";

import ActionContext from "./Action-context";

const defaultActionState = {
  items: [],
  itemChecked: false,
  text:'',
  officer: '',
  estimatedDate:'',
  actualDate:'',
};

const actionReducer = (state, action) => {
  if (action.type === "ADD") {
    // const updatedTotalAmount =
    //   state.totalAmount + action.item.price * action.item.amount;
    console.log('actionReducer Activated!')
    const existingActionItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingActionItem = state.items[existingActionItemIndex];
    let updatedItems;

    if (existingActionItem) {
      const updatedItem = {
        ...existingActionItem,
        // amount: existingActionItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingActionItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      // totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingActionItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingActionItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingActionItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultActionState;
};

const ActionProvider = (props) => {
  const [actionState, dispatchActionAction] = useReducer(
    actionReducer,defaultActionState
  );

  const addItemToActionHandler = (item) => {
    dispatchActionAction({ type: "ADD", item: item });
  };

  const removeItemFromActionHandler = (id) => {
    dispatchActionAction({ type: "REMOVE", id: id });
  };

  const actionContext = {
    items: actionState.items,
    addItem: addItemToActionHandler,
    removeItem: removeItemFromActionHandler,
  };

  return (
    <ActionContext.Provider value={actionContext}>
      {props.children}
    </ActionContext.Provider>
  );
};

export default ActionProvider;
