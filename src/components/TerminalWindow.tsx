import { ReactNode } from "react";

interface TerminalWindowProps {
  children: ReactNode;
}

export const TerminalWindow = ({ children }: TerminalWindowProps) => {
  return (
    <div className="w-full max-w-5xl mx-auto my-8 rounded-lg overflow-hidden shadow-2xl border border-terminal-border border-glow">
      {/* Window controls */}
      <div className="bg-terminal-window border-b border-terminal-border px-4 py-3 flex items-center gap-2">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-destructive hover:brightness-110 transition-all cursor-pointer" />
          <div className="w-3 h-3 rounded-full bg-yellow-500 hover:brightness-110 transition-all cursor-pointer" />
          <div className="w-3 h-3 rounded-full bg-primary hover:brightness-110 transition-all cursor-pointer" />
        </div>
        <div className="flex-1 text-center">
          <span className="text-terminal-text text-sm font-mono">
            diwakar@portfolio: ~
          </span>
        </div>
      </div>
      
      {/* Terminal content */}
      <div className="bg-terminal-bg min-h-[70vh] max-h-[80vh] flex flex-col">
        {children}
      </div>
    </div>
  );
};
