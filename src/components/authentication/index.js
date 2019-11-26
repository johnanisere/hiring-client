import React, { lazy } from "react";

import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute";
const Login = lazy(() => import("./Login"));
const SignUp = lazy(() => import("./SignUp"));
const UpdatePassword = lazy(() => import("./UpdatePassword"));
const ChangePassword = lazy(() => import("./ChangePassword"));
const Schedule = lazy(() => import("../dashboard/ScheduleInterview"));
const Invite = lazy(() => import("../InviteHirer"));
const HirerSignUp = lazy(() => import("../HirerSignUp"));
const VerifyHirer = lazy(() => import("../HirerSignUp/VerifyHirer"));
const HirerLogin = lazy(() => import("../HirerSignUp/hirerLogin/HirerLogin"));
const ScheduleInterview = lazy(() => import("../dashboard/ScheduleInterview"));
const InterviewResponse = lazy(() =>
  import("../interviewActivities/InterviewResponse")
);
const ScheduleTest = lazy(() => import("../schedule-test/ScheduleTest"));
const LandingPage = lazy(() => import("../landingPage/"));
export default function(props) {
 
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/signup/partner" component={HirerSignUp} />
      <Route exact path="/login/partner" component={HirerLogin} />
      <Route
        exact
        path="/interview-response/:intent/:email/:interviewId"
        component={InterviewResponse}
      />
      <Route
        exact
        path="/update-password/:token/:email"
        component={UpdatePassword}
      />
      <ProtectedRoute>
        <Route
          path="/schedule-interview/:email"
          component={ScheduleInterview}
          
        />
        <Route path="/schedule-test/:email" component={ScheduleTest} />

        <Route exact path="/schedule" component={Schedule} />
        <Route exact path="/invite" component={Invite} />
        <Route
          exact
          path="/verify-hirer/:token/:email"
          component={VerifyHirer}
        />

        <Route
          exact
          path={"/change-password/:token"}
          component={ChangePassword}
        />
      </ProtectedRoute>
    </Switch>
  );
}
