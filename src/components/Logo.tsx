import logo from "../assets/rewordit.png";

const Logo = () => {
  return (
    <div className="flex items-center">
      <img src={logo} alt="RewordIt Logo" className="w-20 h-20" />
      <span
        className="font-bold text-3xl gradient-text"
        style={{ fontFamily: "Roboto, monospace" }}
      >
        RewordIt
      </span>
    </div>
  );
};

export default Logo;

