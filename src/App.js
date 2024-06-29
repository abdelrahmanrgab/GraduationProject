import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import MainNav from "./components/mainPage/mainNavbar/MainNav";
import Dashboard from "./pages/Dashboard";
import MainPage from "./pages/MainPage";
import DesignsPage from "./pages/DesignsPage";
import BuildYourPage from "./pages/BuildYourPage";
import NotFound from "./pages/NotFoundPage";
import OwnPage from "./pages/OwnPage.jsx";
import UserInformation from "./pages/UserInformation.jsx";
import ProtectedRoute from "./pages/ProtectedRoute";
import SuccessVerified from "./pages/SuccessVerified.jsx";
import FailedVerified from "./pages/FailedVerified.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";

import YourWebsites from "./pages/YourWebsites.jsx";
const trialDesignComponents = Array.from({ length: 18 }, (_, i) => require(`./pages/TrialDesign${i + 1}`).default);
const websites = Array.from({ length: 18 }, (_, i) => require(`./pages/TrialDesign${i + 1}`).default);

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <MainNav toggleModal={toggleModal} />
      <div style={{ marginTop: "77px" }} id="template-container">
        <Routes>
          <Route path="/success-verified" element={<SuccessVerified />} />
          <Route path="/failed-verified" element={<FailedVerified />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />

          <Route path="/" element={<MainPage toggleModal={toggleModal} isModalOpen={isModalOpen} />} />
          <Route
            path="/designs"
            element={
              <ProtectedRoute>
                <DesignsPage />
              </ProtectedRoute>
            }
          />
          <Route path="/websites" element={<YourWebsites />} />
          <Route
            path="/page-craft"
            element={
              <ProtectedRoute>
                <BuildYourPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/own-page"
            element={
              <ProtectedRoute>
                <OwnPage />
              </ProtectedRoute>
            }
          />

          {trialDesignComponents.map((Component, index) => (
            <Route
              key={`preview-trial-design${index}`}
              path={`/preview-trial-design${index + 1}`}
              element={
                <ProtectedRoute>
                  <Component />
                </ProtectedRoute>
              }
            />
          ))}

          {/* websites */}
          {websites.map((Component, index) => (
            <Route
              key={`zwep${index}`}
              path={`/zweb${index + 1}`}
              element={
                <ProtectedRoute>
                  <Component />
                </ProtectedRoute>
              }
            />
          ))}
          <Route element={<Dashboard />}>
            {websites.map((Component, index) => (
              <Route
                key={`edit-zweb${index}`}
                path={`/edit-zweb${index + 1}`}
                element={
                  <ProtectedRoute>
                    <Component />
                  </ProtectedRoute>
                }
              />
            ))}
          </Route>



          <Route element={<Dashboard />}>
            {trialDesignComponents.map((Component, index) => (
              // <Route key={`build-trial-design${index}`} path={`/build-trial-design${index + 1}/:pageId`} element={<Component />} />
              <Route
                key={`build-trial-design${index}`}
                path={`/build-trial-design${index + 1}`}
                element={
                  <ProtectedRoute>
                    <Component />
                  </ProtectedRoute>
                }
              />
            ))}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
