"use client";

import SubPageLayout from "@/app/layouts/SubPageLayout";
import { AlertCircle, Clock, Stethoscope, Home, Footprints, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function JustInjuredPage() {
  return (
    <SubPageLayout showHeader={true} showDisclaimer={true}
      title="Think You've Injured Your Achilles?"
      subtitle="Here's what to do next.">    

    <h2 className="text-3xl font-bold mb-6 text-foreground">Recognizing the Signs</h2>
    <Card className="shadow-card mb-12">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertCircle className="h-5 w-5 text-destructive" />
          Common Symptoms of Achilles Injury
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2" />
            <p className="text-muted-foreground"><strong className="text-foreground">Sudden sharp pain</strong> in the back of your ankle or calf</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2" />
            <p className="text-muted-foreground"><strong className="text-foreground">Pop or snap sound</strong> at the time of injury</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2" />
            <p className="text-muted-foreground"><strong className="text-foreground">Difficulty walking</strong> or standing on tiptoes</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2" />
            <p className="text-muted-foreground"><strong className="text-foreground">Swelling and bruising</strong> around the heel and ankle</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2" />
            <p className="text-muted-foreground"><strong className="text-foreground">Weakness</strong> when pushing off with your foot</p>
          </div>
        </div>
      </CardContent>
    </Card>

  {/* Immediate Next Steps */}
    <h2 className="text-3xl font-bold mb-6 text-foreground">Immediate Next Steps</h2>
    <Card className="shadow-card mb-12">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-accent" />
          First 48 Hours - RICE Protocol
        </CardTitle>
        <CardDescription>What to do right after the injury occurs</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-muted/50 rounded-lg">
            <h3 className="font-semibold text-lg mb-2 text-foreground">Rest</h3>
            <p className="text-sm text-muted-foreground">Avoid putting weight on the injured leg. Use crutches if necessary.</p>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg">
            <h3 className="font-semibold text-lg mb-2 text-foreground">Ice</h3>
            <p className="text-sm text-muted-foreground">Apply ice for 15-20 minutes every 2-3 hours to reduce swelling.</p>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg">
            <h3 className="font-semibold text-lg mb-2 text-foreground">Compression</h3>
            <p className="text-sm text-muted-foreground">Wrap the area with an elastic bandage to control swelling.</p>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg">
            <h3 className="font-semibold text-lg mb-2 text-foreground">Elevation</h3>
            <p className="text-sm text-muted-foreground">Keep your foot elevated above heart level when resting.</p>
          </div>
        </div>
        <Alert className="bg-accent/10 border-accent">
          <AlertCircle className="h-4 w-4 text-accent" />
          <AlertDescription className="ml-2 text-sm">
            <strong>Seek immediate medical attention</strong> if you heard a pop, can't walk, or have severe pain and swelling.
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>

  {/* What to Expect at Diagnosis */}
    <h2 className="text-3xl font-bold mb-6 text-foreground">What to Expect at Diagnosis</h2>
    <Card className="shadow-card mb-12">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Stethoscope className="h-5 w-5 text-secondary" />
          The Medical Evaluation Process
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          <div className="border-l-4 border-primary pl-4">
            <h3 className="font-semibold text-lg mb-1 text-foreground">Physical Examination</h3>
            <p className="text-sm text-muted-foreground">Your doctor will check for gaps in the tendon, test your range of motion, and perform the Thompson test (squeezing your calf to see if your foot moves).</p>
          </div>
          <div className="border-l-4 border-secondary pl-4">
            <h3 className="font-semibold text-lg mb-1 text-foreground">Imaging Tests</h3>
            <p className="text-sm text-muted-foreground">You may receive an ultrasound or MRI to determine the extent of the tear and rule out other injuries.</p>
          </div>
          <div className="border-l-4 border-accent pl-4">
            <h3 className="font-semibold text-lg mb-1 text-foreground">Diagnosis & Treatment Plan</h3>
            <p className="text-sm text-muted-foreground">Based on the severity (partial or complete rupture), your doctor will recommend either conservative treatment or surgery.</p>
          </div>
        </div>
      </CardContent>
    </Card>

  {/* Early Comfort Tips */}
    <h2 className="text-3xl font-bold mb-6 text-foreground">Early Comfort Tips</h2>
    <div className="grid md:grid-cols-2 gap-6">
      <Card className="shadow-card mb-12">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Home className="h-5 w-5 text-primary" />
            At Home Care
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>• Keep your leg elevated on pillows</p>
          <p>• Use ice packs regularly (avoid direct skin contact)</p>
          <p>• Take pain medication as prescribed</p>
          <p>• Avoid heat or massage in the first 72 hours</p>
          <p>• Sleep with your foot slightly elevated</p>
        </CardContent>
      </Card>

      <Card className="shadow-card mb-12">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Footprints className="h-5 w-5 text-secondary" />
            Mobility Tips
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>• Use crutches to avoid weight-bearing</p>
          <p>• Consider a knee scooter for easier mobility</p>
          <p>• Keep your boot or cast clean and dry</p>
          <p>• Follow your doctor's weight-bearing timeline</p>
          <p>• Arrange your home for easy access</p>
        </CardContent>
      </Card>
    </div>

  {/* What Happens After Diagnosis */}
    <h2 className="text-3xl font-bold mb-6 text-foreground">What Happens After Diagnosis</h2>
    <Card className="shadow-card mb-12">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-accent" />
          Your Recovery Journey
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="p-4 bg-gradient-card rounded-lg border">
            <h3 className="font-semibold text-lg mb-2 text-foreground">Week 0-2: Immobilization</h3>
            <p className="text-sm text-muted-foreground">You'll likely be placed in a boot or cast with your foot in a pointed position. Focus on rest and following RICE protocol.</p>
          </div>
          <div className="p-4 bg-gradient-card rounded-lg border">
            <h3 className="font-semibold text-lg mb-2 text-foreground">Week 2-6: Protected Weight-Bearing</h3>
            <p className="text-sm text-muted-foreground">Gradually begin putting weight on your foot as directed. You may start gentle range-of-motion exercises.</p>
          </div>
          <div className="p-4 bg-gradient-card rounded-lg border">
            <h3 className="font-semibold text-lg mb-2 text-foreground">Week 6-12: Physical Therapy</h3>
            <p className="text-sm text-muted-foreground">Begin strengthening exercises and proprioception training under guidance of a physical therapist.</p>
          </div>
          <div className="p-4 bg-gradient-card rounded-lg border">
            <h3 className="font-semibold text-lg mb-2 text-foreground">Month 3-6: Return to Activity</h3>
            <p className="text-sm text-muted-foreground">Gradually return to sports and activities with proper progression and clearance from your healthcare team.</p>
          </div>
        </div>
        <Alert className="bg-primary/10 border-primary">
          <AlertCircle className="h-4 w-4 text-primary" />
          <AlertDescription className="ml-2 text-sm">
            <strong>Remember:</strong> Every recovery is unique. Your timeline may vary based on injury severity, treatment method, and individual healing factors.
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
    </SubPageLayout>
  );
}