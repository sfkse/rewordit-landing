import { MessageSquare, Zap, Check, Sparkles, FileText } from "lucide-react";

const features = [
  {
    icon: <MessageSquare className="h-8 w-8 text-primary" />,
    title: "Smart Rephrasing",
    description:
      "Instantly rephrase your messages to sound more professional, friendly, or direct.",
  },
  {
    icon: <Check className="h-8 w-8 text-primary" />,
    title: "Grammar Fixing",
    description:
      "Automatically catch and fix grammar, spelling, and punctuation errors before sending.",
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Quick Tone Adjustments",
    description:
      "Choose from multiple tones to match the context of your conversation.",
  },
  {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    title: "AI-Powered",
    description:
      "Leveraging advanced AI to understand context and generate natural-sounding text.",
  },
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: "Slack Integration",
    description:
      "Seamlessly integrates with Slack, available whenever you're composing a message.",
  },
];

const Features = () => {
  return (
    <section id="features" className="section-spacing bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">
            <span className="gradient-text">Features</span> that enhance your
            messaging
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            RewordIt gives you powerful tools to improve your communication in
            Slack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

