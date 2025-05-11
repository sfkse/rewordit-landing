import { CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Success = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const success = searchParams.get("success");
  const canceled = searchParams.get("canceled");
  const sessionId = searchParams.get("session_id");

  // If no success or cancel parameters are present, redirect to home
  useEffect(() => {
    if (!success && !canceled) {
      navigate("/");
    }
  }, [success, canceled, navigate]);

  useEffect(() => {
    const handleSubscription = async () => {
      if (success === "true" && sessionId) {
        try {
          // Here you can add logic to verify the subscription status
          // For example, check with your backend if the subscription was created successfully
          setLoading(false);
        } catch (err) {
          setError("Failed to verify subscription status");
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    handleSubscription();
  }, [success, sessionId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="max-w-md w-full mx-auto p-6 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">
            Verifying your subscription...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="max-w-md w-full mx-auto p-6 text-center">
          <div className="flex justify-center mb-6">
            <XCircle className="h-16 w-16 text-red-500" />
          </div>
          <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
          <p className="text-muted-foreground mb-8">{error}</p>
          <Button onClick={() => navigate("/")} className="w-full">
            Return to Home
          </Button>
        </div>
      </div>
    );
  }

  if (success === "true") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="max-w-md w-full mx-auto p-6 text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle2 className="h-16 w-16 text-green-500" />
          </div>
          <h1 className="text-2xl font-bold mb-4">Subscription Successful!</h1>
          <p className="text-muted-foreground mb-8">
            Thank you for subscribing! You now have access to all premium
            features. You can manage your subscription anytime from your account
            settings.
          </p>
          <Button onClick={() => navigate("/")} className="w-full">
            Go to Dashboard
          </Button>
        </div>
      </div>
    );
  }

  if (canceled === "true") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="max-w-md w-full mx-auto p-6 text-center">
          <div className="flex justify-center mb-6">
            <XCircle className="h-16 w-16 text-yellow-500" />
          </div>
          <h1 className="text-2xl font-bold mb-4">Subscription Canceled</h1>
          <p className="text-muted-foreground mb-8">
            Your subscription process was canceled. No charges were made. Feel
            free to try again when you're ready.
          </p>
          <Button onClick={() => navigate("/")} className="w-full">
            Return to Home
          </Button>
        </div>
      </div>
    );
  }

  return null;
};

export default Success;
