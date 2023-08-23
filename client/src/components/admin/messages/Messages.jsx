import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUserAlt } from "react-icons/fa";
const Messages = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.login);
  const [senderDetails, setSenderDetails] = useState({});

  return (
    <div className="message_deatils">
      <p>{`Messages ->`}</p>

      <div className="content">
        <div className="left">
          <div>
            {user.messages && user.messages.length > 0 ? (
              user.messages.map((item, index) => (
                <div
                  key={index}
                  className="listItem"
                  onClick={() => setSenderDetails(item)}
                >
                  <div className="icon">
                    <FaUserAlt />
                  </div>
                  <div className="info">
                    <div>
                      <p>{item.name}</p>
                      <span>
                        {new Date(senderDetails.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <span>{item.message}</span>
                  </div>
                </div>
              ))
            ) : (
              <p> No Message Found</p>
            )}
          </div>
        </div>

        <div className="right">
          {senderDetails.message ? (
            <div>{senderDetails.message}</div>
          ) : (
            <>
              <div>Message System</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messages;
