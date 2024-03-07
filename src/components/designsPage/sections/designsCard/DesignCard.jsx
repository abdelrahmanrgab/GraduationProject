import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./designCard.css";
import BaseModal from "../../../mainPage/modal/BaseModal/BaseModal.jsx"
import AiForm from "../../../mainPage/modal/aiForm/AiForm.jsx"
import aiPoster from "../../../../assets/images/mainPageAssets/hero-min.svg"

import ImageLoader from "../../../Loader/loader.jsx";

const DesignCard = ({ Designdata, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };


  return (
    <>
      {isModalOpen ? (
        <BaseModal poster={aiPoster} toggleModal={toggleModal}>
          <AiForm index={index} />
        </BaseModal>
      ) : null}
      {index > 0 && (
        <div className="design-card rounded-lg overflow-hidden shadow-lg flex flex-column">
          <div className="design-Img-container mb-2">
            <ImageLoader src={Designdata.imageUrl} alt="design--Img" />
          </div>

          <div className="design-info px4 py-2">
            <h2 className="designs-title font-bold text-xl text-center font-semibold">{Designdata.title}</h2>
            <p className="designs-description text-gray-600 text-sm  text-center ">{Designdata.description}</p>
          </div>
          <div className="button-container px-4 flex justify-between gap-4">
            <button className="flex justify-center items-center w-full py-2 Build-button design-btn" onClick={() => toggleModal(index)}>
              Build
            </button>

            <Link className="Preview-button flex justify-center items-center  w-full py-2 design-btn" to={`/preview-trial-design${index}`}>
              Preview
            </Link>
          </div>
        </div>
      )}
      {index === 0 && (
        <Link to={`/page-craft`}>
          <div className="design-card rounded-lg overflow-hidden shadow-lg flex flex-column">
            <div className="design-Img-container mb-2">
              <ImageLoader src={Designdata.imageUrl} alt="design--Img" />
            </div>

            <div className="design-info px4 py-2">
              <h2 className="designs-title font-bold text-xl text-center font-semibold">{Designdata.title}</h2>
              <p className="designs-description text-gray-600 text-sm  text-center ">{Designdata.description}</p>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default DesignCard;
