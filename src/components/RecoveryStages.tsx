"use client";

import { Check, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const RecoveryStages = () => {
  const stages = [
    {
      week: "Weeks 0-2",
      title: "Initial Protection",
      description: "Protect the tendon with boot and heel lift while beginning safe movement.",
      tasks: [
        "Aircast boot with 2 cm heel lift",
        "Weight Bearing As Tolerated (WBAT) with crutches as needed",
        "Elevation and swelling control",
        "Gentle non-weight-bearing/upper body activity"
      ],
      status: "completed" as const
    },
    {
      week: "Weeks 3-6",
      title: "Early Mobilization",
      description: "Begin gradual weight bearing, mobility, and light strengthening.",
      tasks: [
        "Continue Aircast boot with heel lift (wean as advised)",
        "WBAT with crutches as needed",
        "Light hip and knee strengthening",
        "Non-weight-bearing cardio (bike, pool without push-off)",
        "Swelling control and gentle mobility"
      ],
      status: "current" as const
    },
    {
      week: "Weeks 7-12",
      title: "Strengthening Phase",
      description: "Progress strength, flexibility, and proprioception under guidance.",
      tasks: [
        "Wean out of boot",
        "Gentle dorsiflexion stretching",
        "Progressive strengthening (bands, closed/open chain, functional)",
        "Proprioception and gait retraining",
        "Cardio: cycling, swimming, hydrotherapy"
      ],
      status: "upcoming" as const
    },
    {
      week: "Weeks 13-20",
      title: "Return to Activity",
      description: "Gradual return to sport and full functional recovery.",
      tasks: [
        "Transition to normal walking and jogging",
        "Advance ROM, strength, and balance",
        "Sport-specific drills and plyometrics",
        "Clearance for full activity"
      ],
      status: "upcoming" as const
    }
  ];


  return (
    <section id="recovery-journey" className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            The Standard Recovery Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow this evidence-based timeline for optimal healing. Every person&apos;s recovery is unique, so work closely with your healthcare team to adjust as needed.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stages.map((stage, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-card hover:scale-105 ${
                stage.status === 'current' 
                  ? 'ring-2 ring-primary shadow-section' 
                  : stage.status === 'completed'
                  ? 'bg-secondary/5 border-secondary/20'
                  : ''
              }`}
            >
              <CardContent className="p-6">
                {/* Stage indicator */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-muted-foreground">
                    {stage.week}
                  </span>
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                    stage.status === 'completed' 
                      ? 'bg-secondary text-white'
                      : stage.status === 'current'
                      ? 'bg-primary text-white animate-pulse'
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {stage.status === 'completed' ? (
                      <Check className="h-4 w-4" />
                    ) : stage.status === 'current' ? (
                      <Clock className="h-4 w-4" />
                    ) : (
                      <span className="text-sm font-bold">{index + 1}</span>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {stage.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {stage.description}
                </p>

                {/* Task checklist */}
                <ul className="space-y-2">
                  {stage.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-start text-sm">
                      <div className={`flex-shrink-0 w-4 h-4 rounded-full border-2 mt-0.5 mr-3 ${
                        stage.status === 'completed'
                          ? 'bg-secondary border-secondary'
                          : stage.status === 'current'
                          ? 'border-primary'
                          : 'border-muted-foreground/30'
                      }`}>
                        {stage.status === 'completed' && (
                          <Check className="h-3 w-3 text-white m-0.5" />
                        )}
                      </div>
                      <span className={stage.status === 'completed' ? 'text-muted-foreground' : ''}>
                        {task}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Progress connector */}
                {index < stages.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-muted-foreground/30" />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center justify-center p-1 bg-gradient-hero rounded-full">
            <div className="bg-card px-6 py-3 rounded-full">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Important:</strong> Always consult with your healthcare provider before advancing between stages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecoveryStages;