import React, { Suspense, lazy } from "react";
import "./App.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQpDYVsEKdGFDbO3CgjyZLT6DSaniO2ZM",
  authDomain: "curierap.firebaseapp.com",
  projectId: "curierap",
  storageBucket: "curierap.firebasestorage.app",
  messagingSenderId: "2628162936",
  appId: "1:2628162936:web:fd8fb3a0d6e3f07e56648d",
  measurementId: "G-Y59TEQJXXJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import { Header, LanguageProvider } from "./components/Header";
import { Footer } from "./components/Footer";
const HomePage = lazy(() => import("./pages/Home").then(m => ({ default: m.HomePage })));
const ServicesPage = lazy(() => import("./pages/Services").then(m => ({ default: m.ServicesPage })));
const AboutPage = lazy(() => import("./pages/About").then(m => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import("./pages/Contact").then(m => ({ default: m.ContactPage })));
const NotFoundPage = lazy(() => import("./pages/NotFound").then(m => ({ default: m.NotFoundPage })));

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-white">
            <ScrollToTop />
            <Header />
            <Suspense fallback={<div className="py-16 text-center text-gray-600">Loading...</div>}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
            <Footer />
            <Toaster />
          </div>
        </BrowserRouter>
      </LanguageProvider>
    </div>
  );
}

export default App;