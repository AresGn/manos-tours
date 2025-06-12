import React from 'react';

interface SkipLinkProps {
  targetId: string;
  children: React.ReactNode;
}

export const SkipLink: React.FC<SkipLinkProps> = ({ targetId, children }) => (
  <a
    href={`#${targetId}`}
    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50 transition-all duration-200"
  >
    {children}
  </a>
);

interface VisuallyHiddenProps {
  children: React.ReactNode;
}

export const VisuallyHidden: React.FC<VisuallyHiddenProps> = ({ children }) => (
  <span className="sr-only">{children}</span>
);

// Screen reader only class utility
export const srOnly = "absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0";
