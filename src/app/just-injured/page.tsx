// app/(site)/just-injured/page.tsx
import SubPageLayout from "@/app/layouts/SubPageLayout";
import {
  AlertCircle,
  Clock,
  Stethoscope,
  Home,
  Footprints,
  FileText,
  Activity,
  ChevronRight
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { cn } from "@/lib/utils"; // if you don't have cn, remove and inline classes
import RecoveryStages from "@/components/RecoveryStages";

export default function JustInjuredPage() {
  return (
    <SubPageLayout
      showHeader
      showDisclaimer
      title="Think You’ve Injured Your Achilles?"
      subtitle="Quick, clear steps to protect your tendon and get the right care."
    >
      {/* URGENT ACTION STRIP */}
      <div
        className={cn(
          "mb-10 overflow-hidden rounded-2xl border",
          "bg-gradient-to-r from-primary/10 via-primary/5 to-transparent",
          "border-primary/30"
        )}
      >
        <div className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-3">
            <Activity className="mt-0.5 h-6 w-6 text-primary" />
            <div>
              <h2 className="text-xl font-semibold text-foreground">
                If you suspect a rupture: get into <span className="underline decoration-primary/60 underline-offset-4">plantar flexion</span> now
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Keep your toes pointing downward (toes-down) and immobilize in a boot with heel wedges or a splint. Avoid walking flat-footed or stretching the ankle upward.
              </p>
            </div>
          </div>

          <div className="grid gap-2 sm:grid-cols-2">
            <div className="rounded-lg border border-primary/30 bg-background p-3 text-sm">
              <div className="font-medium text-foreground">Best immediate setup</div>
              <div className="mt-1 text-muted-foreground">
                Aircast-style boot + 2–3 heel wedges (toes-down)
              </div>
            </div>
            <div className="rounded-lg border border-primary/30 bg-background p-3 text-sm">
              <div className="font-medium text-foreground">If no boot available</div>
              <div className="mt-1 text-muted-foreground">
                Rest and splint with towel/cardboard in pointed-toe position
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-primary/20 bg-primary/5 px-6 py-3 text-xs text-muted-foreground">
          “Key step after suspected rupture is a plantar-flexion splint — toes pointing downward.” (orthopedic guidance)
        </div>
      </div>

      {/* 1) SYMPTOMS FIRST */}
      <SectionHeading>Recognize the Symptoms</SectionHeading>
      <Card className="mb-12 shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-destructive" />
            Common Signs of an Achilles Rupture
          </CardTitle>
          <CardDescription>Confirm what you’re feeling before you move.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          {[
            ["Sudden sharp pain", "in the back of the ankle or calf (often feels like being kicked)."],
            ["Pop or snap", "heard or felt at the time of injury."],
            ["Immediate weakness", "or inability to push off your foot."],
            ["Swelling and bruising", "around the heel and ankle."],
            ["Difficulty on tiptoes", "or walking with a normal push-off."]
          ].map(([title, desc]) => (
            <Bullet key={title} title={title} desc={desc} />
          ))}
        </CardContent>
      </Card>

      {/* 2) IMMEDIATE NEXT STEPS */}
      <SectionHeading>Immediate Next Steps</SectionHeading>
      <Card className="mb-12 shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-accent" />
            Protect the Tendon in the First 24–48 Hours
          </CardTitle>
          <CardDescription>Keep the tendon ends approximated and swelling controlled.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <MiniPanel heading="Rest" text="Avoid weight-bearing on the injured side; use crutches if available." />
            <MiniPanel heading="Ice" text="15–20 minutes every 2–3 hours. Wrap ice — no direct skin contact." />
            <MiniPanel heading="Compression" text="Elastic wrap or boot liner to limit swelling (not too tight)." />
            <MiniPanel heading="Elevation" text="Foot above heart level whenever resting." />
          </div>

          <Alert className="border-primary bg-primary/10">
            <AlertCircle className="h-4 w-4 text-primary" />
            <AlertDescription className="ml-2 text-sm">
              <strong>Critical:</strong> Keep the foot in <em>plantar flexion</em> (toes down) in a boot with wedges or a splint until you’re examined.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* 3) WHEN TO SEE A DOCTOR */}
      <SectionHeading>When to See a Doctor</SectionHeading>
      <Card className="mb-12 shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Stethoscope className="h-5 w-5 text-secondary" />
            Don’t Wait — Same-Day Assessment Is Best
          </CardTitle>
          <CardDescription>Urgent care or emergency department is appropriate.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-muted-foreground">
          <p>Seek care immediately if you:</p>
          <ul className="ml-4 list-disc space-y-1">
            <li>Felt/heard a pop and now have weakness or severe pain.</li>
            <li>Cannot push off or stand on your toes.</li>
            <li>Have swelling/bruising and a “floppy” ankle sensation.</li>
          </ul>
          <div className="rounded-lg border border-secondary/30 bg-secondary/10 p-3 text-xs text-foreground">
            Tell the clinician you suspect an <strong>Achilles tendon rupture</strong> and that the foot should remain <strong>toes-down</strong> until assessed.
          </div>
        </CardContent>
      </Card>

      {/* 4) CAUSES & RISK FACTORS */}
      <SectionHeading>Causes & Risk Factors</SectionHeading>
      <Card className="mb-12 shadow-card">
        <CardHeader>
          <CardTitle>Why It Happens</CardTitle>
          <CardDescription>Usually a sudden overstretch during explosive movement.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 text-sm md:grid-cols-2">
          <ListCard
            title="Common Triggers"
            items={[
              "Jumping, sprinting, sudden stop/start sports (basketball, soccer, tennis).",
              "Unexpected push-off (e.g., stepping off a curb).",
              "Returning to intense activity after inactivity."
            ]}
          />
          <ListCard
            title="Risk Factors"
            items={[
              "Men ages 30–50; “weekend warrior” patterns.",
              "Tight/weak calves or prior tendon issues.",
              "Fluoroquinolone antibiotics or corticosteroid injections.",
              "Obesity and chronic overuse."
            ]}
          />
        </CardContent>
      </Card>

      {/* 5) WHAT TO EXPECT AT DIAGNOSIS */}
      <SectionHeading>What to Expect at Diagnosis</SectionHeading>
      <Card className="mb-12 shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Stethoscope className="h-5 w-5 text-secondary" />
            The Evaluation Process
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm">
          <BorderStrip
            colorClass="border-primary"
            title="Physical Examination"
            text="Palpation for tendon gap, range-of-motion check, and the Thompson test (calf squeeze to see if the foot plantarflexes)."
          />
          <BorderStrip
            colorClass="border-secondary"
            title="Imaging (if needed)"
            text="Point-of-care ultrasound or MRI can help confirm partial vs. complete rupture and guide treatment."
          />
          <BorderStrip
            colorClass="border-accent"
            title="Treatment Planning"
            text="Based on severity and activity level, you’ll discuss non-surgical boot protocol vs. surgical repair. Both paths require rehabilitation."
          />
        </CardContent>
      </Card>

      {/* 6) EARLY COMFORT TIPS */}
      <SectionHeading>Early Comfort Tips</SectionHeading>
      <div className="mb-12 grid gap-6 md:grid-cols-2">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Home className="h-5 w-5 text-primary" />
              At-Home Care
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>• Elevate the leg on pillows above heart level.</p>
            <p>• Ice regularly (wrapped) to control swelling.</p>
            <p>• Take pain meds as prescribed.</p>
            <p>• Avoid heat or massage for the first 72 hours.</p>
            <p>• Sleep with the foot slightly elevated.</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Footprints className="h-5 w-5 text-secondary" />
              Mobility Tips
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>• Use crutches; avoid weight-bearing unless instructed.</p>
            <p>• Consider a knee scooter for easier mobility.</p>
            <p>• Keep the boot/cast clean and dry.</p>
            <p>• Follow your clinician’s weight-bearing timeline.</p>
            <p>• Clear pathways at home for safe movement.</p>
          </CardContent>
        </Card>
      </div>

      {/* 7) WHAT HAPPENS AFTER */}
      <SectionHeading>What Happens After Diagnosis</SectionHeading>
      
        <RecoveryStages />
      

      {/* CTA */}
      <div className="mb-2 flex flex-col items-start justify-between gap-3 rounded-2xl border bg-muted/30 p-5 md:flex-row md:items-center">
        <div>
          <div className="text-sm font-medium text-foreground">Next step</div>
          <div className="text-muted-foreground">
            Find a local sports medicine or orthopedic clinic and keep the foot toes-down until seen.
          </div>
        </div>
        <a
          href="/providers"
          className="group inline-flex items-center gap-2 rounded-xl border border-primary bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
        >
          Find a Clinic
          <ChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </a>
      </div>
    </SubPageLayout>
  );
}

/* ---------- Small presentational helpers ---------- */

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 scroll-mt-24 text-3xl font-bold tracking-tight text-foreground">
      {children}
    </h2>
  );
}

function Bullet({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-2 block h-2 w-2 rounded-full bg-primary" />
      <p className="text-muted-foreground">
        <strong className="text-foreground">{title}</strong> {desc}
      </p>
    </div>
  );
}

function MiniPanel({ heading, text }: { heading: string; text: string }) {
  return (
    <div className="rounded-lg border bg-muted/50 p-4">
      <h3 className="mb-1 text-lg font-semibold text-foreground">{heading}</h3>
      <p className="text-sm text-muted-foreground">{text}</p>
    </div>
  );
}

function BorderStrip({
  colorClass,
  title,
  text
}: {
  colorClass: string;
  title: string;
  text: string;
}) {
  return (
    <div className={cn("border-l-4 pl-4", colorClass)}>
      <h3 className="mb-1 text-lg font-semibold text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground">{text}</p>
    </div>
  );
}

function ListCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-xl border bg-card p-4">
      <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
      <ul className="ml-4 list-disc space-y-1 text-muted-foreground">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}

function TimelineItem({
  label,
  title,
  text
}: {
  label: string;
  title: string;
  text: string;
}) {
  return (
    <div className="grid gap-2 rounded-xl border bg-background p-4 md:grid-cols-[110px_1fr]">
      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
      <div>
        <div className="text-base font-semibold text-foreground">{title}</div>
        <div className="text-sm text-muted-foreground">{text}</div>
      </div>
    </div>
  );
}
