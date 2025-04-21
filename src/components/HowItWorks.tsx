import { PlusCircle, MessageSquare, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: <PlusCircle className="h-12 w-12 text-primary" />,
    title: "Add to Slack",
    description: "Install RewordIt to your Slack workspace with a few clicks.",
  },
  {
    icon: <MessageSquare className="h-12 w-12 text-primary" />,
    title: "Reword Your Message",
    description: "Type your message in Slack with Rewordit commands.",
  },
  {
    icon: <CheckCircle className="h-12 w-12 text-primary" />,
    title: "Get Improved Results",
    description: "Make sure your message is perfect before sending.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-spacing">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">
            How <span className="gradient-text">RewordIt</span> Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started in minutes and improve your Slack communication
            instantly.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-primary/20 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative z-10 bg-white p-8 rounded-xl shadow-md border border-border/60 flex flex-col items-center text-center"
              >
                <div className="bg-white rounded-full p-2 mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

