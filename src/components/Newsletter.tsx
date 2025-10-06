import { useState } from "react";
import { Mail, Send, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive our weekly recovery updates and tips.",
      });
    }, 1500);
  };

  const benefits = [
    "Weekly recovery progress tips and exercises",
    "Evidence-based treatment updates and research",
    "Product recommendations and exclusive discounts",
    "Success stories and community support",
    "Access to downloadable recovery guides"
  ];

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Stay Connected to Your Recovery
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of people on their healing journey. Get expert guidance, 
            tips, and support delivered to your inbox.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Benefits */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">
              {"What you'll receive:"}
            </h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Privacy notice */}
            <div className="mt-8 p-4 bg-gradient-subtle rounded-lg border border-border">
              <div className="flex items-center mb-2">
                <Shield className="h-4 w-4 text-primary mr-2" />
                <span className="text-sm font-medium text-foreground">Privacy Protected</span>
              </div>
              <p className="text-xs text-muted-foreground">
                We respect your privacy and follow HIPAA guidelines. Your email will never be shared, 
                and you can unsubscribe at any time. We do not provide medical advice via email.
              </p>
            </div>
          </div>

          {/* Newsletter Form */}
          <div>
            <div className="bg-gradient-card border border-border rounded-2xl p-8 shadow-card">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="text-center mb-6">
                    <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Start Your Recovery Journey
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Get your free recovery timeline and weekly support
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="email" className="sr-only">
                        Email address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="h-12 text-center"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-hero hover:opacity-90 transition-all duration-300 h-12"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                          Subscribing...
                        </div>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Get Free Recovery Guide
                        </>
                      )}
                    </Button>
                  </div>

                  <p className="text-xs text-muted-foreground text-center">
                    By subscribing, you agree to receive recovery-related emails. 
                    This is for educational purposes only and not personal medical advice.
                  </p>
                </form>
              ) : (
                <div className="text-center animate-scale-in">
                  <CheckCircle className="h-16 w-16 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Welcome to Your Recovery Community!
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {"Check your email for your free recovery timeline and first week's guidance."}
                  </p>
                  <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Next step:</strong> Look for an email from 
                      Achilles Recovery Team and add us to your contacts for best delivery.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;