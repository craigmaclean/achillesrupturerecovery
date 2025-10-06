import SubPageLayout from "@/app/layouts/SubPageLayout";

export default function DisclaimerPage() {
  return (
    <SubPageLayout
      showHeader={false}
      showDisclaimer={false}
      title="Website Disclaimer"
      subtitle=""
    >

        <div className="prose prose-gray max-w-none">
        
        <h1 className="mt-10 mb-0 scroll-mt-24 text-3xl font-bold tracking-tight text-foreground">
          Website Disclaimer
        </h1>
        
        <p className="text-muted-foreground mb-8">
          Last updated: October 5, 2025
        </p>

        <h2 className="mb-6 scroll-mt-24 text-3xl font-bold tracking-tight text-foreground">
          General Information
        </h2>
        <p>
          The information provided on <strong>AchillesRuptureRecovery.com</strong> (“the Site”)
          is for <strong>general informational and educational purposes only</strong>. All content
          reflects personal experience, research, and publicly available information related to
          Achilles tendon injuries and recovery.
        </p>

        <h2 className="mb-6 scroll-mt-24 text-3xl font-bold tracking-tight text-foreground">
          Not Professional Advice
        </h2>
        <p>
          The content on this Site is <strong>not intended to replace professional medical advice,
          diagnosis, or treatment</strong>. I am not a medical professional. Always seek the guidance
          of a qualified healthcare provider with any questions you may have regarding your health,
          recovery, or any medical condition.
        </p>

        <h2 className="mb-6 scroll-mt-24 text-3xl font-bold tracking-tight text-foreground">
          Personal Responsibility
        </h2>
        <p>
          You are encouraged to use your own judgment and consult professionals before acting on any
          information found here. By using this Site, you acknowledge that you are responsible for
          your own decisions and actions regarding your health and recovery.
        </p>

        <h2 className="mb-6 scroll-mt-24 text-3xl font-bold tracking-tight text-foreground">
          Accuracy of Information
        </h2>
        <p>
          While every effort is made to ensure accuracy and reliability,
          <strong> AchillesRuptureRecovery.com </strong> makes no guarantees that the information is
          complete, up-to-date, or free from errors. Recovery methods and medical understanding
          evolve over time.
        </p>

        <h2 className="mb-6 scroll-mt-24 text-3xl font-bold tracking-tight text-foreground">
          External Links and Products
        </h2>
        <p>
          This Site may include links to external websites, resources, or products, including affiliate
          links. These are provided for convenience and do not imply endorsement or guarantee. Always do
          your own due diligence before purchasing or using any product mentioned on this Site.
        </p>

        <h2 className="mb-6 scroll-mt-24 text-3xl font-bold tracking-tight text-foreground">
          Limitation of Liability
        </h2>
        <p>
          In no event shall <strong>AchillesRuptureRecovery.com</strong>, its owner, or contributors
          be held liable for any direct, indirect, incidental, or consequential damages resulting from
          the use of—or reliance on—information provided on the Site.
        </p>

        <h2 className="mb-6 scroll-mt-24 text-3xl font-bold tracking-tight text-foreground">
          No Guarantees
        </h2>
        <p>
          Results and recovery experiences vary widely from person to person. No guarantees are made
          regarding recovery outcomes, timelines, or effectiveness of any methods discussed.
        </p>

        <div className="mt-10 mb-10 rounded-lg bg-muted p-6 text-muted-foreground">
          <p>
            <strong>In short:</strong> This website is for educational purposes only and is not a
            substitute for professional medical advice. Always consult a qualified healthcare provider
            before making any decisions about your health or recovery.
          </p>
        </div>
      </div>     
    
    </SubPageLayout>
  );
}