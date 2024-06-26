import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notification = () => {
  // Example function to trigger a toast notification
  const notify = () => {
    toast("This is a notification!");
  };

  return (
    <div className="notification-container">
      <button onClick={notify}>Show Notification</button>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default Notification;
