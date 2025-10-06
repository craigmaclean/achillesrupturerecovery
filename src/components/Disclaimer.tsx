import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Link from 'next/link';

const Disclaimer = () => {
  return (
    <section className="py-4 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <Alert className="border py-2">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription className="ml-2 text-xs leading-relaxed">
            <strong className="font-semibold">Website / Medical Disclaimer:</strong> This content is for educational purposes only. We are not medical professionals. Always consult a qualified healthcare provider for medical advice. 
            <Link href="/disclaimer" className="underline ml-1 hover:text-primary transition-colors">Read full disclaimer</Link>
          </AlertDescription>
        </Alert>
      </div>
    </section>
  );
};

export default Disclaimer;
