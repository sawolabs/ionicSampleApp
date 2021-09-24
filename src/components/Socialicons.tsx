import { Link } from "react-router-dom";
import "./Footer.css";

const Socialicons = ({ src, alt } : {src: string, alt: string}) => {
  return (
    <Link to="/" className="social-link">
      <img src={src} alt={alt} className="img-fluid" />
    </Link>
  );
};

export default Socialicons;