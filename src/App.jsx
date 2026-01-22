import { lazy, Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import "./App.css";
import { AuthProvider } from "./contexts/AuthContext";

const Login = lazy(() => import("./components/pages/Login/Login.jsx"));
const DashBoards = lazy(
  () => import("./components/pages/DashBoard/DashBoards.jsx"),
);
const NavBar = lazy(() => import("./components/pages/NavBar/NavBar.jsx"));
const Home = lazy(() => import("./components/pages/Home/Home.jsx"));
const PageNotFound = lazy(
  () => import("./components/molecules/PageNotFound/PageNotFound.jsx"),
);

function App() {
  return (
    <ErrorBoundary FallbackComponent={() => <div>Something went wrong!</div>}>
      <AuthProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <HashRouter>
            <div className="app-header">
              <NavBar />
            </div>
            <main className="app-main">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<DashBoards />} />
                <Route Component={PageNotFound} />
              </Routes>
            </main>
          </HashRouter>
        </Suspense>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
