import React, { useEffect, useState } from "react";
import "./AlertMsg.scss";

const AlertMsg = (props) => {
  const { children, variant, setMsgLabel } = props;
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setMsgLabel("");
    }, 4000);
    return () => clearTimeout(timer);
  }, [visible]);
  return (
    <div>
      {visible ? (
        <div className={`alert-msg ${variant}`}>
          <span className="alertMessage">{children}</span>
          <button
            className="close-btn"
            onClick={() => {
              setVisible(false);
              setMsgLabel("");
            }}
          >
            &#10005;
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default AlertMsg;
