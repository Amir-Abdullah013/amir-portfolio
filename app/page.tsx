"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import * as framerMotion from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Briefcase,
  MoveRight,
} from "lucide-react";

// --------- Utility ---------
const Container: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
    {children}
  </div>
);

const SectionTitle: React.FC<{ title: string; subtitle?: string }> = ({
  title,
  subtitle,
}) => (
  <div className="mb-10 flex items-end justify-between gap-6">
    <div>
      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
        {title}
      </h2>
      {subtitle && <p className="mt-2 text-sm text-gray-400">{subtitle}</p>}
    </div>
  </div>
);

const Badge: React.FC<React.PropsWithChildren> = ({ children }) => (
  <span className="rounded-full border border-gray-800/60 bg-gray-900/50 px-3 py-1 text-xs text-gray-300 shadow-sm transition-transform duration-200 hover:-translate-y-0.5">
    {children}
  </span>
);

// --------- Animated Background ---------
const AnimatedBackground: React.FC = () => (
  <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    {/* Soft radial gradient */}
    <div className="absolute left-1/2 top-0 size-[70vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.14),transparent_60%)] blur-2xl" />

    {/* Floating blobs */}
    <motion.div
      className="absolute -left-24 top-24 h-80 w-80 rounded-full bg-fuchsia-600/10 blur-3xl"
      animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl"
      animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
      transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* Subtle grid */}
    <div
      className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px]"
      style={{
        maskImage: "radial-gradient(circle at center, black, transparent 80%)",
      }}
    />
  </div>
);

// --------- Data ---------
const skills = [
  { name: "HTML", info: "Standard markup for web pages" },
  { name: "CSS", info: "Style sheet language" },
  { name: "JavaScript", info: "Programming language for the web" },
  { name: "Tailwind CSS", info: "Utility-first CSS framework" },
  { name: "React", info: "JavaScript library for building UI" },
  { name: "Next.js", info: "React framework with SSR support" },
  { name: "Node.js", info: "JavaScript runtime environment" },
  { name: "Express", info: "Web framework for Node.js" },
  { name: "Java", info: "Object-oriented programming language" },
];

const projects = [
  {
    title: "BA E-commerce Store",
    desc: "Fully Functional Responsive E-commerce Store with Product Management, Cart, Checkout, and Admin Product Management.",
    stack: ["Next.js", "Tailwind", "Stripe"],
    github: "https://github.com/Amir-Abdullah013/ba-sports-ecommerce-site/",
    demo: "https://ba-sports-ecommerce-site.vercel.app/",
  },
  {
    title: "E‑commerce Store",
    desc: "Responsive storefront with product browsing, cart, checkout flow, and admin product management.",
    stack: ["Next.js", "Tailwind", "Stripe"],
    github: "https://github.com/Amir-Abdullah013/e-commerce-site",
    demo: "https://e-commerce-site-eta-two.vercel.app/",
  },
  {
    title: "YouTube Clone",
    desc: "Video browsing, search, and watch pages with channel subscriptions and comments.",
    stack: ["Next.js", "YouTube API"],
    github: "https://github.com/Amir-Abdullah013/youtube-clone",
    demo: "https://youtube-clone-beryl-mu.vercel.app/",
  },
  {
    title: "WhatsApp Clone",
    desc: "Real‑time chat rooms, typing indicators, and media sharing with authentication.",
    stack: ["React", "Firebase", "Tailwind"],
    github: "https://github.com/Amir-Abdullah013/whatsapp-clone-tailwind",
    demo: "https://whatsapp-clone-tailwind.vercel.app/",
  },
  
];

// --------- Page ---------
export default function Portfolio() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  return (
    <main className="relative min-h-screen bg-gray-900 text-white">
      {/* Aurora Borealis Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden bg-gray-900">
        <div className="aurora aurora1"></div>
        <div className="aurora aurora2"></div>
        <div className="aurora aurora3"></div>
      </div>

      <AnimatedBackground />

      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-gray-950/60">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <a href="#" className="group inline-flex items-center gap-2">
              <span className="text-sm font-medium tracking-wide text-gray-300 group-hover:text-white">
                Amir Abdullah
              </span>
            </a>
            <nav className="hidden items-center gap-6 text-sm text-gray-300 md:flex">
              <a href="#about" className="transition-colors hover:text-white">
                About
              </a>
              <a href="#skills" className="transition-colors hover:text-white">
                Skills
              </a>
              <a
                href="#projects"
                className="transition-colors hover:text-white"
              >
                Projects
              </a>
              <a href="#contact" className="transition-colors hover:text-white">
                Contact
              </a>
            </nav>
            <div className="flex items-center gap-2">
              <a
                className="rounded-full border border-gray-800 bg-gray-900/70 px-3 py-1.5 text-xs text-gray-300 shadow transition hover:-translate-y-0.5 hover:border-gray-700 hover:bg-gray-900"
                href="#projects"
              >
                View Work
              </a>
            </div>
          </div>
        </Container>
      </header>

      {/* Hero */}
      <section className="relative">
        <Container>
          <div className="grid min-h-[70vh] grid-cols-1 items-center gap-10 py-16 md:grid-cols-2 md:py-24">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold tracking-tight md:text-5xl"
              >
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  Amir Abdullah
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-4 max-w-xl text-gray-300"
              >
                Web Developer with 1 year of experience building responsive,
                modern web apps using HTML, CSS, JavaScript, Tailwind CSS,
                React, Next.js, Node.js, Express, and Java.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-8 flex flex-wrap items-center gap-3"
              >
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15"
                >
                  <Briefcase className="h-4 w-4" />
                  See Projects
                </a>
                <a
                  href="mailto:thecodeamir@gmail.com" // TODO: replace with your real email
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-gray-900/60 px-4 py-2 text-sm font-medium transition hover:-translate-y-0.5 hover:border-white/20"
                >
                  <Mail className="h-4 w-4" /> Contact Me
                </a>
                <a
                  href="https://github.com/Amir-Abdullah013?tab=repositories" // TODO: replace
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-gray-900/60 p-2 transition hover:-translate-y-0.5 hover:border-white/20"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/feed/" // TODO: replace
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-gray-900/60 p-2 transition hover:-translate-y-0.5 hover:border-white/20"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </motion.div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-gray-900/60 to-gray-800/60 p-6 shadow-2xl"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Code2 className="h-4 w-4" /> Featured Stack
                  </div>
                  <span className="rounded-full bg-emerald-400/15 px-2 py-1 text-xs text-emerald-300 ring-1 ring-emerald-400/20">
                    Open to work
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
                  {skills.map((s, index) => (
                    <div
                      key={`${s.name}-${index}`} // ✅ unique string key
                      onClick={() => setSelectedSkill(s.name)}
                      className="cursor-pointer group rounded-2xl border border-white/10 bg-gray-900/50 p-4 transition hover:-translate-y-1 hover:bg-gray-900/70"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-200">{s.name}</span>
                        
                      </div>
                      <div className="mt-3 h-1 w-full scale-x-0 rounded bg-gradient-to-r from-blue-400 to-emerald-400 transition-transform duration-300 group-hover:scale-x-100" />
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* About */}
      <section id="about" className="py-16 md:py-24">
        <Container>
          <SectionTitle title="About Me" subtitle="Who I am and what I do" />
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <div className="prose prose-invert max-w-none text-gray-300">
                <p>
                  I&apos;m Amir Abdullah, a web developer with{" "}
                  <strong>1 year</strong> of hands‑on experience building
                  responsive, accessible, and performant web apps. I enjoy
                  crafting clean UI, scalable architecture, and smooth UX with
                  modern tools like <em>Next.js</em> and <em>Tailwind CSS</em>.
                </p>
                <p>
                  I’ve worked on projects ranging from an end‑to‑end{" "}
                  <strong>Bank Management System</strong> to consumer apps like
                  an <strong>E‑commerce Store</strong>, a{" "}
                  <strong>WhatsApp Clone</strong>, and a
                  <strong> YouTube Clone</strong>.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-gray-900/50 p-5 shadow">
              <p className="text-sm text-gray-400">Quick facts</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  Experience: <span className="text-gray-200">1 year</span>
                </li>
                <li>
                  Focus:{" "}
                  <span className="text-gray-200">Front‑end & Full‑stack</span>
                </li>
                <li>
                  Looking for:{" "}
                  <span className="text-gray-200">
                    Internships / Junior roles
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Skills */}
      <section id="skills" className="py-16 md:py-24">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-white ml-8">Skills</h2>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 px-6 ">
            {skills.map((s, index) => (
              <div
                key={`${s.name}-${index}`}
                onClick={() =>
                  setSelectedSkill(s.name === selectedSkill ? null : s.name)
                }
                className="cursor-pointer group rounded-2xl border border-blue-400/60 bg-gray-900/50 p-4 transition hover:-translate-y-1 hover:bg-gray-900/70 shadow-[0_0_10px_rgba(59,130,246,0.7)] hover:shadow-[0_0_20px_rgba(59,130,246,1)]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-200">{s.name}</span>
                </div>
                <div className="mt-3 h-1 w-full scale-x-0 rounded bg-gradient-to-r from-blue-400 to-emerald-400 transition-transform duration-300 group-hover:scale-x-100" />

                {/* Info box animation */}
                <framerMotion.AnimatePresence>
                  {selectedSkill === s.name && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 text-xs text-gray-400"
                    >
                      {s.info}
                    </motion.div>
                  )}
                </framerMotion.AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 md:py-24">
        <Container>
          <SectionTitle title="Projects" subtitle="Things I’ve built" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {projects.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-gray-900/60 p-6 shadow transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold text-gray-100">
                    {p.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <a
                      href={p.demo}
                      target="_blank"
                      className="rounded-xl border border-white/10 bg-gray-800/50 p-2 text-xs text-gray-300 transition hover:-translate-y-0.5 hover:border-white/20"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <a
                      href={p.github}
                      target="_blank"
                      className="rounded-xl border border-white/10 bg-gray-800/50 p-2 text-xs text-gray-300 transition hover:-translate-y-0.5 hover:border-white/20"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <p className="mt-2 text-sm text-gray-300">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <Badge key={s}>{s}</Badge>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-24">
        <Container>
          <SectionTitle
            title="Contact"
            subtitle="Let's build something together"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <form
              action="https://formspree.io/f/your-form-id" // TODO: replace with your Formspree or backend endpoint
              method="POST"
              className="rounded-3xl border border-white/10 bg-gray-900/60 p-6 shadow"
            >
              <div className="grid grid-cols-1 gap-4">
                <input
                  className="rounded-xl border border-white/10 bg-gray-900/80 px-4 py-2 text-sm outline-none transition placeholder:text-gray-500 focus:border-white/20"
                  placeholder="Your name"
                  name="name"
                  required
                />
                <input
                  className="rounded-xl border border-white/10 bg-gray-900/80 px-4 py-2 text-sm outline-none transition placeholder:text-gray-500 focus:border-white/20"
                  placeholder="Your email"
                  type="email"
                  name="email"
                  required
                />
                <textarea
                  className="min-h-[120px] rounded-xl border border-white/10 bg-gray-900/80 px-4 py-2 text-sm outline-none transition placeholder:text-gray-500 focus:border-white/20"
                  placeholder="Your message"
                  name="message"
                  required
                />
                <button className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15">
                  Send Message
                  <MoveRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </button>
              </div>
            </form>

            <div className="rounded-3xl border border-white/10 bg-gray-900/60 p-6 shadow">
              <p className="text-sm text-gray-400">Or reach me directly</p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:your-email@example.com" // TODO: replace
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-gray-800/50 px-3 py-2 text-sm text-gray-300 transition hover:-translate-y-0.5 hover:border-white/20"
                >
                  <Mail className="h-4 w-4" /> thecodeamir@gmail.com
                </a>
                <a
                  href="https://github.com/Amir-Abdullah013" // TODO: replace
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-gray-800/50 px-3 py-2 text-sm text-gray-300 transition hover:-translate-y-0.5 hover:border-white/20"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/feed/" // TODO: replace
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-gray-800/50 px-3 py-2 text-sm text-gray-300 transition hover:-translate-y-0.5 hover:border-white/20"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </div>
              <div className="mt-6 rounded-xl border border-white/10 bg-gray-900/80 p-4"></div>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <Container>
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-400 md:flex-row">
            <p>
              © {new Date().getFullYear()} Amir Abdullah. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              <a href="#about" className="transition hover:text-white">
                About
              </a>
              <a href="#skills" className="transition hover:text-white">
                Skills
              </a>
              <a href="#projects" className="transition hover:text-white">
                Projects
              </a>
              <a href="#contact" className="transition hover:text-white">
                Contact
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </main>
  );
}
