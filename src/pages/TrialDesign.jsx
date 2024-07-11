import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import Loader from "../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { fetchInitialTemplate, resetState } from "../features/templateData/templateSlice";
import NotFound from "./NotFoundPage";
function removeEmptyArrays(obj) {
  for (let prop in obj) {
    if (Array.isArray(obj[prop])) {
      if (obj[prop].length === 0) {
        delete obj[prop];
      }
    } else if (typeof obj[prop] === "object" && obj[prop] !== null) {
      removeEmptyArrays(obj[prop]);
      if (Object.keys(obj[prop]).length === 0) {
        delete obj[prop];
      }
    }
  }
}

const TrialDesign = ({ componentMapping, FooterComponent, NavbarComponent, HeroComponent, template, className }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const url = useLocation();
  const templateNumber = parseInt(url.pathname.match(/\d+/));
  const searchParams = new URLSearchParams(url.search);
  const userId = useSelector((state) => state.auth.user && state.auth.user._id) || searchParams.get("userId");
  const templateId = searchParams.get("templateId") || null;
  const [templateData, setTemplateData] = useState(null);
  const id = searchParams.get("id") || templateId || null;
  let state = useSelector((state) => {
    if (url.pathname.includes("own-page")) {
      return state.ownTemplate;
    } else {
      return state.template1;
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      dispatch(resetState());

      console.log("fetchData in trialDesign");
      try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/website/${userId}/${templateId}`);
        console.log(res.data);
        removeEmptyArrays(res.data);
        console.log(res.data);
        setTemplateData(res.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching template data:", error);
      }
    };

    if (templateId) {
      if (!url.pathname.includes("edit")) {
        document.getElementById("main-nav").style.display = "none";
        document.getElementById("template-container").style.marginTop = "0px";
      }

      if (url.pathname.includes("zweb") && !url.pathname.includes("edit-zweb")) {
        fetchData();
      }
    }
  }, []);

  const persist = JSON.parse(localStorage.getItem("persist:root"));
  const template1 = persist && JSON.parse(persist.template1);
  useEffect(() => {
    if (template1.templateInfo.id !== template && url.pathname.includes("build")) {
      dispatch(resetState());
      dispatch(fetchInitialTemplate(template));
    } else if (url.pathname.includes("preview")) {
      dispatch(fetchInitialTemplate(template));
    }
  }, [dispatch]);

  useEffect(() => {
    if (template1?.templateInfo.id !== template && url.pathname.includes("build")) {
      dispatch(resetState());
      dispatch(fetchInitialTemplate(template));
    } else if (url.pathname.includes("preview")) {
      dispatch(fetchInitialTemplate(template));
    }
  }, [dispatch]);
  //this will return to intial state if you do refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (url.pathname.includes("zweb") && !url.pathname.includes("edit-zweb")) {
    state = templateData;
  }
  const reorderedComponents = state && Object.keys(state);
  useEffect(() => {
    document.documentElement.style = "";
    for (let index = 0; index < state?.colors?.templateColors.length; index++) {
      document.documentElement.style.setProperty(`--website-${templateNumber}-color-${index + 1}`, state?.colors?.templateColors[index]);
    }
  }, [state, templateNumber]);

  const checkCondition = state?._id === id || id === null;
  return state && state.templateInfo.id === template && checkCondition ? (
    <div className={className}>
      {NavbarComponent && <NavbarComponent template={state} />}
      {HeroComponent && <HeroComponent template={state} />}
      {reorderedComponents.map((_component) => {
        const Component = componentMapping[_component];
        return Component && <Component key={_component} template={state} />;
      })}
      {FooterComponent && <FooterComponent template={state} />}
    </div>
  ) : isLoading ? (
    <div className="fixed top-0 left-0 w-full h-full d-flex items-center justify-center">
      <Loader />
    </div>
  ) : state?._id !== id ? (
    <div className="fixed top-0 left-0 w-full h-full d-flex items-center justify-center">
      <NotFound />
    </div>
  ) : (
    <div className="fixed top-0 left-0 w-full h-full d-flex items-center justify-center">
      <Loader />
    </div>
  );
};

export default TrialDesign;
