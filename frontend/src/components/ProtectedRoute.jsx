import { Navigate } from "react-router-dom";

/**
 * @param {ReactNode} children
 * @param {string} redirectTo specifies the URL to which the user should be redirected if they are not allowed to access the route.
 * @param {boolean} isAllowed If isAllowed is true, the children component will be rendered. If isAllowed is false, the user will be redirected to the redirectTo URL.
 * @returns {ReactNode}
 */
const ProtectedRoute = ({ children, redirectTo, isAllowed }) => {
    return isAllowed ? children : <Navigate to={redirectTo} />;
};

export default ProtectedRoute;