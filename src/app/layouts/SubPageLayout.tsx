"use client";

import { ReactNode } from "react";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface SubPageLayoutProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  showHeader?: boolean;
  showDisclaimer?: boolean;
}

export default function SubPageLayout({ 
  children, 
  title, 
  subtitle,
  showHeader = true,
  showDisclaimer = true 
}: SubPageLayoutProps) {
  return (
    <main className="min-h-screen bg-background">
      {/* Page Header - Optional */}
      {showHeader && title && (
        <section className="py-8 px-4 bg-gradient-hero text-white">
          <div className="container mx-auto max-w-7xl px-8 py-0 md:py-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl md:text-2xl text-white/90">
                {subtitle}
              </p>
            )}
          </div>
        </section>
      )}

      {/* Medical Disclaimer */}
      {showDisclaimer && (
        <section className="border-b bg-muted/10">
          <div className="container mx-auto max-w-7xl px-8 py-4">
            <Alert className="border-muted">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription className="ml-2 text-xs">
                <strong className="font-semibold">Medical Disclaimer:</strong> This content is for educational purposes only. 
                Always consult a qualified healthcare provider for medical advice.
              </AlertDescription>
            </Alert>
          </div>
        </section>
      )}

      {/* Main Content Area */}
      <article className="container mx-auto max-w-7xl px-8 py-8 md:py-12">
        <div className="prose prose-slate max-w-none
          prose-headings:font-bold 
          prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
          prose-p:text-muted-foreground prose-p:leading-relaxed
          prose-li:text-muted-foreground
          prose-strong:text-foreground prose-strong:font-semibold
          prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
          {children}
        </div>
      </article>
    </main>
  );
}