import Header from '@/component/layout/Header';
import Footer from '@/component/layout/Footer';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  ArrowRight, ShieldCheck, FileText, Lock, Server, Cloud, Activity,
  Key, Clock, Smartphone, Code, ShieldAlert, Database, HelpCircle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'HIPAA Compliance | Fornex Health',
  description: "Fornex Health is fully HIPAA-compliant. We sign BAAs, handle PHI securely, and build every healthcare platform on HIPAA-eligible infrastructure. Learn how we protect your patients' data.",
};

export default function HipaaCompliance() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#1a2b3c] flex flex-col">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#60C6B1] rounded-full blur-[150px] opacity-30 pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-20 pointer-events-none"></div>

        <Header />

        <div className="max-w-[1400px] mx-auto px-4 w-full pt-20 pb-24 text-center relative z-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#60C6B1] font-medium text-sm mb-6 backdrop-blur-sm">
            Compliance & Security
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 max-w-4xl mx-auto">
            HIPAA Compliance at <span className="text-[#60C6B1]">Fornex Health</span>
          </h1>
          <p className="text-white/70 text-base font-regular leading-relaxed max-w-3xl mx-auto mb-8">
            Every system we build. Every integration we deploy. Every line of code we write - designed with HIPAA compliance at its core, not as an afterthought.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-3 rounded-full border border-[#60C6B1] text-[#fff] bg-[#60C6B1] hover:bg-[#fff] hover:text-[#60C6B1] cursor-pointer transition flex items-center gap-2 font-medium"
          >
            Get Our Compliance Overview
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-15 relative">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="bg-white rounded-3xl p-4 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100">

            {/* Section 1: Opening Statement */}
            <div className="mb-10 text-center">
              <h2 className="text-[#60C6B1] font-semibold tracking-wider uppercase mb-3 text-sm">Our Commitment</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-[#1a2b3c] mb-6">We Don't Just Build Healthcare Software. We Build It the Right Way.</h3>
              <p className="text-gray-500 text-base font-regular leading-relaxed mb-4 mx-auto">
                HIPAA is not a checkbox for us. It is the foundation of how we operate.
              </p>
              <p className="text-gray-500 text-base font-regular leading-relaxed mb-4 mx-auto">
                Fornex Health is a SOC 2 Type II certified healthcare technology company. We work exclusively with healthcare organizations - hospitals, clinics, telehealth providers, healthtech startups - and every engagement we take on begins and ends with one non-negotiable requirement: your patients' data is protected.
              </p>
              <p className="text-gray-500 text-base font-regular leading-relaxed mb-4 mx-auto">
                From the architecture decisions we make on day one, to the infrastructure we deploy, to the Business Associate Agreements we sign before a single line of code is written - compliance is built in, not bolted on.
              </p>
            </div>

            {/* Section 2: What We Sign - BAA */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 mb-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#60C6B1] rounded-full blur-[100px] opacity-10 -mr-32 -mt-32"></div>
              <h2 className="text-[#60C6B1] font-semibold tracking-wider uppercase mb-3 text-sm relative z-10">Business Associate Agreements</h2>
              <h3 className="text-3xl font-bold text-[#1a2b3c] mb-6 relative z-10">We Sign a BAA. Every Time. Before Work Begins.</h3>

              <div className="prose prose-lg max-w-none prose-slate relative z-10">
                <p className="text-gray-500 text-base font-regular leading-relaxed mb-6">
                  Under HIPAA, any vendor that handles Protected Health Information (PHI) on behalf of a covered entity is classified as a Business Associate. That means a signed Business Associate Agreement (BAA) is legally required before any PHI-related work begins.
                </p>
                <p className="text-gray-500 text-base font-regular leading-relaxed">
                  At Fornex Health, we sign a BAA with every healthcare client - no exceptions. The agreement clearly defines:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 mt-4 mb-6">
                  <li>How PHI will be used and protected throughout the engagement</li>
                  <li>The security obligations of both parties</li>
                  <li>Breach notification procedures and timelines</li>
                  <li>Data handling, retention, and destruction protocols</li>
                  <li>Subcontractor compliance requirements</li>
                </ul>
                <p className="text-slate-600 font-medium bg-rose-50 text-rose-800 p-4 rounded-xl border border-rose-100">
                  If a technology vendor is unwilling or hesitant to sign a BAA, that is a serious red flag. We are never hesitant.
                </p>
              </div>

              <div className="mt-5 relative z-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center text-[#60C6B1] font-medium hover:text-[#4eb39d] transition-colors"
                >
                  Ready to get started? Request our BAA <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Section 3: Compliance Certifications */}
            <div className="mb-10">
              <div className="text-center mb-10">
                <h2 className="text-[#60C6B1] font-semibold tracking-wider uppercase mb-3 text-sm">Certifications & Standards</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-[#1a2b3c] mb-4">Independently Verified. Continuously Maintained.</h3>
                <p className="text-gray-500 text-base font-regular leading-relaxed mb-6 max-w-4xl mx-auto">
                  Our compliance posture is not self-reported. It is independently audited, certified, and maintained across every layer of our operations.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <ShieldCheck className="w-8 h-8 text-[#60C6B1]" />,
                    title: "HIPAA Certified",
                    subtitle: "Health Insurance Portability and Accountability Act",
                    desc: "We adhere to all applicable HIPAA rules - the Privacy Rule, the Security Rule, and the Breach Notification Rule. Our internal policies, staff training, and technical safeguards are aligned to HIPAA standards and reviewed regularly."
                  },
                  {
                    icon: <Lock className="w-8 h-8 text-[#60C6B1]" />,
                    title: "SOC 2 Type II Certified",
                    subtitle: "System and Organization Controls - Independently Audited",
                    desc: "SOC 2 Type II is one of the most rigorous independent security audits available. Unlike a one-time snapshot, Type II certification validates that our security controls have been operating effectively over an extended period. This means you are not just trusting our word - you are trusting the findings of an independent third-party auditor."
                  },
                  {
                    icon: <FileText className="w-8 h-8 text-[#60C6B1]" />,
                    title: "PHI Secure",
                    subtitle: "Protected Health Information - Handled Per Federal Standards",
                    desc: "All Protected Health Information processed, stored, or transmitted through our systems is handled in strict accordance with federal PHI security standards. Access controls, encryption, and audit logging are applied at every level."
                  },
                  {
                    icon: <Server className="w-8 h-8 text-[#60C6B1]" />,
                    title: "AWS HIPAA-Eligible Architecture",
                    subtitle: "Amazon Web Services - HIPAA-Eligible Cloud Infrastructure",
                    desc: "Our cloud infrastructure runs on AWS HIPAA-eligible services. We sign an AWS Business Associate Addendum and architect every healthcare deployment within AWS's HIPAA-eligible service boundaries - including EC2, RDS, S3, Lambda, and CloudWatch for audit logging."
                  },
                  {
                    icon: <Cloud className="w-8 h-8 text-[#60C6B1]" />,
                    title: "Google Cloud Healthcare API",
                    subtitle: "HIPAA-Eligible Google Cloud Services",
                    desc: "Where applicable, we deploy on Google Cloud's HIPAA-eligible services, including the Google Cloud Healthcare API, which is purpose-built for storing, processing, and accessing healthcare data in a compliant manner."
                  },
                  {
                    icon: <Activity className="w-8 h-8 text-[#60C6B1]" />,
                    title: "FDA Software Guidelines",
                    subtitle: "Applicable Medical Device Software Compliance",
                    desc: "For solutions that fall under FDA oversight as Software as a Medical Device (SaMD), we apply the applicable FDA guidelines throughout the development lifecycle - including design controls, risk management, and validation protocols."
                  }
                ].map((cert, index) => (
                  <div key={index} className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-[#60C6B1]/50 transition-colors">
                    <div className="bg-[#60C6B1]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                      {cert.icon}
                    </div>
                    <h4 className="text-xl font-bold text-[#1a2b3c] mb-1">{cert.title}</h4>
                    <p className="text-base text-[#60C6B1] font-medium mb-4">{cert.subtitle}</p>
                    <p className="text-gray-500 text-base font-regular leading-relaxed">{cert.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 4: Technical Safeguards */}
            <div className="bg-[#1a2b3c] rounded-3xl p-8 md:p-10 mb-10 relative overflow-hidden text-white">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#60C6B1] rounded-full blur-[150px] opacity-10 -mr-48 -mt-48"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-10 -ml-48 -mb-48"></div>

              <div className="relative z-10 mb-10 text-center">
                <h2 className="text-[#60C6B1] font-semibold tracking-wider uppercase mb-3 text-sm">Technical Safeguards</h2>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">How We Protect PHI at Every Layer</h3>
                <p className="text-slate-300 text-base font-regular leading-relaxed mb-6 max-w-4xl mx-auto">
                  HIPAA's Security Rule requires covered entities and business associates to implement technical safeguards to protect electronic PHI (ePHI). Here is how we do it.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-x-8 gap-y-10 relative z-10">
                {[
                  { title: "Encryption", icon: <Lock className="w-6 h-6" />, desc: "All ePHI is encrypted in transit using TLS 1.2 or higher and at rest using AES-256 encryption. This applies to databases, file storage, API communications, and backup systems." },
                  { title: "Access Controls", icon: <Key className="w-6 h-6" />, desc: "Role-based access control (RBAC) ensures that only authorized personnel can access PHI - and only to the extent necessary for their function. Least-privilege principles are enforced across all systems." },
                  { title: "Audit Logging", icon: <FileText className="w-6 h-6" />, desc: "Every access, modification, and transmission of PHI is logged with timestamps, user identifiers, and action types. Audit logs are tamper-resistant and retained per HIPAA requirements to support breach investigation and compliance audits." },
                  { title: "Automatic Session Timeouts", icon: <Clock className="w-6 h-6" />, desc: "All systems handling PHI implement automatic session timeouts to prevent unauthorized access from unattended workstations or devices." },
                  { title: "Multi-Factor Authentication (MFA)", icon: <Smartphone className="w-6 h-6" />, desc: "MFA is enforced for all administrative access to systems that process or store PHI." },
                  { title: "Secure API Architecture", icon: <Code className="w-6 h-6" />, desc: "All integrations with EHR systems (Epic, Cerner, Athenahealth, eClinicalWorks, and others) are built using FHIR R4 and HL7 standards over secure, authenticated API connections. No PHI is transmitted over unsecured channels." },
                  { title: "Vulnerability Management", icon: <ShieldAlert className="w-6 h-6" />, desc: "Our systems undergo regular vulnerability scanning and penetration testing. Critical vulnerabilities are remediated within defined SLAs. Security patches are applied promptly across all environments." },
                  { title: "Data Backup & Disaster Recovery", icon: <Database className="w-6 h-6" />, desc: "PHI is backed up regularly and stored in encrypted, geographically redundant environments. Disaster recovery plans are tested periodically to ensure data availability and integrity." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-[#60C6B1]/20 p-2 rounded-lg text-[#60C6B1]">
                        {item.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-white">{item.title}</h4>
                      <p className="text-slate-300 text-base font-regular leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 5: Administrative Safeguards */}
            <div className="mb-10">
              <h2 className="text-[#60C6B1] font-semibold tracking-wider uppercase mb-3 text-sm text-center">Administrative Safeguards</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-[#1a2b3c] mb-8 text-center max-w-3xl mx-auto">Compliance Is an Organizational Discipline, Not Just a Technical One</h3>

              <div className="bg-white rounded-3xl p-8 border border-slate-200">
                <p className="text-gray-500 text-base font-regular leading-relaxed mb-6">
                  Technical controls alone do not make a company HIPAA-compliant. HIPAA requires robust administrative safeguards - the policies, procedures, and training that govern how people handle PHI.
                </p>

                <h4 className="text-xl font-bold text-[#1a2b3c] mb-6">At Fornex Health:</h4>
                <ul className="space-y-2">
                  {[
                    "All team members with access to PHI or PHI-handling systems complete HIPAA training before onboarding and annually thereafter",
                    "We maintain a designated HIPAA Privacy Officer and Security Officer responsible for overseeing compliance",
                    "Our internal HIPAA policies are documented, reviewed, and updated regularly",
                    "We conduct periodic risk assessments to identify and address potential vulnerabilities",
                    "Subcontractors and third-party service providers who may handle PHI are required to sign appropriate agreements and meet our security standards",
                    "We maintain a documented Incident Response Plan, including breach detection, containment, notification procedures, and post-incident review"
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-4">
                      <div className="flex-shrink-0 mt-1.5">
                        <div className="w-2 h-2 rounded-full bg-[#60C6B1]"></div>
                      </div>
                      <p className="text-gray-500 text-base font-regular leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Section 6: Breach Notification */}
            <div className="bg-rose-50 rounded-3xl p-8 mb-10 border border-rose-100">
              <h2 className="text-rose-500 font-semibold tracking-wider uppercase mb-3 text-sm">Breach Notification</h2>
              <h3 className="text-3xl font-bold text-[#1a2b3c] mb-4">If Something Goes Wrong, We Tell You. Fast.</h3>

              <p className="text-slate-700 text-base font-regular leading-relaxed mb-6">
                HIPAA's Breach Notification Rule requires covered entities and business associates to notify affected individuals, the Department of Health and Human Services (HHS), and in some cases the media, in the event of a breach of unsecured PHI.
              </p>

              <div className="bg-white rounded-2xl p-6 border border-slate-200">
                <h4 className="text-xl font-bold text-[#1a2b3c] mb-6">Our obligations as your Business Associate:</h4>
                <ul className="space-y-2">
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 mt-1"><ShieldAlert className="w-5 h-5 text-rose-500" /></div>
                    <p className="text-slate-600 text-base">We will notify you of a discovered breach involving your PHI <strong className="text-[#1a2b3c]">within 72 hours of discovery</strong> - often faster</p>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 mt-1"><ShieldAlert className="w-5 h-5 text-rose-500" /></div>
                    <p className="text-slate-600 text-base">Our notification will include the nature of the breach, the PHI involved, steps we have taken to contain it, and recommended actions for you to take</p>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 mt-1"><ShieldAlert className="w-5 h-5 text-rose-500" /></div>
                    <p className="text-slate-600 text-base">We maintain a documented breach response process tested through regular internal drills</p>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 mt-1"><ShieldAlert className="w-5 h-5 text-rose-500" /></div>
                    <p className="text-slate-600 text-base">We cooperate fully with any regulatory investigation or client-initiated audit following a breach</p>
                  </li>
                </ul>
              </div>

              <p className="text-slate-700 mt-6 font-medium italic">
                We take breach notification seriously because transparency is what allows the healthcare system to recover quickly and protect patients.
              </p>
            </div>

            {/* Section 7: Interoperability */}
            <div className="mb-10">
              <h2 className="text-[#60C6B1] font-semibold tracking-wider uppercase mb-3 text-sm text-center">Interoperability Standards</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-[#1a2b3c] mb-4 text-center">Built on the Standards Healthcare Runs On</h3>
              <p className="text-gray-500 text-base font-regular leading-relaxed mb-10 mx-auto max-w-6xl text-center">
                HIPAA compliance in 2026 cannot be separated from interoperability. CMS and ONC regulations now require healthcare organizations to exchange data using standardized APIs - and our platforms are built for exactly that.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "FHIR R4", desc: "We build all new integrations using HL7 FHIR R4 - the current gold standard for healthcare data exchange. FHIR R4 enables secure, structured sharing of patient data across EHR platforms, payer systems, and patient-facing applications." },
                  { title: "HL7 v2 & v3", desc: "For healthcare organizations still operating on legacy HL7 v2 or v3 messaging standards, we build compliant integrations that bridge existing systems without requiring a rip-and-replace." },
                  { title: "SMART on FHIR", desc: "For applications requiring delegated authorization - such as patient portals and third-party apps - we implement SMART on FHIR, which provides a secure OAuth 2.0-based authorization layer on top of FHIR APIs." },
                  { title: "CDA / C-CDA", desc: "We support Clinical Document Architecture (CDA) and Consolidated CDA (C-CDA) for structured clinical document exchange, including continuity of care documents, discharge summaries, and referral notes." },
                  { title: "ONC & CMS Compliance", desc: "Our EHR integration and data exchange work is aligned with ONC's information blocking rules and CMS interoperability mandates, including the upcoming FHIR Prior Auth API requirements effective January 1, 2027." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200">
                    <h4 className="text-xl font-bold text-[#1a2b3c] mb-3">{item.title}</h4>
                    <p className="text-gray-500 text-base font-regular leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 8: Who We Serve */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 mb-10">
              <h2 className="text-[#60C6B1] font-semibold tracking-wider uppercase mb-3 text-sm text-center">Who We Serve</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-[#1a2b3c] mb-6 text-center">Built for Every Type of Healthcare Organization</h3>
              <p className="text-gray-500 text-base font-regular leading-relaxed mx-auto max-w-4xl text-center">
                Our HIPAA compliance framework is designed to scale - from early-stage healthtech startups building their first MVP to enterprise health systems managing millions of patient records.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-10">
                {[
                  { title: "Hospitals & Large Health Systems", desc: "Enterprise EHR integrations, RCM platforms, and clinical workflow systems built on HIPAA-eligible cloud infrastructure" },
                  { title: "Private Clinics & Multi-Specialty Practices", desc: "Patient portals, billing systems, and scheduling tools with role-based access and PHI encryption" },
                  { title: "Telehealth Providers", desc: "Video consultation platforms, remote monitoring integrations, and HIPAA-compliant patient communication tools" },
                  { title: "Healthcare Startups", desc: "MVP platforms built compliance-first from day one, with investor-ready documentation and BAA support" },
                  { title: "Medical Billing Companies", desc: "Claims processing automation, denial management workflows, and RCM tools built on secure, audited infrastructure" },
                  { title: "Digital Health Platforms & SaaS Providers", desc: "API-first platforms designed for FHIR interoperability, PHI security, and scalable compliance as you grow" }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1">
                      <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center border border-slate-200">
                        <ShieldCheck className="w-5 h-5 text-[#60C6B1]" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#1a2b3c] mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-base font-regular leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 9: FAQ */}
            <div className="mb-10">
              <div className="text-center mb-12">
                <h2 className="text-[#60C6B1] font-semibold tracking-wider uppercase mb-3 text-sm">Common Compliance Questions</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-[#1a2b3c] mb-6">Frequently Asked Questions About Our HIPAA Practices</h3>
              </div>

              <div className="space-y-4">
                {[
                  { q: "Do you sign a Business Associate Agreement (BAA)?", a: "Yes - always, and always before any PHI-related work begins. Our BAA clearly defines the rights and obligations of both parties under HIPAA. We can provide a draft BAA for your legal team's review during our initial discovery conversation." },
                  { q: "Are you SOC 2 Type II certified?", a: "Yes. Fornex Health's parent company, Creative Buffer Consultancy Private Limited, holds SOC 2 Type II certification - independently audited by a third party. This certification validates that our security controls are not just documented but have been operating effectively over time." },
                  { q: "What cloud infrastructure do you use for healthcare projects?", a: "We build on AWS HIPAA-eligible infrastructure as our primary platform, with Google Cloud Healthcare API used where applicable. All deployments within these environments are governed by signed Business Associate Addendums (BAAs) with AWS and Google." },
                  { q: "How do you handle a data breach?", a: "We notify you within 72 hours of discovering any breach involving your PHI. Our incident response plan covers detection, containment, notification, remediation, and post-incident review. We cooperate fully with any regulatory investigation." },
                  { q: "Can you help us pass a HIPAA audit?", a: "Yes. We provide technical documentation, architecture diagrams, security control evidence, and audit trail exports that support your organization's HIPAA audit processes. Our team has experience supporting clients through OCR inquiries and third-party compliance audits." },
                  { q: "Do you work with healthcare startups that don't yet have a compliance team?", a: "Absolutely. We regularly help startups build HIPAA-compliant platforms from the ground up - including helping founders understand their compliance obligations, setting up the right infrastructure, and producing the technical documentation investors and enterprise clients expect to see." },
                  { q: "What happens to PHI when a project ends?", a: "Our BAA specifies PHI destruction and return procedures at project end. Data is securely destroyed using methods that meet HIPAA's media disposal requirements, and we provide written confirmation upon completion." }
                ].map((faq, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200">
                    <h4 className="text-lg font-bold text-[#1a2b3c] mb-2 flex gap-3">
                      <HelpCircle className="w-6 h-6 text-[#60C6B1] flex-shrink-0" />
                      {faq.q}
                    </h4>
                    <p className="text-gray-500 text-base font-regular leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 10: Closing CTA */}
            <div className="bg-gradient-to-br from-[#1a2b3c] to-[#2c4763] rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden mb-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#60C6B1] rounded-full blur-[100px] opacity-20 -mr-32 -mt-32"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Build Something Compliant?</h2>
                <p className="text-base text-slate-300 max-w-4xl mx-auto mb-10 leading-relaxed">
                  Every project starts with a conversation. Tell us what you are building and we will walk you through exactly how we approach compliance for your specific use case - no sales pitch, just clarity.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="https://calendly.com/"
                    className="inline-flex items-center justify-center px-5 py-3 rounded-full border border-[#60C6B1] text-[#fff] bg-[#60C6B1] hover:bg-[#fff] hover:text-[#60C6B1] cursor-pointer transition flex items-center gap-2 font-medium"
                  >
                    Book a Free Consultation
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-5 py-3 rounded-full border border-[#fff] text-[#fff] bg-transparent hover:bg-[#60C6B1] hover:text-[#fff] hover:border-[#60C6B1] cursor-pointer transition flex items-center gap-2 font-medium"
                  >
                    Contact Our Team
                  </Link>
                </div>
              </div>
            </div>

            {/* Footer Note */}
            <div className="text-center border-t border-slate-200 pt-6">
              <p className="text-base text-slate-500 leading-relaxed">
                This page describes Fornex Health's compliance practices and commitments. It does not constitute legal advice. Healthcare organizations should consult their own legal counsel regarding their specific HIPAA obligations. Last reviewed: May 2026.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

