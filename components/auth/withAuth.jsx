'use-client'
import Profile from "../../pages/admin/profile";
import PageNotFound from "./PageNotFound";
import { useAuth } from "../../context/ContextAuth";


const withAuth = Component => {
  const Auth = (props) => {
    // Login data added to props via redux-store (or use react context for example)
    // const { isLoggedIn } = props;
 const {getAuth} =useAuth()
      // isLoggedIn  = true;

    // If user is not logged in, return login component
    if (!getAuth) {
      return (
        <PageNotFound />
      );
    }

    // If user is logged in, return original component
    return (
      <Component {...props} />
    );
  };

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withAuth;