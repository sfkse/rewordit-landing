import { Button } from "@/components/ui/button";
import Logo from "./Logo";

const NavBar = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="py-6">
      <div className="container-custom flex justify-between items-center">
        <Logo />
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("features")}
            className="text-sm font-medium text-[#8E9196] hover:text-[#2162C6] transition-colors"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("how-it-works")}
            className="text-sm font-medium text-[#8E9196] hover:text-[#2162C6] transition-colors"
          >
            How It Works
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className="text-sm font-medium text-[#8E9196] hover:text-[#2162C6] transition-colors"
          >
            Pricing
          </button>
        </div>
        <div>
          <Button
            variant="default"
            className="bg-[#2162C6] hover:bg-[#2678F3] text-white rounded-md px-4"
            onClick={() => scrollToSection("pricing")}
          >
            Add to Slack
          </Button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
