import React from "react";
import {
  LandingPage,
  SigninPage,
  SignupPage,
  ResetPassword,
  ResetPasswordConfirm,
  SuccessPage,
  OTPAuth,
  Dashboard,
  Settings,
  DashboardHome,
  Chats,
  Playground,
} from "./pages";
import PrivateRoutes from "./components/utils/PrivateRoutes";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth/signin/" element={<SigninPage />} />
        <Route path="/auth/signup/" element={<SignupPage />} />
        <Route path="/auth/reset-password/" element={<ResetPassword />} />
        <Route path="/auth/otp/" element={<OTPAuth />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard/*" element={<Dashboard />}>
            <Route path="" element={<DashboardHome />} />
            <Route path="settings" element={<Settings />} />
            <Route path="chats" element={<Chats />} />
            <Route path="playground" element={<Playground />} />
          </Route>
        </Route>
        <Route path="/auth/success/" element={<SuccessPage />} />
        <Route
          path="/auth/reset-password-confirm/"
          element={<ResetPasswordConfirm />}
        />
      </Routes>
    </React.Fragment>
  );
};

export default App;
