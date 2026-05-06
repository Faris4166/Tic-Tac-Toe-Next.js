"use client";

import { useEffect } from "react";

export default function SecurityGuard() {
  useEffect(() => {
    // Fake "Sensitive" Data to troll hackers
    (window as any)._SYSTEM_ROOT_ACCESS = "PROHIBITED";
    (window as any)._ADMIN_TOKEN = "BT-9922-ERROR-UNAUTHORIZED";
    (window as any)._ENCRYPTION_KEY = "YOU_REALLY_THOUGHT_IT_WOULD_BE_HERE?";
    (window as any)._HACKER_STATUS = "NOOB_DETECTED";

    console.log("%cSTOP!", "color: red; font-size: 50px; font-weight: bold; -webkit-text-stroke: 1px black;");
    console.log("%cThis is a browser feature intended for developers. If someone told you to copy-paste something here to 'hack' the site, it is a scam.", "font-size: 20px;");
    
    const trollMessages = [
        "Scanning for Kali Linux...",
        "Hacker detected. IP: 127.0.0.1 (Wait, that's you...)",
        "Downloading more RAM to prevent hacking...",
        "Calling the Cyber Police...",
        "Nice try, Mr. Robot.",
        "Error: Brain not found in user session."
    ];

    let messageIndex = 0;
    const consoleTroll = setInterval(() => {
        console.warn(`[SECURITY] ${trollMessages[messageIndex]}`);
        messageIndex = (messageIndex + 1) % trollMessages.length;
    }, 3000);

    // 1. Reload page on F12
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12
      if (e.key === "F12") {
        e.preventDefault();
        window.location.reload();
      }

      // Prevent Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C (Inspect shortcuts)
      if (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) {
        e.preventDefault();
      }

      // Prevent Ctrl+U (View Source)
      if (e.ctrlKey && e.key === "u") {
        e.preventDefault();
      }
    };

    // 2. Disable Right-Click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // 3. Debugger Trap (Enhanced)
    const debuggerTrap = setInterval(() => {
        const start = Date.now();
        (function() {
            debugger;
        }());
        const end = Date.now();
        
        // If the debugger took more than 100ms, it means DevTools is open and paused it
        if (end - start > 100) {
            console.error("CRITICAL: UNAUTHORIZED INSPECTION DETECTED");
            // Optional: Redirect to a troll site
            // window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; 
        }
    }, 500);


    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("contextmenu", handleContextMenu);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("contextmenu", handleContextMenu);
      clearInterval(debuggerTrap);
      clearInterval(consoleTroll);
    };

  }, []);

  return null; // This component doesn't render anything
}
