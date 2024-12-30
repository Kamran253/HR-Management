    import { Navigate } from 'react-router-dom';

    // ProtectedRoute component checks if user is authenticated
    const ProtectedRoute = ({ element: Component, isAuthenticated }) => {
    return isAuthenticated ? Component : <Navigate to="/" replace />;
    };

    export default ProtectedRoute;
