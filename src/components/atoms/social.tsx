import React from "react";
import { Link } from "react-router-dom";

interface SocialProps {
  children: React.ReactNode;
  to: string;
}

const Social: React.FC<SocialProps> = ({ children, to }) => {
  return (
    <Link
      to={to}
      className="text-[#18181B] border-black border rounded-full p-2 hover:scale-110 transition-transform"
      target="_blank"
    >
      {children}
    </Link>
  );
};

export default Social;
