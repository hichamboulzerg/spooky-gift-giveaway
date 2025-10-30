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
              We're giving you a chance to win a $750 Walmart Gift Card — and enjoy spooky savings all season long!
            </p>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-5xl font-extrabold text-halloween-dark leading-tight">
            Get Your $750 Walmart Halloween Gift Card!
          </h1>

          {/* Gift Card Visual */}
          <div className="relative py-8 md:py-12">
            <div className="relative inline-block">
              {/* Background Card 1 - Black Walmart Card */}
              <div className="absolute -top-8 -left-12 md:-left-16 bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl w-[200px] md:w-[280px] h-[125px] md:h-[175px] rotate-[-15deg] border border-gray-700">
                <div className="p-4 md:p-6 flex flex-col justify-between h-full">
                  <div className="flex items-center gap-2">
                    <div className="text-yellow-400 font-black text-xl md:text-3xl">Walmart</div>
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="text-white/80 text-xs md:text-sm">Gift Card</div>
                    <div className="text-yellow-400">
                      <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L9 9H2l6 4-2 7 6-4 6 4-2-7 6-4h-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background Card 2 - Orange Walmart Card */}
              <div className="absolute -top-4 -right-12 md:-right-16 bg-gradient-to-br from-halloween-orange to-orange-600 rounded-2xl shadow-2xl w-[200px] md:w-[280px] h-[125px] md:h-[175px] rotate-[12deg] border border-orange-700">
                <div className="p-4 md:p-6 flex flex-col justify-between h-full">
                  <div className="flex items-center gap-2">
                    <div className="text-white font-black text-xl md:text-3xl">Walmart</div>
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="text-white/90 text-xs md:text-sm">Gift Card</div>
                    <div className="text-yellow-300">
                      <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L9 9H2l6 4-2 7 6-4 6 4-2-7 6-4h-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Main Card - Front with $750 Value */}
              <div className="relative z-10 bg-gradient-to-br from-halloween-orange via-orange-500 to-halloween-glow rounded-3xl p-8 md:p-12 shadow-2xl glow-orange-strong transform hover:scale-105 transition-transform border-4 border-orange-600">
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
