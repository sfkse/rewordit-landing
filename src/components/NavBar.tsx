import { Button } from "@/components/ui/button";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <header className="py-6">
      <div className="container-custom flex justify-between items-center">
        <Logo />
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="/#features"
            className="text-sm font-medium text-[#8E9196] hover:text-[#2162C6] transition-colors"
          >
            Features
          </a>
          <a
            href="/#how-it-works"
            className="text-sm font-medium text-[#8E9196] hover:text-[#2162C6] transition-colors"
          >
            How It Works
          </a>
          <a
            href="/#pricing"
            className="text-sm font-medium text-[#8E9196] hover:text-[#2162C6] transition-colors"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-sm font-medium text-[#8E9196] hover:text-[#2162C6] transition-colors"
          >
            Log in
          </a>
        </div>
        <div>
          <a href="https://slack.com/oauth/v2/authorize?client_id=8697258707847.8714309865490&scope=assistant:write,chat:write,chat:write.customize,chat:write.public,commands,groups:history,users:read&user_scope=users:read,users:read.email&_gl=1*xtzhve*_gcl_au*MjEwMTkzMzY2NS4xNzQ0OTc4NjIzLjE0NjE4MTc5MzAuMTc0NTIzNzMwNC4xNzQ1MjM3MzA2*_ga*MTM1OTcxMTA1MS4xNzQ0OTc4NjIz*_ga_QTJQME5M5D*MTc0NTI1ODc5OS41LjEuMTc0NTI1ODgxNS40NC4wLjA.">
            <Button
              variant="default"
              className="bg-[#2162C6] hover:bg-[#2678F3] text-white rounded-md px-4"
            >
              Add to Slack
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
