import { AnimatedWrapper } from "@/components/DialogWrapper";
import React from "react";
import { useAtom } from "jotai";
import { screenAtom } from "@/store/screens";
import { MessageCircle } from "lucide-react";
import AudioButton from "@/components/AudioButton";
import gloriaVideo from "@/assets/video/gloria.mp4";

export const Intro: React.FC = () => {
  const [, setScreenState] = useAtom(screenAtom);

  const handleClick = () => {
    setScreenState({ currentScreen: "instructions" });
  };

  return (
    <AnimatedWrapper>
      <div className="flex size-full flex-col items-center justify-center">
        <video
          src={gloriaVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-overlay backdrop-blur-sm" />
        <div className="relative z-10 flex flex-col items-center gap-6 py-8 px-6">
          <h1 
            className="text-4xl font-bold text-white mb-4 text-center"
            style={{ fontFamily: 'Source Code Pro, monospace' }}
          >
            <span className="text-white">See AI?</span>{" "}
            <span style={{ color: '#9EEAFF' }}>Act Natural.</span>
          </h1>
          
          <p className="max-w-[650px] text-center text-base sm:text-lg text-gray-400 mb-8">
            Have a face-to-face conversation with an AI so real, it feels human—an intelligent agent ready to listen, respond, and act across countless use cases.
          </p>

          <AudioButton 
            onClick={handleClick}
            className="relative z-20 flex items-center justify-center gap-2 rounded-3xl border border-blue-500 px-6 py-3 text-sm text-white transition-all duration-200 hover:text-white"
            style={{
              height: '48px',
              transition: 'all 0.2s ease-in-out',
              backgroundColor: '#3b82f6',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#2563eb';
              e.currentTarget.style.boxShadow = '0 0 15px rgba(59, 130, 246, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#3b82f6';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <MessageCircle className="size-4" />
            Talk with our CEO
          </AudioButton>
        </div>
      </div>
    </AnimatedWrapper>
  );
};