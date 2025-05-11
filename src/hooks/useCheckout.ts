import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { config } from "@/config";

type BillingInterval = "monthly" | "yearly";

export const useCheckout = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleCheckout = async (billingInterval: BillingInterval) => {
    try {
      setLoading(true);
      const response = await fetch(
        `${config.apiUrl}/subscription/create-checkout-session`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            plan: billingInterval,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create checkout session");
      }

      const { url } = await response.json();
      window.location.href = url;
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    handleCheckout,
  };
};
