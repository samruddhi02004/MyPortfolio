import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { designTokens, componentTokens } from './DesignTokens';

const buttonVariants = {
  variant: {
    primary: `
      bg-gradient-to-r from-blue-600 to-purple-600 
      text-white 
      border-transparent 
      hover:from-blue-700 hover:to-purple-700
      shadow-lg shadow-blue-500/25
      hover:shadow-xl hover:shadow-blue-500/35
      active:scale-95
    `,
    secondary: `
      bg-white/10 backdrop-blur-sm 
      text-white 
      border-white/20 
      hover:bg-white/20 hover:border-white/30
      shadow-lg
      hover:shadow-xl
    `,
    outline: `
      bg-transparent 
      text-primary 
      border-primary 
      hover:bg-primary/10
      hover:border-primary/60
    `,
    ghost: `
      bg-transparent 
      text-foreground 
      border-transparent 
      hover:bg-accent/50
    `,
    destructive: `
      bg-gradient-to-r from-red-600 to-pink-600 
      text-white 
      border-transparent 
      hover:from-red-700 hover:to-pink-700
      shadow-lg shadow-red-500/25
    `,
    success: `
      bg-gradient-to-r from-green-600 to-emerald-600 
      text-white 
      border-transparent 
      hover:from-green-700 hover:to-emerald-700
      shadow-lg shadow-green-500/25
    `,
  },
  size: {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl',
  },
};

const UniqueButton = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  onClick,
  type = 'button',
  ...props
}) => {
  const baseClasses = `
    inline-flex items-center justify-center
    font-medium
    transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    relative overflow-hidden
    border-2
    ${buttonVariants.variant[variant]}
    ${buttonVariants.size[size]}
  `;

  return (
    <motion.button
      className={cn(baseClasses, className)}
      disabled={disabled || isLoading}
      onClick={onClick}
      type={type}
      whileHover={!disabled && !isLoading ? { scale: 1.02 } : {}}
      whileTap={!disabled && !isLoading ? { scale: 0.98 } : {}}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      {...props}
    >
      {/* Background animation overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6 }}
      />
      
      {/* Button content */}
      <div className="relative z-10 flex items-center gap-2">
        {isLoading ? (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              <Loader2 className="h-4 w-4" />
            </motion.div>
            <span>Loading...</span>
          </>
        ) : (
          <>
            {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
          </>
        )}
      </div>
      
      {/* Ripple effect on click */}
      <motion.div
        className="absolute inset-0 bg-white/20 rounded-inherit"
        initial={{ scale: 0, opacity: 0.5 }}
        whileTap={{ scale: 1, opacity: 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

export default UniqueButton;
