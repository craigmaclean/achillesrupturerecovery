import { ArrowRight, ArrowDown, Shield, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image"
import heroImage from "/public/hero-achilles-recovery.jpg";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-subtle">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px] py-16">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="mb-6">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Shield className="h-4 w-4 mr-2" />
                Medically Reviewed Information
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Your Path to{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Complete Recovery
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Empowering you with the resources and tips you need to get back on your feet.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row gap-6 mb-8">
              <div className="flex items-center text-muted-foreground">
                <Clock className="h-5 w-5 mr-2 text-secondary" />
                <span>6-month recovery timeline</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Users className="h-5 w-5 mr-2 text-secondary" />
                <span>Thousands helped</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/just-injured">
                <Button 
                  size="lg" 
                  className="bg-gradient-hero hover:opacity-90 shadow-hero transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  Just Injured? Start Here
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>

              <Link href="#recovery-journey">
                <Button variant="outline" size="lg">
                  Standard Recovery Journey
                  <ArrowDown className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="animate-scale-in delay-300">
            <div className="relative rounded-2xl overflow-hidden shadow-hero">
              <Image
                src={heroImage}
                alt="Medical professional assisting with Achilles tendon recovery"
                className="w-full h-[500px] object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 opacity-10">
        <div className="w-96 h-96 bg-gradient-hero rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default Hero;