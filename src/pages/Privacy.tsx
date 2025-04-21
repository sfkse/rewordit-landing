import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <main>
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#EBF2FD] to-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-8">
                Privacy Policy
              </h1>
              <p className="text-muted-foreground mb-8">
                Effective date: June 15, 2023
              </p>

              <div className="prose prose-blue max-w-none">
                <p className="text-lg">
                  RewordIt ("we", "us", or "our") is committed to protecting
                  your privacy. This Privacy Policy explains how we collect,
                  use, and protect your information when you use our Slack app
                  and related services.
                </p>

                <h2 className="text-2xl font-bold mt-10 mb-4 flex items-center">
                  <span className="text-primary text-2xl mr-2">🔍</span>{" "}
                  Information We Collect
                </h2>

                <h3 className="text-xl font-semibold mt-6 mb-2">
                  1. Slack User Data
                </h3>
                <p>
                  When you install and use RewordIt in Slack, we may receive and
                  store:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Your Slack user ID and username</li>
                  <li>
                    The text you explicitly send to RewordIt for rephrasing
                  </li>
                  <li>The tone or settings you select for each rephrase</li>
                  <li>Your Slack team ID (to associate your usage)</li>
                </ul>
                <p>
                  We do not access messages outside what you voluntarily send
                  via a command or button click.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">
                  2. Usage Data
                </h3>
                <p>
                  We may collect basic usage analytics to improve the service,
                  such as:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Number of rephrases</li>
                  <li>Time of usage</li>
                  <li>Feature preferences</li>
                </ul>
                <p>
                  This data is not used to track you across platforms and is not
                  sold.
                </p>

                <h2 className="text-2xl font-bold mt-10 mb-4 flex items-center">
                  <span className="text-primary text-2xl mr-2">🔐</span> How We
                  Use Your Data
                </h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>
                    Provide you with rephrasing functionality inside Slack
                  </li>
                  <li>Maintain your personal rewrite history (if enabled)</li>
                  <li>Monitor app performance and prevent abuse</li>
                  <li>Improve and develop new features</li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4 flex items-center">
                  <span className="text-primary text-2xl mr-2">🔒</span> Data
                  Security
                </h2>
                <p>We take security seriously:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>All data is encrypted in transit (HTTPS)</li>
                  <li>Sensitive tokens are stored securely</li>
                  <li>
                    User-generated content is not used to train language models
                    or shared with third parties
                  </li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4 flex items-center">
                  <span className="text-primary text-2xl mr-2">❌</span> Data
                  Sharing
                </h2>
                <p>
                  We do not sell or share your personal data with third parties.
                  <br />
                  We may use third-party services (like OpenRouter or OpenAI) to
                  process text rephrasing, but they do not store your personal
                  identifying information unless otherwise stated in their own
                  terms.
                </p>

                <h2 className="text-2xl font-bold mt-10 mb-4 flex items-center">
                  <span className="text-primary text-2xl mr-2">🗑️</span> Data
                  Retention
                </h2>
                <p>
                  Rephrased messages and usage logs are stored only as long as
                  needed to deliver the service and improve your experience.
                </p>
                <p>
                  You can request deletion of your history or account at any
                  time by contacting us at support@rewordit.pro.
                </p>

                <h2 className="text-2xl font-bold mt-10 mb-4 flex items-center">
                  <span className="text-primary text-2xl mr-2">📬</span> Contact
                  Us
                </h2>
                <p>
                  If you have any questions about this Privacy Policy or how we
                  handle your data, feel free to contact us:
                </p>
                <p>
                  Email: support@rewordit.pro
                  <br />
                  Site: https://rewordit.pro
                </p>

                <h2 className="text-2xl font-bold mt-10 mb-4 flex items-center">
                  <span className="text-primary text-2xl mr-2">✅</span> Updates
                </h2>
                <p>
                  We may update this Privacy Policy from time to time. If we
                  make material changes, we'll notify you through Slack or our
                  website.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;

