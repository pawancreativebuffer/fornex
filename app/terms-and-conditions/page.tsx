'use client';

import Header from '@/component/layout/Header';
import Footer from '@/component/layout/Footer';

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* Header Section */}
      <section className="relative overflow-hidden bg-[#1a2b3c] flex flex-col">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#60C6B1] rounded-full blur-[150px] opacity-30 pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-20 pointer-events-none"></div>

        <Header />

        <div className="max-w-[1400px] mx-auto px-4 w-full py-10 lg:py-15 text-center mb-5">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.1]">
            Terms & <span className="text-[#60C6B1]">Conditions</span>
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-15 relative z-20">
        <div className="max-w-[1400px] mx-auto px-4">

          <div className="bg-white rounded-3xl p-4 md:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100">
            <div className="prose prose-lg max-w-none prose-slate prose-headings:text-[#1a2b3c] prose-headings:font-bold prose-p:text-gray-500 prose-p:leading-relaxed ">
              <p className="text-[20px] font-medium text-[#1a2b3c] mb-6">Please read these terms and conditions carefully before using Our Service.</p>
              <h2 className="text-2xl font-bold mb-4 mt-0 text-[#1a2b3c]">Interpretation and Definitions</h2>
              <h3 className="text-xl font-semibold mb-2 text-[#1a2b3c]">Interpretation</h3>
              <p>The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
              <h3 className="text-xl font-semibold mb-2 text-[#1a2b3c]">Definitions</h3>
              <p>For the purposes of these Terms and Conditions:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</li>
                <li><strong>Country</strong> refers to: Punjab, India</li>
                <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in these Terms and Conditions) refers to Creativebuffer, C-127, 4th Floor, Phase-8, Industrial Ar.</li>
                <li><strong>Device</strong> means any device that can access the Service such as a computer, a cell phone or a digital tablet.</li>
                <li><strong>Service</strong> refers to the Website.</li>
                <li><strong>Terms and Conditions</strong> (also referred to as "Terms") means these Terms and Conditions, including any documents expressly incorporated by reference, which govern Your access to and use of the Service and form the entire agreement between You and the Company regarding the Service.</li>
                <li><strong>Third-Party Social Media Service</strong> means any services or content (including data, information, products or services) provided by a third party that is displayed, included, made available, or linked to through the Service.</li>
                <li><strong>Website</strong> refers to FornexHealth, accessible from https://www.fornexhealth.com/</li>
                <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
              </ul>
              <h2 className="text-2xl font-bold mb-4 mt-0 text-[#1a2b3c]">Acknowledgment</h2>
              <p>These are the Terms and Conditions governing the use of this Service and the agreement between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.</p>
              <p>Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.</p>
              <p>By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.</p>
              <p>You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.</p>
              <p>Your access to and use of the Service is also subject to Our Privacy Policy, which describes how We collect, use, and disclose personal information. Please read Our Privacy Policy carefully before using Our Service.</p>
              <h2 className="text-2xl font-bold mb-4 mt-0 text-[#1a2b3c]">Links to Other Websites</h2>
              <p>Our Service may contain links to third‑party websites or services that are not owned or controlled by the Company.</p>
              <p>The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third‑party websites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by, or in connection with, the use of or reliance on any such third‑party sites.</p>

              <p className="mb-6">
                Here is the uncomfortable truth: 43% of health systems are already piloting agentic AI. Only 3% have deployed it in live workflows. That gap is not a coincidence. It is the result of CTOs moving too fast into pilots without first answering some genuinely hard questions.
              </p>

              <p className="mb-10">
                This is not an argument against moving. Agentic AI is real. The use cases are real. The pressure is real. But the hospitals that come out ahead will be the ones that pilot with clarity, not the ones that pilot fastest.
              </p>

              <div className="bg-[#60C6B1]/5 border-l-4 border-[#60C6B1] p-8 rounded-r-2xl mb-10">
                <h2 className="text-2xl font-bold mb-4 mt-0 text-[#1a2b3c]">What "Agentic AI" Actually Means (And Why the Definition Matters)</h2>
                <p className="mb-4">
                  There is a lot of loose language around this term right now. Vendors are slapping "agentic" onto anything that runs more than one step automatically.
                </p>
                <p className="mb-4">
                  Here is a workable definition. Agentic AI refers to systems that can plan, reason across multiple steps, take actions across different platforms, then adapt when things go sideways without a human approving every move. The difference from traditional automation is that it handles exceptions, not just predictable flows.
                </p>
                <p className="mb-4">
                  A robotic process automation tool follows a script. An agentic system reads the EHR, determines whether prior authorization is needed, pulls the clinical documentation, populates the payer-specific form, submits it, monitors the status, then alerts someone if the payer asks for more information. That entire workflow runs without a coordinator touching it.
                </p>
                <p className="mb-0">
                  That is also what makes it genuinely different from the AI tools most hospitals already have. Ambient scribes, predictive analytics, clinical decision support are all valuable. They assist. Agentic AI executes.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6">Where It Actually Works Right Now</h2>
              <p className="mb-6">
                The use cases getting real traction in 2026 are almost entirely administrative. Prior authorization is the most talked-about. Revenue cycle operations is where the clearest ROI is showing up. Appointment scheduling, discharge coordination, patient portal updates are all areas where agentic systems are replacing hours of manual work.
              </p>
              <p className="mb-6">
                One health system handling 3.2 million patient interactions per year is saving one minute per call using an agentic system for patient identity verification. That sounds small. It translates to 630 hours of labor per week shifted away from verification toward actual patient assistance.
              </p>
              <p className="mb-6">
                The clinical side is further behind. Not because the technology cannot do it. It can, in controlled settings. The problem is governance. Before you put an agentic system anywhere near a clinical decision that affects a patient, you need a framework for how it gets authorized, how its actions get audited, how it gets shut down if something goes wrong. Most hospitals do not have that framework yet.
              </p>
              <p className="mb-10">
                If a vendor is trying to sell you a clinical agentic deployment before you have solved the governance question, slow down.
              </p>

              <div className="relative my-10 p-10 bg-[#1a2b3c] rounded-3xl overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#60C6B1] rounded-full blur-[100px] opacity-20 -mr-32 -mt-32"></div>
                <h3 className="text-3xl font-bold mb-8 relative z-10 text-[#60C6B1]">The Three Questions You Need to Answer Before Your First Pilot</h3>

                <div className="space-y-8 relative z-10">
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-white">1. What does your data infrastructure actually look like?</h4>
                    <p className="text-white/70">
                      Agentic AI depends on clean, accessible, interoperable data. If your EHR, your payer portals, your scheduling systems, your patient engagement tools are all siloed, an agentic system cannot effectively orchestrate across them. You end up with an expensive automation that runs one workflow in one system.
                    </p>
                    <p className="text-white/70 mt-2">
                      Before you commit to a pilot, map out where your data actually lives. Which systems talk to each other right now via FHIR APIs? Which ones require manual extraction? Which vendor contracts give you API access at all? This work is boring but it determines everything.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-2 text-white">2. How will you authorize, monitor, then shut down AI agents?</h4>
                    <p className="text-white/70">
                      This is the question that separates hospitals that are ready from hospitals that think they are ready.
                    </p>
                    <p className="text-white/70 mt-2">
                      Every AI agent that touches protected health information, writes in the chart, initiates a transaction is a new compliance surface. Leading healthcare CIOs are now requiring vendors to answer exactly how their agents are identified, what permissions they operate under, how their actions are logged, then how they get disabled in real time if something goes wrong. If your vendor cannot give you a crisp answer to all four of those questions, that is a red flag. Not a reason to wait for the next version.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-2 text-white">3. Who owns the outcomes when the agent makes a mistake?</h4>
                    <p className="text-white/70">
                      This one makes people uncomfortable. It should. An agentic system that submits a prior auth with incorrect clinical data, schedules a procedure with the wrong parameters, sends a patient the wrong follow-up instructions are not hypothetical failure modes. They are the failure modes you need to plan for before anything goes live.
                    </p>
                    <p className="text-white/70 mt-2">
                      Your pilot contract should specify exactly what the accountability structure looks like when the agent errs. Your clinical and legal teams need to be in that conversation before you sign anything.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6">What a Good Pilot Actually Looks Like</h2>
              <p className="mb-6">
                Start with one workflow. Not three. One.
              </p>
              <p className="mb-6">
                Pick something where the inputs are structured, the outputs are verifiable, the stakes are meaningful but not catastrophic if something goes wrong. Prior authorization processing in a specific service line is a good example. Appointment scheduling for a specific department is another good starting point.
              </p>
              <p className="mb-6">
                Define success before you start. Not "the system ran." Specific numbers: time saved per transaction, error rate compared to manual processing, volume handled without human escalation. If you cannot define success in advance, you cannot evaluate whether the pilot worked.
              </p>
              <p className="mb-10">
                Plan a review at 60 days with the same rigor you would apply to any clinical quality initiative. What worked. What failed. What the failure mode was when it failed. What governance gaps the pilot revealed. Then decide whether to expand.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-[#60C6B1]">The Honest Reality</h2>
              <p className="mb-6">
                Most hospital agentic AI pilots in 2026 will not make it to production. Not because the technology does not work. It does, in the right conditions. They will stall because the data infrastructure was not ready, the governance framework was not in place, the vendor overpromised what the first version could handle.
              </p>
              <p>
                That does not mean you should wait. It means you should go in with clear eyes. The hospitals building the right foundation right now, clean data pipelines, FHIR-enabled integrations, governance frameworks for AI agents, are the ones that will actually scale these systems in 2027.
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
