import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="border-b border-gray-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-xl font-semibold tracking-tight"
        >
          SPOS
        </Link>

        <div className="flex items-center gap-6 text-sm">
          <Link
            to="/"
            className="text-gray-600 transition hover:text-gray-900"
          >
            Home
          </Link>

          <Link
            to="/devlog"
            className="text-gray-600 transition hover:text-gray-900"
          >
            Dev Log
          </Link>

          <Link
            to="/contact"
            className="text-gray-600 transition hover:text-gray-900"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;