import Link from "next/link";
import React from "react";

interface CardProps {
  children: React.ReactNode;
  link: string;
  cardClass?: string;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  link, 
  cardClass = 'className={`relative block aspect-square h-[200px] w-full`}' 
}): JSX.Element => {
  return (
    <Link 
      className={cardClass}
      href={link}
    >
      <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
        {children}
      </div>
    </Link>
  );
};
