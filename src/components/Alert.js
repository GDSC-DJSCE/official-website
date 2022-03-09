import React, { useState, useEffect } from "react";

export default function Alert({
  msg,
  isAlertMsgLoaded,
  setIsAlertMsgLoaded,
  type,
}) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    let myInterval;
    if (msg) {
      setShow(true);
      myInterval = setInterval(() => {
        setShow(false);
      }, 4000);
    }
    setIsAlertMsgLoaded(false);
    return () => clearInterval(myInterval);
  }, [isAlertMsgLoaded]);
  return <>{show && <div className={`alert alert-${type}`}>{msg}</div>}</>;
}
