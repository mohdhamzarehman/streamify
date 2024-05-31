/**
 * v0 by Vercel.
 * @see https://v0.dev/t/K5ABpUa3vLT
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between bg-gray-900 text-white px-4 py-3 md:px-6">
      <Link to="#" className="flex items-center gap-2 font-bold text-lg">
        <FilmIcon className="h-6 w-6" />
        <span>MovieHub</span>
      </Link>
      <div className="flex items-center gap-4">
        <form className="relative w-full max-w-md">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            type="search"
            placeholder="Search movies..."
            className="w-full rounded-full bg-gray-800 px-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
        </form>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="px-4 py-2 text-sm text-black">
            <Link to={"/signup"}>Sign up</Link>
          </Button>
          <Button className="px-4 py-2 text-sm">
            <Link to={"/signin"}>Sign in</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

function FilmIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M7 3v18" />
      <path d="M3 7.5h4" />
      <path d="M3 12h18" />
      <path d="M3 16.5h4" />
      <path d="M17 3v18" />
      <path d="M17 7.5h4" />
      <path d="M17 16.5h4" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
export default Navbar;
