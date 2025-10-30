import { Button } from "@/components/ui/button";
import { Gift, Sparkles } from "lucide-react";

const Index = () => {
  const handleClaimClick = () => {
    window.open("https://smrturl.co/a/sf281a7b7c6/16208?s1=", "_blank");
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
            Get Your $750 Walmart Halloween Gift Card!
          </h1>

          {/* Gift Card Visual */}
          <div className="relative py-8">
            <div className="relative inline-block">
              {/* Background Card 1 - Orange */}
              <div className="absolute top-4 left-4 bg-gradient-to-br from-halloween-orange to-orange-600 rounded-3xl p-8 md:p-12 shadow-xl w-[280px] md:w-[380px] h-[180px] md:h-[220px] rotate-[-8deg] opacity-60">
                <div className="text-center">
                  <p className="text-white text-2xl md:text-3xl font-black">Walmart</p>
                  <p className="text-white/80 text-sm md:text-base mt-2">Gift Card</p>
                </div>
              </div>
              
              {/* Background Card 2 - Black */}
              <div className="absolute top-6 right-4 bg-gradient-to-br from-halloween-dark to-black rounded-3xl p-8 md:p-12 shadow-xl w-[280px] md:w-[380px] h-[180px] md:h-[220px] rotate-[6deg] opacity-60">
                <div className="text-center">
                  <p className="text-white text-2xl md:text-3xl font-black">Walmart</p>
                  <p className="text-white/80 text-sm md:text-base mt-2">Gift Card</p>
                </div>
              </div>
              
              {/* Main Card - Front */}
              <div className="relative z-10 bg-gradient-to-br from-halloween-orange to-halloween-glow rounded-3xl p-8 md:p-12 shadow-2xl glow-orange-strong transform hover:scale-105 transition-transform">
                <div className="flex items-center justify-center gap-4">
                  <Gift className="w-16 h-16 md:w-20 md:h-20 text-white" />
                  <div className="text-left">
                    <p className="text-white/90 text-sm md:text-base font-semibold">Gift Card Value</p>
                    <p className="text-white text-4xl md:text-5xl font-black">$750</p>
                  </div>
                </div>
              </div>
              <Sparkles className="absolute -top-4 -right-4 w-12 h-12 text-halloween-glow animate-pulse z-20" />
              <Sparkles className="absolute -bottom-4 -left-4 w-10 h-10 text-halloween-glow animate-pulse delay-150 z-20" />
            </div>
          </div>

          {/* CTA Button */}
          <div className="space-y-4">
            <Button
              variant="halloween"
              size="xl"
              className="w-full max-w-md mx-auto text-xl"
              onClick={handleClaimClick}
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

    </div>
  );
};

export default Index;
