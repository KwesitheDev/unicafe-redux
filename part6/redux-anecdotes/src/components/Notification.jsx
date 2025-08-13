import { useSelector } from "react-redux";
import { clearNotification } from "../reducers/notificationReducer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Notification = () => {
  const notification = useSelector(state => state.notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  const dispatch = useDispatch()

  if (!notification) return null

  return (
    <div style={style}>
      {notification}
    </div>
  )
}


export default Notification