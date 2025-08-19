import { createContext, useReducer, useContext } from "react";

const NotificationContext = createContext();

const notificationReducer = (state, action) => {
  switch (action.type) {
    case "SET_NOTIFICATION":
      return action.payload;
    case "CLEAR_NOTIFICATION":
      return "";
    default:
      return state;
  }
};

export const NotificationProvider = ({ children }) => {
  const [notification, dispatch] = useReducer(notificationReducer, "");
  return (
    <NotificationContext.Provider value={[notification, dispatch]}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotificationValue = () => {
  const [notification] = useContext(NotificationContext);
  return notification;
};

export const useNotificationDispatch = () => {
  const [, dispatch] = useContext(NotificationContext);
  return dispatch;
};

export const useSetNotification = () => {
  const dispatch = useNotificationDispatch();
  return (message, seconds = 5) => {
    dispatch({ type: "SET_NOTIFICATION", payload: message });
    setTimeout(() => {
      dispatch({ type: "CLEAR_NOTIFICATION" });
    }, seconds * 1000);
  };
};

