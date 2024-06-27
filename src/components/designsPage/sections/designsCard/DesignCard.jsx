import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Loader from "../../../Loader/Loader.jsx";
import "./designCard.css";
import BaseModal from "../../../mainPage/modal/BaseModal/BaseModal.jsx";
import AiForm from "../../../mainPage/modal/aiForm/AiForm.jsx";
import aiPoster from "../../../../assets/images/mainPageAssets/hero-min.svg";
import preview from "../../../../assets/images/show.png";
import build from "../../../../assets/images/build2.png";

const DesignCard = ({ Designdata, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { i18n } = useTranslation();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {isModalOpen ? (
        <BaseModal poster={aiPoster} toggleModal={toggleModal}>
          <AiForm index={index - 1} />
        </BaseModal>
      ) : null}
      {index > 1 && (
        <div className="design-card rounded-lg overflow-hidden shadow-lg flex flex-column">
          <div className="design-Img-container mb-2">
            <Loader src={Designdata.imageUrl} alt="design--Img" />
          </div>

          <div className="design-info px4 py-2">
            <h2 className="designs-title  text-xl text-center font-semibold">{Designdata.title}</h2>
            <p className="designs-description text-gray-600 text-sm  text-center ">{Designdata.description}</p>
          </div>
          <div className="button-container px-4 flex justify-between gap-4">
            <button className="flex justify-center gap-4 items-center w-full py-2 Build-button design-btn" onClick={() => toggleModal(index)}>
              <span>Build</span>
              <img src={build} alt="build-icon" className="btn-icon" />
            </button>

            <Link
              className="Preview-button flex justify-center gap-4 items-center  w-full py-2 design-btn"
              to={`/${i18n.language}/preview-trial-design${index - 1}`}
            >
              <span>Preview</span>
              <img src={preview} alt="preview-icon" className="btn-icon" />
            </Link>
          </div>
        </div>
      )}
      {index === 1 && (
        <Link to={`/${i18n.language}/page-craft`}>
          <div className="design-card rounded-lg overflow-hidden shadow-lg flex flex-column">
            <div className="design-Img-container mb-2">
              <Loader src={Designdata.imageUrl} alt="design--Img" />
            </div>

            <div className="design-info px4 py-2">
              <h2 className="designs-title font-bold text-xl text-center font-semibold">{Designdata.title}</h2>
              <p className="designs-description text-gray-600 text-sm  text-center ">{Designdata.description}</p>
            </div>
          </div>
        </Link>
      )}
      {index === 0 && (
        <Link to={`/${i18n.language}/websites`}>
          <div className="design-card rounded-lg overflow-hidden shadow-lg flex flex-column">
            <div className="design-Img-container mb-2">
              <Loader src={Designdata.imageUrl} alt="design--Img" />
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
