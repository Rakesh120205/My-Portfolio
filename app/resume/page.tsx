import Link from "next/link";
import type { Metadata } from "next";
import { FiArrowLeft, FiExternalLink } from "react-icons/fi";

import introData from "@/data/intro.json";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of Rakesh Patnam: Python developer with 1.9 years of experience in Django, Flask, SQL and Linux. Work experience, skills, projects, certifications and education.",
  alternates: { canonical: `${siteUrl}/resume` },
};

/* The page mirrors resume.tex line for line: same sections, same wording. */

const SERIF = '"Latin Modern Roman", "CMU Serif", "Computer Modern", Georgia, "Times New Roman", serif';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-4">
      <h2 className="mb-1.5 border-b border-ink pb-0.5 text-[1.2rem] font-bold leading-tight">{title}</h2>
      {children}
    </section>
  );
}

function Heading({ title, right, sub, subRight }: { title: string; right: string; sub: string; subRight: string }) {
  return (
    <div className="break-inside-avoid">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <span className="font-bold">{title}</span>
        <span>{right}</span>
      </div>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 italic">
        <span>{sub}</span>
        <span>{subRight}</span>
      </div>
    </div>
  );
}

function Items({ children }: { children: React.ReactNode }) {
  return <ul className="mb-2 mt-1 list-disc space-y-1 pl-5 marker:text-ink">{children}</ul>;
}

function Tech({ children }: { children: React.ReactNode }) {
  return <p className="italic">{children}</p>;
}

const link = "underline decoration-1 underline-offset-2";

export default function Resume() {
  const { socialLinks } = introData;

  return (
    <main id="main">
      <div className="mx-auto max-w-[56rem] px-4 pb-10">
        {/* Toolbar: screen only */}
        <div className="flex flex-wrap items-center gap-2 py-5 print:hidden">
          <Link
            href="/"
            className="group mr-auto inline-flex items-center gap-1.5 text-[0.84rem] text-ink-soft transition-colors hover:text-ink"
          >
            <FiArrowLeft
              className="transition-transform duration-300 ease-silk group-hover:-translate-x-0.5"
              aria-hidden="true"
            />
            <span className="link-line">Back home</span>
          </Link>
          <a
            href={socialLinks.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-line/15 bg-card px-3.5 py-2 text-[0.85rem] text-ink transition-colors hover:border-line/30 active:scale-[0.97]"
          >
            <FiExternalLink aria-hidden="true" />
            Original PDF
          </a>
        </div>

        {/* The sheet: serif résumé layout that follows the light/dark theme */}
        <article
          className="rounded-sm border border-dotted border-line/30 bg-paper px-6 py-8 text-[0.92rem] leading-[1.45] text-ink sm:px-12 sm:py-10"
          style={{ fontFamily: SERIF }}
        >
          <header className="text-center">
            <h1 className="text-[1.9rem] font-bold leading-tight sm:text-[2.2rem]">Rakesh Patnam</h1>
            <p className="mt-1 text-[0.82rem]">
              Python Developer | SQL | Linux | AI-Assisted Development
            </p>
            <p className="mt-1 text-[0.82rem]">
              Hyderabad, Telangana
              {" | "}
              <a href="tel:+919392695330" className={link}>+91 93926 95330</a>
              {" | "}
              <a href="mailto:patnamrakesh406@gmail.com" className={link}>patnamrakesh406@gmail.com</a>
              {" | "}
              <a href={socialLinks.linkedinUrl} className={link}>LinkedIn</a>
              {" | "}
              <a href={socialLinks.githubUrl} className={link}>GitHub</a>
            </p>
          </header>

          <Section title="Professional Summary">
            <p>
              Python-focused software engineer (B.Tech, Computer Science) with 1.9 years of experience building tested Python, Django and Flask applications and automation, backed by SQL and Linux skills, and working directly with clients, in fast-paced Agile teams. Replaces manual processes with reliable, documented scripts. Uses AI-assisted tools responsibly to speed up coding and debugging. Built Python AI/ML projects (TensorFlow CNN, PyTorch NLP chatbot with REST API integration) and completed Generative AI training.
            </p>
          </Section>

          <Section title="Technical Skills">
            <p>
              <b>Programming:</b> Python (OOP, data structures &amp; algorithms, automation, scripting), Java, JavaScript, SQL, HTML
            </p>
            <p className="mt-0.5">
              <b>APIs &amp; Web:</b> Django, Django REST Framework, Flask, REST API development and integration (JSON)
            </p>
            <p className="mt-0.5">
              <b>AI/ML &amp; AI-Assisted Development:</b> TensorFlow, PyTorch, OpenCV, NLTK, Pandas, NumPy, CNN; AI copilots, prompt engineering, LLM fundamentals
            </p>
            <p className="mt-0.5">
              <b>Databases &amp; Cloud:</b> SQL Server Administration, MySQL, query writing and optimization, relational design, Oracle Fusion Cloud
            </p>
            <p className="mt-0.5">
              <b>Debugging &amp; Quality:</b> Unit testing, acceptance-criteria testing, code reviews, defect resolution, documentation
            </p>
            <p className="mt-0.5">
              <b>DevOps &amp; Linux:</b> Git, GitHub, production deployments, monitoring, incident management (ITIL); RHEL, Ubuntu, LVM, mount, fsck
            </p>
            <p className="mt-0.5">
              <b>Agile &amp; Collaboration:</b> Agile, Scrum, Kanban, SDLC, stakeholder communication, SLA adherence
            </p>
          </Section>

          <Section title="Professional Experience">
            <Heading
              title="Sr. Systems Engineer"
              right="Mar 2025 – Nov 2026"
              sub="Cognizant"
              subRight=""
            />
            <Tech>
              Python development, SQL and application support across cloud application, SQL Server and Linux environments
            </Tech>
            <Items>
              <li>
                Developed and maintained Python applications and automation scripts (OOP, data structures, algorithms) for monitoring and troubleshooting, replacing manual tasks with documented solutions.
              </li>
              <li>
                Built web features and REST APIs with Django and Flask (models, views, serializers, authentication) on SQL Server and MySQL databases.
              </li>
              <li>
                Worked directly with clients and stakeholders to gather requirements, demo progress and turn feedback into working features.
              </li>
              <li>
                Wrote and optimized SQL queries on SQL Server and MySQL; managed user and role access and supported Oracle Fusion Cloud applications.
              </li>
              <li>
                Tested Python, Django and Flask output with unit tests and acceptance criteria; reviewed and tested all AI-assisted (copilot) code for quality and security.
              </li>
              <li>
                Resolved incidents within SLA using root-cause analysis (ITIL), supported production deployments with Git and code reviews, and administered RHEL and Ubuntu servers (LVM, mount, fsck).
              </li>
            </Items>
          </Section>

          <Section title="Software &amp; AI/ML Projects">
            <div className="break-inside-avoid">
              <span className="font-bold">Mental Health Analyzer (Python, OpenCV, TensorFlow CNN)</span>
            </div>
            <Items>
              <li>
                Built a Python web app that runs real-time facial emotion detection with a CNN alongside psychometric tests, end to end.
              </li>
            </Items>

            <div className="break-inside-avoid">
              <span className="font-bold">Chatbot Song Recommendation System (Python, PyTorch, NLTK, APIs)</span>
            </div>
            <Items>
              <li>
                Built a Python conversational assistant that reads user intent and mood from dialogue and recommends music via the Spotify REST API (JSON).
              </li>
            </Items>
          </Section>

          <Section title="Certifications &amp; Achievements">
            <Items>
              <li>
                <b>SQL Server Administration</b> (Udemy) - installation, configuration, user/role management, security, performance monitoring.
              </li>
              <li>
                <b>Generative AI</b> (Udemy) - LLM fundamentals and prompt engineering with hands-on AI tools.
              </li>
              <li>
                <b>Innovation Hub Member</b> - contributed to ideation and evaluation of new technology solutions.
              </li>
            </Items>
          </Section>

          <Section title="Education">
            <Heading
              title="Sphoorthy Engineering College"
              right="Dec 2020 – Aug 2024"
              sub="B.Tech in Computer Science | CGPA: 7.1"
              subRight="Hyderabad"
              />
            <div className="mt-1.5">
              <Heading
                title="Space Junior College"
                right="Jun 2018 – Jun 2020"
                sub="Intermediate (Class 12) | 95%"
                subRight="Hyderabad"
                />
            </div>
            <div className="mt-1.5">
              <Heading
                title="Lord's Talent High School"
                right="Mar 2018"
                sub="SSC (Class 10) | CGPA: 9.8"
                subRight="Hyderabad"
                />
            </div>
          </Section>
        </article>
      </div>
    </main>
  );
}
