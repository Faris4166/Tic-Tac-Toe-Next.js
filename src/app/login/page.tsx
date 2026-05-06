"use client";

import { useState, useEffect } from "react";
import Link from "next/link";


export default function TrollLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [userInfo, setUserInfo] = useState({
    ip: "Loading...",
    os: "Detecting...",
    isp: "Detecting...",
    location: "Detecting..."
  });

  useEffect(() => {
    // Detect OS
    const getOS = () => {
      const ua = window.navigator.userAgent;
      if (ua.indexOf("Win") !== -1) return "Windows";
      if (ua.indexOf("Mac") !== -1) return "MacOS";
      if (ua.indexOf("Linux") !== -1) return "Linux (Kali?)";
      if (ua.indexOf("Android") !== -1) return "Android";
      if (ua.indexOf("like Mac") !== -1) return "iOS";
      return "Unknown OS";
    };

    // Fetch IP and Network info
    fetch("https://ipapi.co/json/")
      .then(res => res.json())
      .then(data => {
        setUserInfo({
          ip: data.ip || "Unknown",
          os: getOS(),
          isp: data.org || "Unknown ISP",
          location: `${data.city}, ${data.country_name}`
        });
      })
      .catch(() => {
        setUserInfo(prev => ({ ...prev, ip: "Shielded", isp: "Encrypted", os: getOS(), location: "Unknown" }));
      });
  }, []);



  const trollMessages = [
    "Invalid password. Please try again (if you have a life).",
    "Password incorrect. Maybe try 'password123'? (No, it won't work).",
    "Access Denied. Your IP has been reported to your mom.",
    "ERROR: User is too handsome/beautiful to log in.",
    "System overload: Too many failed attempts from a Kali Linux user.",
    "Pro Tip: The password is NOT what you just typed.",
    "Loading... 0% (Estimated time: 45 years)",
    "Are you still trying? Go touch some grass.",
    "Correct password entered! Just kidding. Access Denied.",
    "Warning: Self-destruct sequence initiated in 3... 2... 1... (Haha made you look)"
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAttempts(prev => prev + 1);
    setMessage(trollMessages[attempts % trollMessages.length]);
    setPassword("");
  };

  return (
    <div className="min-h-screen bg-black text-green-500 flex flex-col items-center justify-center font-mono p-4">
      <div className="border-2 border-green-500 p-8 rounded-lg shadow-[0_0_20px_rgba(0,255,0,0.5)] max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center animate-pulse">ADMIN ACCESS CONTROL</h1>
        
        <div className="mb-4 text-[10px] bg-green-900/20 p-3 rounded border border-green-800 space-y-1">
          <p className="flex justify-between"><span className="text-green-700">TARGET IP:</span> <span>{userInfo.ip}</span></p>
          <p className="flex justify-between"><span className="text-green-700">OS SYSTEM:</span> <span>{userInfo.os}</span></p>
          <p className="flex justify-between"><span className="text-green-700">NETWORK/ISP:</span> <span className="text-right">{userInfo.isp}</span></p>
          <p className="flex justify-between"><span className="text-green-700">LOCATION:</span> <span>{userInfo.location}</span></p>
          <div className="pt-2 border-t border-green-900 mt-2">
            <p className="text-red-500 animate-pulse text-center font-bold">STATUS: TRACKING ACTIVE</p>
          </div>
        </div>


        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-1">Username:</label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-black border border-green-500 p-2 text-green-500 focus:outline-none focus:ring-1 focus:ring-green-400"
              placeholder="root / admin"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Password:</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black border border-green-500 p-2 text-green-500 focus:outline-none focus:ring-1 focus:ring-green-400"
              placeholder="••••••••"
              required
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-green-600 text-black font-bold py-2 hover:bg-green-400 transition-colors"
          >
            EXECUTE LOGIN
          </button>
        </form>

        {message && (
          <div className="mt-6 p-3 border border-red-500 bg-red-900/20 text-red-400 text-sm animate-bounce text-center">
            {message}
          </div>
        )}

        <div className="mt-8 text-center">
            <Link href="/" className="text-xs text-green-700 hover:text-green-400">
                &lt;-- Back to Mainframe
            </Link>
        </div>
      </div>
      
      <div className="absolute bottom-4 text-[10px] text-green-900">
        Unauthorized access is strictly monitored by the Galactic Empire.
      </div>
    </div>
  );
}
