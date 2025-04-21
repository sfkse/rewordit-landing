import { Button } from "@/components/ui/button";
import { Check, HelpCircle } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const includedFeatures = [
  "Rephrase up to 50 messages per month",
  "Full rewrite history and insights",
  "Instant Slack integration",
  "Access to advanced tone settings",
  // "Use or create custom rewriting templates",
  // "API access for personal automation",
  "Priority support",
  "Secure, reliable service with 99.9% uptime",
  "99.9% uptime SLA",
];

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="section-spacing bg-gradient-to-b from-[#EBF2FD] to-white"
    >
      <div className="container-custom">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Simple, <span className="gradient-text">transparent</span> pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Start improving your team communication today. No hidden fees.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left Column - Pricing Details */}
          <div className="bg-background/60 backdrop-blur-sm border border-border/40 rounded-xl p-8">
            <div className="space-y-6">
              <RadioGroup defaultValue="monthly" className="space-y-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="monthly" id="monthly" />
                  <Label htmlFor="monthly">Pay monthly</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yearly" id="yearly" />
                  <Label htmlFor="yearly">Pay yearly (save 17%)</Label>
                </div>
              </RadioGroup>

              <div className="pt-4">
                <h3 className="text-2xl font-semibold mb-2">
                  Starts at $15/month
                </h3>
                <p className="text-muted-foreground">
                  We offer tiered pricing to fit your needs, up to unlimited
                  messages.{" "}
                  <Button variant="link" className="text-primary p-0">
                    See pricing details
                  </Button>
                </p>
              </div>

              <div className="space-y-4 pt-6">
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Up to 50 channels included</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Message history & analytics</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Easy integration with Slack</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>API access</span>
                  <HelpCircle className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>

              <Button className="w-full bg-primary hover:bg-accent text-white mt-6">
                Start your 14-day free trial
              </Button>

              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground pt-4">
                <span className="flex items-center gap-1">
                  <Check className="h-4 w-4" /> Change anytime
                </span>
                <span className="flex items-center gap-1">
                  <Check className="h-4 w-4" /> Cancel anytime
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Included Features */}
          <div className="bg-[#F8FAFF] border border-[#E6EEFC] text-[#1A1F2C] rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-6">
              Included in every account:
            </h3>
            <div className="space-y-4">
              {includedFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-[#2678F3]" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <Button
              variant="link"
              className="text-[#2678F3] hover:text-[#2162C6] mt-8 pl-0"
            >
              See all features →
            </Button>

            <p className="text-sm text-muted-foreground mt-8">
              All pricing is in USD and renews automatically unless cancelled.
              You can purchase more channels for an additional fee.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

