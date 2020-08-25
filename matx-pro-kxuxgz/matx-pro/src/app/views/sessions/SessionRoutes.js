import SignUp from "./SignUp";
import SignIn from "./SignIn";
import NotFound from "./NotFound";
import ForgotPassword from "./ForgotPassword";

const sessionRoutes = [
  {
    path: "/session/signup",
    component: SignUp,
  },
  {
    path: "/session/signin",
    component: SignIn,
  },
  {
    path: "/session/forgot-password",
    component: ForgotPassword,
  },
  {
    path: "/session/404",
    component: NotFound,
  },
];

export default sessionRoutes;
