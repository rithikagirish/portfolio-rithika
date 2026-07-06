import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-indigo-400 font-heading font-bold text-sm text-white">
          R
        </div>
        <span className="text-xl font-bold text-foreground font-heading">Rithika</span>
      </div>
    </Link>
  );
};

export default Logo;
