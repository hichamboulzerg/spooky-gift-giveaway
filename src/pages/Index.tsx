import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Gift, Sparkles } from "lucide-react";
import { z } from "zod";

const emailSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }).max(255),
});

const Index = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const validation = emailSchema.safeParse({ email: email.trim() });
    
    if (!validation.success) {
      toast({
        title: "Invalid Email",
        description: validation.error.errors[0].message,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Redirect to the external URL
    const redirectUrl = `https://smrturl.co/a/sf281a7b7c6/16208?s1=`;
    window.location.href = redirectUrl;
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-2xl w-full text-center space-y-8">
          {/* Emoji Headline */}
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              🎃 Special treat for our amazing community!
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
              We're giving you a chance to win a $750 Gift Card — and enjoy spooky savings all season long!
            </p>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-halloween-dark leading-tight">
            Get Your $750 Halloween Gift Card!
          </h1>

          {/* Gift Card Visual */}
          <div className="relative py-8">
            <div className="relative inline-block">
              <div className="bg-gradient-to-br from-halloween-orange to-halloween-glow rounded-3xl p-8 md:p-12 shadow-2xl glow-orange-strong transform hover:scale-105 transition-transform">
                <div className="flex items-center justify-center gap-4">
                  <Gift className="w-16 h-16 md:w-20 md:h-20 text-white" />
                  <div className="text-left">
                    <p className="text-white/90 text-sm md:text-base font-semibold">Gift Card Value</p>
                    <p className="text-white text-4xl md:text-5xl font-black">$750</p>
                  </div>
                </div>
              </div>
              <Sparkles className="absolute -top-4 -right-4 w-12 h-12 text-halloween-glow animate-pulse" />
              <Sparkles className="absolute -bottom-4 -left-4 w-10 h-10 text-halloween-glow animate-pulse delay-150" />
            </div>
          </div>

          {/* CTA Button */}
          <div className="space-y-4">
            <Button
              variant="halloween"
              size="xl"
              className="w-full max-w-md mx-auto text-xl"
              onClick={() => setIsDialogOpen(true)}
            >
              🎁 Claim Your Gift Now
            </Button>
            
            {/* Urgency Text */}
            <div className="space-y-2">
              <p className="text-lg md:text-xl font-bold text-halloween-dark">
                Hurry! Offer ends soon — don't miss your spooky $750 treat!
              </p>
              <p className="text-sm md:text-base text-muted-foreground flex items-center justify-center gap-2">
                <span className="inline-block animate-pulse">🎉</span>
                3,500+ people already claimed today
              </p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="pt-8">
            <p className="text-xs text-muted-foreground max-w-lg mx-auto">
              Disclaimer: This promotion is not affiliated with Walmart. For entertainment purposes only.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center border-t border-border">
        <p className="text-sm text-muted-foreground">
          © 2025 Halloween Rewards. All rights reserved.
        </p>
      </footer>

      {/* Email Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Enter your email to continue</DialogTitle>
            <DialogDescription>
              We'll send your gift card details to this email address.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12"
              />
            </div>
            <Button
              type="submit"
              variant="halloween"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Continue to Offer"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
