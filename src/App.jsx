import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Preloader from "~/components/preloader";

const HomePage = lazy(() => import("~/pages/home"));
const InvitationPage = lazy(() => import("~/pages/invitation"));

const App = () => {
  return (
    <Suspense fallback={<Preloader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/invitation/:id" element={<InvitationPage />} />

        <Route path="*" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
};
export default App;
