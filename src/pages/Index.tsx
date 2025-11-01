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
              🎯 Special treat for our amazing community!
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
              We're giving you a chance to win a $100 Target Gift Card — and enjoy amazing savings all season long!
            </p>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-5xl font-extrabold text-red-700 leading-tight">
            Get Your $100 Target Gift Card!
          </h1>

          {/* Gift Card Visual */}
          <div className="relative py-8 md:py-12">
            <div className="relative inline-block">
              {/* Background Card 1 - White Target Card */}
              <div className="absolute -top-8 -left-12 md:-left-16 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl w-[200px] md:w-[280px] h-[125px] md:h-[175px] rotate-[-15deg] border-2 border-red-200">
                <div className="p-4 md:p-6 flex flex-col justify-between h-full">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-red-600 flex items-center justify-center">
                      <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-white"></div>
                    </div>
                    <div className="text-red-600 font-black text-xl md:text-3xl">Target</div>
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="text-gray-600 text-xs md:text-sm">Gift Card</div>
                  </div>
                </div>
              </div>
              
              {/* Background Card 2 - Red Target Card */}
              <div className="absolute -top-4 -right-12 md:-right-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl shadow-2xl w-[200px] md:w-[280px] h-[125px] md:h-[175px] rotate-[12deg] border-2 border-red-800">
                <div className="p-4 md:p-6 flex flex-col justify-between h-full">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center">
                      <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-red-600"></div>
                    </div>
                    <div className="text-white font-black text-xl md:text-3xl">Target</div>
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="text-white/90 text-xs md:text-sm">Gift Card</div>
                  </div>
                </div>
              </div>
              
              {/* Main Card - Front with $100 Value */}
              <div className="relative z-10 bg-gradient-to-br from-red-600 via-red-500 to-red-400 rounded-3xl p-8 md:p-12 shadow-2xl transform hover:scale-105 transition-transform border-4 border-red-700">
                <div className="flex items-center justify-center gap-4">
                  <Gift className="w-16 h-16 md:w-20 md:h-20 text-white" />
                  <div className="text-left">
                    <p className="text-white/90 text-sm md:text-base font-semibold">Gift Card Value</p>
                    <p className="text-white text-4xl md:text-5xl font-black">$100</p>
                  </div>
                </div>
              </div>
              <Sparkles className="absolute -top-4 -right-4 w-12 h-12 text-red-400 animate-pulse z-20" />
              <Sparkles className="absolute -bottom-4 -left-4 w-10 h-10 text-red-400 animate-pulse delay-150 z-20" />
            </div>
          </div>

          {/* CTA Button */}
          <div className="space-y-4">
            <Button
              variant="destructive"
              size="xl"
              className="w-full max-w-md mx-auto text-xl bg-red-600 hover:bg-red-700"
              onClick={handleClaimClick}
            >
              🎁 Claim Your Gift Now
            </Button>
            
            {/* Urgency Text */}
            <div className="space-y-2">
              <p className="text-lg md:text-xl font-bold text-red-700">
                Hurry! Offer ends soon — don't miss your $100 treat!
              </p>
              <p className="text-sm md:text-base text-muted-foreground flex items-center justify-center gap-2">
                <span className="inline-block animate-pulse">🎉</span>
                2,800+ people already claimed today
              </p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="pt-8">
            <p className="text-xs text-muted-foreground max-w-lg mx-auto">
              Disclaimer: This promotion is not affiliated with Target. For entertainment purposes only.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center border-t border-border">
        <p className="text-sm text-muted-foreground">
          © 2025 Gift Card Rewards. All rights reserved.
        </p>
      </footer>

    </div>
  );
};

export default Index;
