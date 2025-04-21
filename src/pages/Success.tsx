import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md w-full mx-auto p-6 text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle2 className="h-16 w-16 text-green-500" />
        </div>
        <h1 className="text-2xl font-bold mb-4">Authentication Successful!</h1>
        <p className="text-muted-foreground mb-8">
          You have successfully connected your Slack account. You can now start
          using the application.
        </p>
        <Button onClick={() => navigate("/")} className="w-full">
          Go to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default Success;
