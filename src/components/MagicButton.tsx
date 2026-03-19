"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useContactModal } from '@/components/ContactModalProvider';

interface MagicButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string; // Additional classes for the wrapper
  contentClassName?: string; // Additional classes for the inner content
  showArrow?: boolean;
}

export default function MagicButton({ href, children, className = '', contentClassName = '', showArrow = false }: MagicButtonProps) {
  const { openModal } = useContactModal();

  const isContactLink = href.includes('contact') || href.includes('mailto:');

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isContactLink) {
      e.preventDefault();
      openModal();
    }
  };

  return (
    <Link href={href} onClick={handleClick} className={`btn-magic ${className}`}>
      <span className="magic-border"></span>
      <span className={`magic-content ${contentClassName}`}>
        {children}
        {showArrow && <ArrowRight className="arrow-icon ml-2 h-4 w-4" />}
      </span>
    </Link>
  );
}
