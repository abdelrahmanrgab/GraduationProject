import React from "react";
import "../../heroSection/modals/modalPage.css";

const ModalPage = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div
          className="background-color"
          style={{
            width: "300px",
            height: "390px",
            top: "50px",
            left: "75px",
            angle: "90deg",
            background: "linear-gradient(108.46deg, rgba(300, 300, 300, 0.4) 0%, rgba(300, 300, 300, 0.2) 100%)",
            position: "absolute",
          }}
        >
          <div className="zag-web-builder">
            <p>Zag Web Builder</p>
          </div>
        </div>
        <div className="image-background"></div>
        <div className="modal-content">
          <div>
            <button type="button" className="btn-close" onClick={onClose}>
              <b>X</b>
            </button>
          </div>
          <div className="modal-text">
            <p>
              Create your website quickly with the
              <br /> artificial intelligence.
            </p>
            <p className="modal-text2">Write an overview of your project idea in 3 lines</p>
            <div className="input-section">
              <textarea placeholder="website overview" style={{ width: "400px", height: "200px", padding: "10px", fontSize: "16px", fontStyle: "DM sans" }} />
              <div>
                <button className="btn-modal1" onClick={onClose}>
                  Build your website now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalPage;
