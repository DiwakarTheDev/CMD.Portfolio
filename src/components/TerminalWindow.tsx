import { ReactNode, useState, useEffect } from "react";

interface TerminalWindowProps {
  children: ReactNode;
}

export const TerminalWindow = ({ children }: TerminalWindowProps) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  return (
    <div className="w-full max-w-5xl mx-auto my-8 rounded-lg overflow-hidden shadow-2xl border border-terminal-border border-glow">
      {/* Window controls */}
      <div className="bg-terminal-window border-b border-terminal-border px-4 py-3 flex items-center gap-2">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-destructive hover:brightness-110 transition-all cursor-pointer" />
          <div className="w-3 h-3 rounded-full bg-yellow-500 hover:brightness-110 transition-all cursor-pointer" />
          <div className="w-3 h-3 rounded-full bg-primary hover:brightness-110 transition-all cursor-pointer" />
        </div>
        <div className="flex-1 text-center flex items-center justify-center gap-2">
          <span className="text-terminal-text text-sm font-mono">
            diwakar@portfolio: ~
          </span>
          <div className="flex items-center gap-1.5">
            <div className={`w-2 h-2 rounded-full animate-pulse ${isOnline ? 'bg-primary' : 'bg-destructive'}`} />
            <span className="text-xs text-terminal-text">
              {isOnline ? 'online' : 'offline'}
            </span>
          </div>
        </div>
      </div>
      
      {/* Terminal content */}
      <div className="bg-terminal-bg min-h-[70vh] max-h-[80vh] flex flex-col">
        {children}
      </div>
    </div>
  );
};
