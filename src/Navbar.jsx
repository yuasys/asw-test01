import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="text-2xl text-center container mx-auto">
      <Link className="text-gray-600 hover:text-orange-600 mr-4" to="/">
        Home
      </Link>
      <Link className="text-gray-600 hover:text-orange-600 mr-4" to="/asw01">
        ASW01
      </Link>
      <Link className="text-gray-600 hover:text-orange-600 mr-4" to="/asw03">
        ASW03
      </Link>
      <Link className="text-gray-600 hover:text-orange-600" to="/asw05">
        ASW05
      </Link>
    </div>
  );
};
