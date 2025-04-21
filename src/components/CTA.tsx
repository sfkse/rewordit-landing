import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to enhance your Slack communication?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Join thousands of professionals who use RewordIt to communicate more
            effectively on Slack.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="button-primary text-base py-6 px-8">
              Add to Slack
            </Button>
            <Button className="button-secondary text-base py-6 px-8 border border-primary hover:bg-primary hover:text-white">
              Learn More
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            No credit card required • Free plan available
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;

