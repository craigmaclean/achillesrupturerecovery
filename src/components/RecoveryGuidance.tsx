import { FileText, FlaskConical, Stethoscope, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const RecoveryGuidance = () => {
  const points = [
    "Latest research summarized in plain language",
    "Stage-by-stage recovery timelines and milestones",
    "Non-surgical and surgical rehab protocols",
    "Practical tips for pain, swelling, and mobility",
  ];

  const quickLinks = [
    {
      href: "/articles/achilles-tendon-recovery-guide",
      title: "Complete Achilles Recovery Guide",
      icon: <FileText className="h-5 w-5" />,
    },
    {
      href: "/guides/non-surgical-rehab",
      title: "Non-Surgical Rehab Timeline",
      icon: <Stethoscope className="h-5 w-5" />,
    },
    {
      href: "/articles/latest-research",
      title: "What the Latest Research Says",
      icon: <FlaskConical className="h-5 w-5" />,
    },
  ];

  return (
    <section id="guidance" className="py-20 bg-card">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Evidence-Based Guidance for Achilles Tendon Recovery
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover the latest research, proven recovery methods, and helpful advice to
            support your healing journey—no sign-up required.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: bullets */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">
              What you’ll find here
            </h3>
            <ul className="space-y-4">
              {points.map((txt, i) => (
                <li key={i} className="flex items-start">
                  <span className="mt-1 mr-3 inline-flex h-5 w-5 rounded-full bg-secondary/20 border border-secondary/30" />
                  <span className="text-muted-foreground">{txt}</span>
                </li>
              ))}
            </ul>

            {/* Light reassurance box */}
            <div className="mt-8 p-4 bg-gradient-subtle rounded-lg border border-border">
              <p className="text-sm text-muted-foreground">
                Educational content only. Always follow your clinician’s advice for your
                specific situation.
              </p>
            </div>
          </div>

          {/* Right: quick links card */}
          <div className="bg-gradient-card border border-border rounded-2xl p-8 shadow-card">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Start with these resources
              </h3>
              <p className="text-sm text-muted-foreground">
                Curated articles to help you make confident, informed decisions.
              </p>
            </div>

            <div className="space-y-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center justify-between rounded-xl border border-border bg-card/50 px-4 py-3 hover:bg-card transition"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                      {link.icon}
                    </div>
                    <span className="text-foreground">{link.title}</span>
                  </div>
                  <ArrowRight className="h-4 w-4 opacity-60 group-hover:translate-x-0.5 group-hover:opacity-100 transition" />
                </Link>
              ))}
            </div>

            {/* Optional CTA button to your articles index */}
            <div className="mt-6">
              <Button asChild className="w-full h-12 bg-gradient-hero hover:opacity-90">
                <Link href="/articles">Browse All Articles</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecoveryGuidance;