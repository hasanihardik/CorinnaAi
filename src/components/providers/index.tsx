import React from "react";
import { Toaster } from '@/components/ui/toaster'
import { ThemeProvider } from "./theme-provider";
import { AuthContextProvider } from "@/context/use-auth-context";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      // forcedTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <AuthContextProvider>
        {children}
      </AuthContextProvider>
      <Toaster />
    </ThemeProvider>
  );
};

export default Providers;
