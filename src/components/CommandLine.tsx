import { forwardRef, KeyboardEvent } from "react";

interface CommandLineProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (command: string) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
}

export const CommandLine = forwardRef<HTMLInputElement, CommandLineProps>(
  ({ value, onChange, onSubmit, onKeyDown }, ref) => {
    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        onSubmit(value);
      }
    };

    return (
      <div className="flex items-center gap-2 animate-fadeIn">
        <span className="text-primary text-glow font-semibold">❯</span>
        <input
          ref={ref}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => {
            handleKeyPress(e);
            onKeyDown?.(e);
          }}
          className="flex-1 bg-transparent outline-none text-terminal-text caret-primary font-mono"
          autoFocus
          spellCheck={false}
        />
        <span className="animate-blink text-primary">█</span>
      </div>
    );
  }
);

CommandLine.displayName = "CommandLine";
