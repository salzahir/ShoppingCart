import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>404</h1>
      <p>Oh no, this route doesn't exist!</p>
      <p>Page not found</p>
      <Link to="/">Go back to the home page</Link>
    </div>
  );
};

export default ErrorPage;