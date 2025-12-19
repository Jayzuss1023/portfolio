"use client";

import { SignInButton, useUser } from "@clerk/nextjs";
import { MessageSquare, Sparkles } from "lucide-react";
import { useSidebar } from "./ui/sidebar";

function SidebarToggle() {
  const { toggleSidebar, open, isMobile, openMobile } = useSidebar();
  const { isSignedIn } = useUser();

  const isSidebarOpen = isMobile ? openMobile : open;

  if (isSidebarOpen) return null;

  const buttonStyles = `relative w-16 h-16 rounded-full 
    bg-linear-to-br from-teal-300 via-emerald-400 to-teal-600 
    dark:from-teal-400 dark:via-emerald-500 dark:to-teal-700 
    shadow-[0_0_40px_rgba(168,85,247,0.4)] 
    hover:shadow-[0_0_60px_rgba(168,85,247,0.6)] 
    transition-all duration-500 
    hover:scale-110 hover:rotate-12 
    flex items-center justify-center`;

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Animated rings */}
      <div className="bg-linear-to-br inset-0 w-5 h-5 rounded-full from-emerald-500 to-amber-500 opacity-20 blur-2xl animate-ping [animation-duration-2s]" />
      <div className="absolute inset-0 rounded-full bg-linear-to-br from-green-900 to-orange-500 opacity-30 blur-xl animate-pulse [animation-duration-3s]" />

      {/* Sparkle Badge */}
      <div className="absolute -top-1 -right-1 z-10">
        <div className="h-6 w-6 rounded-full bg-linear-to-br from-orange-400 to-yellow-200 shadow-lg flex items-center justify-center animate-bounce {animation-duration-2s}">
          <Sparkles className="h-3 w-3 text-white" />
        </div>
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 rounded-lg bg-white/90 dark:bg-black/90 backdrop-blur-xl border border-white/40 dark:border-white/20 text-sm font-medium text-neutral-800 dark:texst-neutral-200 whitespace-nowrap opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-y-1 transition-all duration-300 pointer-events-none shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]">
        Chat with My AI Twin
        {/* Tooltip Arrow */}
        <div className="absolute -bottom-1 right-6 w-2 h-2 rotate-45 bg-white/90 dark:bg-black/90 border-r border-b border-white/40 dark:border-white/20" />
      </div>

      {isSignedIn ? (
        <button
          type="button"
          aria-label="Chat with AI Twin"
          className={buttonStyles}
          onClick={toggleSidebar}
        >
          <MessageSquare />
        </button>
      ) : (
        <SignInButton mode="modal">
          <button type="button">
            <MessageSquare />
          </button>
        </SignInButton>
      )}
    </div>
  );
}

export default SidebarToggle;
