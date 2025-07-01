import { AnimatedWrapper } from "@/components/DialogWrapper";
import React from "react";
import { useAtom } from "jotai";
import { screenAtom } from "@/store/screens";
import AudioButton from "@/components/AudioButton";
import { useAtomValue } from "jotai";
import { settingsAtom } from "@/store/settings";

export const Intro: React.FC = () => {
  const [, setScreenState] = useAtom(screenAtom);
  const settings = useAtomValue(settingsAtom);

  const handleClick = () => {
    setScreenState({ currentScreen: "instructions" });
  };

  // Use the persona ID from settings, or default to the one used in createConversation
  const personaId = settings.persona || "pd43ffef";
  
  // Generate the persona video URL based on the persona ID
  const personaVideoUrl = `https://tavusapi.com/v2/personas/${personaId}/video`;

  return (
    <AnimatedWrapper>
      <div className="flex size-full flex-col items-center justify-end pb-20">
        <video
          src={personaVideoUrl}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          onError={(e) => {
            // Fallback to gloria video if persona video fails to load
            console.warn("Persona video failed to load, using fallback");
            e.currentTarget.src = "/assets/video/gloria.mp4";
          }}
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