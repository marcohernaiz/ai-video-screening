import { memo } from "react";

export const Header = memo(() => {
  return (
    <header className="flex w-full items-start justify-between" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Header content removed - no logo or settings */}
    </header>
  );
});