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
            <a href="https://slack.com/oauth/v2/authorize?client_id=8697258707847.8714309865490&scope=assistant:write,chat:write,chat:write.customize,chat:write.public,commands,groups:history,users:read&user_scope=users:read,users:read.email&_gl=1*xtzhve*_gcl_au*MjEwMTkzMzY2NS4xNzQ0OTc4NjIzLjE0NjE4MTc5MzAuMTc0NTIzNzMwNC4xNzQ1MjM3MzA2*_ga*MTM1OTcxMTA1MS4xNzQ0OTc4NjIz*_ga_QTJQME5M5D*MTc0NTI1ODc5OS41LjEuMTc0NTI1ODgxNS40NC4wLjA.">
              <Button className="button-primary text-base py-6 px-8">
                Add to Slack
              </Button>
            </a>
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
