// App.tsx
import { useEffect } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import ArtecPage from "./containers/artec";
import { HomePage } from "./containers/home/loadable";
import OpenPackPage from "./containers/openpack";
import RealEstatePage from "./containers/real-estate";
import RenewableEnergyPage from "./containers/renewable-energy";
import AuthModal from "./shared/components/AuthModal";
import PageLayout from "./shared/components/PageLayOut";
import ScrollToTop from "./shared/components/ScrollToTop";
import { appRoutes } from "./shared/constants/routes";

function App() {
  useEffect(() => {
    // add the class u-bg to the html element
    document.documentElement.classList.add("u-bg");
  }, []);

  return (
    <HashRouter>
      <AuthModal />
      <ScrollToTop />

      <Routes>
        {/* Home Route */}
        <Route
          path={appRoutes.dashboard.path}
          element={
            <PageLayout>
              <HomePage />
            </PageLayout>
          }
          index
        />

        {/* Dynamic NFT Routes */}
        <Route
          path="/artec"
          element={
            <PageLayout>
              <ArtecPage />
            </PageLayout>
          }
        />

        <Route
          path="/renewable-energy"
          element={
            <PageLayout>
              <RenewableEnergyPage />
            </PageLayout>
          }
        />

        <Route
          path="/openpack"
          element={
            <PageLayout>
              <OpenPackPage />
            </PageLayout>
          }
        />

        <Route
          path="/real-estate"
          element={
            <PageLayout>
              <RealEstatePage />
            </PageLayout>
          }
        />

        {/* Keep existing routes */}
        <Route
          path={appRoutes.attachments.path}
          element={
            <PageLayout>
              <HomePage />
            </PageLayout>
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
