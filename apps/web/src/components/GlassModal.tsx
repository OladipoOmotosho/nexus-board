import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';

interface GlassModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  variant?: 'default' | 'glass' | 'danger';
}

export function GlassModal({ 
  open, 
  onOpenChange, 
  title, 
  description, 
  children,
  variant = 'default'
}: GlassModalProps) {
  const getVariantClass = () => {
    switch (variant) {
      case 'glass':
        return 'bg-glass-light dark:bg-glass-dark backdrop-blur-xl border-border/50';
      case 'danger':
        return 'bg-destructive/5 dark:bg-destructive/10 border-destructive/20';
      default:
        return '';
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={getVariantClass()}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        <div className="mt-4">
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
}
