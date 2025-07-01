import { AnimatedWrapper } from "@/components/DialogWrapper";
import React from "react";
import { useAtom } from "jotai";
import { screenAtom } from "@/store/screens";
import AudioButton from "@/components/AudioButton";
import carterVideo from "@/assets/video/carter.mp4";

export const Intro: React.FC = () => {
  const [, setScreenState] = useAtom(screenAtom);

  const handleClick = () => {
    setScreenState({ currentScreen: "instructions" });
  };

  return (
    <AnimatedWrapper>
      <div className="flex size-full flex-col items-center justify-end pb-20">
        <video
          src={carterVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10">
          <AudioButton 
            onClick={handleClick}
            className="relative z-20 flex items-center justify-center rounded-3xl border border-blue-500 px-6 py-3 text-sm text-white transition-all duration-200 hover:text-white"
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
            Talk with our CEO
          </AudioButton>
        </div>
      </div>
    </AnimatedWrapper>
  );
};