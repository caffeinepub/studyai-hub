import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  CheckCircle,
  ChevronRight,
  Clock,
  Facebook,
  Grid,
  HelpCircle,
  Instagram,
  Lightbulb,
  LogIn,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  PenLine,
  Phone,
  Search,
  Send,
  Smartphone,
  Star,
  Twitter,
  X,
  Youtube,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

// ── Data ──────────────────────────────────────────────────────────────────────

const AI_TOOLS = [
  {
    id: 1,
    icon: Instagram,
    title: "Instagram Bio Generator",
    description:
      "Create catchy, professional Instagram bios in seconds. Perfect for students & creators.",
    color: "bg-pink-50",
    iconColor: "text-pink-500",
    isViewAll: false,
  },
  {
    id: 2,
    icon: Youtube,
    title: "YouTube Title Generator",
    description:
      "Generate click-worthy YouTube video titles that boost views and engagement.",
    color: "bg-red-50",
    iconColor: "text-red-500",
    isViewAll: false,
  },
  {
    id: 3,
    icon: PenLine,
    title: "Essay Writer",
    description:
      "Write well-structured essays on any topic instantly. Supports all subjects.",
    color: "bg-blue-50",
    iconColor: "text-blue-500",
    isViewAll: false,
  },
  {
    id: 4,
    icon: Briefcase,
    title: "Resume Builder",
    description:
      "Build a professional resume in minutes. ATS-friendly templates included.",
    color: "bg-green-50",
    iconColor: "text-green-500",
    isViewAll: false,
  },
  {
    id: 5,
    icon: MessageSquare,
    title: "Caption Generator",
    description:
      "Generate engaging social media captions for any post, event, or product.",
    color: "bg-purple-50",
    iconColor: "text-purple-500",
    isViewAll: false,
  },
  {
    id: 6,
    icon: Grid,
    title: "View All Tools",
    description:
      "Explore our full library of 20+ free AI tools designed for students.",
    color: "bg-amber-50",
    iconColor: "text-amber-500",
    isViewAll: true,
  },
];

const STUDENT_RESOURCES = [
  {
    id: 1,
    title: "BA History Notes",
    description:
      "Complete semester-wise notes for BA History students. Download free PDF.",
    tag: "Featured",
    featured: true,
    icon: BookOpen,
    color: "from-blue-600 to-blue-800",
  },
  {
    id: 2,
    title: "Important Questions",
    description:
      "Topic-wise important questions for all major university exams.",
    tag: "Exam Prep",
    featured: false,
    icon: HelpCircle,
    color: "from-indigo-500 to-indigo-700",
  },
  {
    id: 3,
    title: "Quick Revision",
    description:
      "Concise revision notes to help you prepare for exams in minimal time.",
    tag: "Revision",
    featured: false,
    icon: Zap,
    color: "from-teal-500 to-teal-700",
  },
  {
    id: 4,
    title: "Exam Tips",
    description:
      "Proven strategies and time management tips to score higher in exams.",
    tag: "Tips",
    featured: false,
    icon: Lightbulb,
    color: "from-orange-500 to-orange-700",
  },
  {
    id: 5,
    title: "Blog Articles",
    description:
      "Insightful articles on study techniques, career guidance, and more.",
    tag: "Blog",
    featured: false,
    icon: PenLine,
    color: "from-purple-500 to-purple-700",
  },
];

const FEATURES = [
  {
    icon: CheckCircle,
    title: "100% Free",
    description:
      "All tools and study resources are completely free. No hidden charges.",
    color: "text-green-500",
    bg: "bg-green-50",
  },
  {
    icon: Clock,
    title: "Instant Results",
    description: "Get AI-powered results in seconds. No waiting, no delays.",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: LogIn,
    title: "No Login Required",
    description: "Use all tools without creating an account or signing up.",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly",
    description: "Optimized for all devices — phone, tablet, or desktop.",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
];

const STATS = [
  { value: "5+", label: "AI Tools" },
  { value: "100+", label: "Study Notes" },
  { value: "Hindi+English", label: "Language Support" },
  { value: "24/7", label: "Always Available" },
];

const QUICK_LINKS = [
  "Instagram Bio",
  "Essay Writer",
  "Resume Builder",
  "BA History Notes",
];

const ALL_SEARCHABLE = [
  "Instagram Bio Generator",
  "YouTube Title Generator",
  "Essay Writer",
  "Resume Builder",
  "Caption Generator",
  "BA History Notes",
  "Important Questions",
  "Quick Revision Notes",
  "Exam Tips",
  "Blog Articles",
];

const SOCIAL_LINKS = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com",
    hoverColor: "hover:bg-pink-100 hover:text-pink-600",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com",
    hoverColor: "hover:bg-blue-100 hover:text-blue-500",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://facebook.com",
    hoverColor: "hover:bg-blue-100 hover:text-blue-700",
  },
  {
    icon: Youtube,
    label: "YouTube",
    href: "https://youtube.com",
    hoverColor: "hover:bg-red-100 hover:text-red-600",
  },
];

// ── Components ────────────────────────────────────────────────────────────────

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "AI Tools", href: "#tools" },
    { label: "Notes", href: "#resources" },
    { label: "Blog", href: "#blog" },
    { label: "About", href: "#about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2 group"
            data-ocid="header.link"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-md group-hover:shadow-blue-200 transition-shadow">
              <span className="text-white font-black text-lg">S</span>
            </div>
            <span className="font-bold text-lg text-gray-900">
              StudyAI <span className="text-primary-blue">Hub</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-gray-600 hover:text-primary-blue font-medium text-sm transition-colors"
                data-ocid="header.link"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <a href="#tools" data-ocid="header.primary_button">
              <Button className="bg-primary-blue hover:bg-primary-dark text-white rounded-full px-6 font-semibold shadow-sm transition-all hover:shadow-blue-200 hover:shadow-md">
                Get Free Tools
              </Button>
            </a>
          </div>

          {/* Hamburger */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            data-ocid="header.toggle"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <nav className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="px-3 py-2.5 rounded-lg text-gray-700 hover:text-primary-blue hover:bg-blue-50 font-medium transition-colors"
                  onClick={() => setMenuOpen(false)}
                  data-ocid="header.link"
                >
                  {l.label}
                </a>
              ))}
              <div className="mt-2">
                <Button
                  className="w-full bg-primary-blue hover:bg-primary-dark text-white rounded-full font-semibold"
                  onClick={() => {
                    setMenuOpen(false);
                    window.location.hash = "tools";
                  }}
                  data-ocid="header.primary_button"
                >
                  Get Free Tools
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function HeroSection() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.trim().length > 0) {
      const filtered = ALL_SEARCHABLE.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase()),
      );
      setResults(filtered);
      setShowResults(true);
    } else {
      setResults([]);
      setShowResults(false);
    }
  }, [query]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/hero-bg.dim_1600x900.jpg"
          alt="AI Education background"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/80 to-blue-800/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-950/40" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="bg-white/15 backdrop-blur-sm text-white border-white/30 px-4 py-1.5 text-sm font-medium mb-6 hover:bg-white/20">
              <Star size={14} className="mr-1.5 text-yellow-400" />
              100% Free • No Login Required
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6"
          >
            Free AI Tools
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
              for Students
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-blue-100 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl"
          >
            Supercharge your studies with AI-powered tools — essay writing,
            resume building, and more. Plus, free notes and exam resources.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            ref={searchRef}
            className="relative max-w-xl mb-8"
          >
            <div className="flex items-center bg-white rounded-2xl shadow-2xl overflow-hidden">
              <Search size={20} className="ml-4 text-gray-400 flex-shrink-0" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search tools, notes, or resources…"
                className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-gray-800 placeholder-gray-400 text-base py-4 px-3"
                onFocus={() => query && setShowResults(true)}
                data-ocid="hero.search_input"
                aria-label="Search tools and resources"
              />
              <Button className="m-1.5 bg-primary-blue hover:bg-primary-dark text-white rounded-xl px-5 font-semibold">
                Search
              </Button>
            </div>

            {/* Search Results Dropdown */}
            <AnimatePresence>
              {showResults && results.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="absolute top-full mt-2 left-0 right-0 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                >
                  {results.map((r) => (
                    <button
                      type="button"
                      key={r}
                      className="w-full px-5 py-3 text-left text-gray-800 hover:bg-blue-50 hover:text-primary-blue transition-colors flex items-center gap-3 text-sm font-medium"
                      onClick={() => {
                        setQuery(r);
                        setShowResults(false);
                      }}
                    >
                      <Search size={14} className="text-gray-400" />
                      {r}
                    </button>
                  ))}
                </motion.div>
              )}
              {showResults && results.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="absolute top-full mt-2 left-0 right-0 bg-white rounded-xl shadow-2xl border border-gray-100 p-4 z-50"
                >
                  <p className="text-gray-500 text-sm">
                    No results found for "{query}"
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-2"
          >
            <span className="text-blue-200 text-sm font-medium mr-1 self-center">
              Popular:
            </span>
            {QUICK_LINKS.map((link) => (
              <a
                key={link}
                href="#tools"
                className="px-4 py-1.5 bg-white/15 backdrop-blur-sm hover:bg-white/25 text-white text-sm font-medium rounded-full border border-white/25 transition-all hover:border-white/50"
                data-ocid="hero.link"
              >
                {link}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AIToolsSection() {
  return (
    <section id="tools" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <Badge className="bg-blue-50 text-primary-blue border-blue-200 px-4 py-1 text-sm font-semibold mb-4">
            AI-Powered
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trending AI Tools
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Powerful, free AI tools built specifically for students. No signup
            required.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {AI_TOOLS.map((tool, i) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`bg-white border rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4 ${
                tool.isViewAll
                  ? "border-dashed border-2 border-blue-200"
                  : "border border-[oklch(0.87_0.04_240)]"
              }`}
              data-ocid={`tools.item.${i + 1}`}
            >
              <div
                className={`w-12 h-12 rounded-xl ${tool.color} flex items-center justify-center`}
              >
                <tool.icon size={24} className={tool.iconColor} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 text-lg mb-1.5">
                  {tool.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {tool.description}
                </p>
              </div>
              <a href="#tools" data-ocid={`tools.button.${i + 1}`}>
                <Button
                  variant={tool.isViewAll ? "outline" : "default"}
                  className={`w-full rounded-xl font-semibold ${
                    tool.isViewAll
                      ? "border-primary-blue text-primary-blue hover:bg-blue-50"
                      : "bg-primary-blue hover:bg-primary-dark text-white"
                  }`}
                >
                  {tool.isViewAll ? (
                    <>
                      View All Tools <ArrowRight size={16} className="ml-1" />
                    </>
                  ) : (
                    "Use Tool"
                  )}
                </Button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResourcesSection() {
  return (
    <section
      id="resources"
      className="py-20"
      style={{ background: "oklch(0.976 0.014 240)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <Badge className="bg-blue-50 text-primary-blue border-blue-200 px-4 py-1 text-sm font-semibold mb-4">
            Study Resources
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Student Resources
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Curated study materials, notes, and guides to help you excel in your
            academics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STUDENT_RESOURCES.map((res, i) => (
            <motion.div
              key={res.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                res.featured
                  ? "md:col-span-2 lg:col-span-1 ring-2 ring-blue-400"
                  : ""
              }`}
              data-ocid={`resources.item.${i + 1}`}
            >
              <div
                className={`h-28 bg-gradient-to-r ${res.color} flex items-center justify-center relative overflow-hidden`}
              >
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='10'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                  }}
                />
                <res.icon size={40} className="text-white/90 drop-shadow" />
                {res.featured && (
                  <span className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-0.5 rounded-full">
                    ★ Featured
                  </span>
                )}
              </div>
              <div className="p-5">
                <Badge
                  variant="secondary"
                  className="text-xs font-semibold mb-3 bg-blue-50 text-primary-blue border-0"
                >
                  {res.tag}
                </Badge>
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  {res.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {res.description}
                </p>
                <a
                  href="#resources"
                  className="inline-flex items-center text-primary-blue font-semibold text-sm hover:gap-2 gap-1 transition-all"
                  data-ocid={`resources.link.${i + 1}`}
                >
                  Read More <ChevronRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <Badge className="bg-blue-50 text-primary-blue border-blue-200 px-4 py-1 text-sm font-semibold mb-4">
            Why Us
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose StudyAI Hub?
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Everything a student needs — free tools, quality notes, and smart
            resources — all in one place.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-[oklch(0.87_0.04_240)] rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              data-ocid={`features.item.${i + 1}`}
            >
              <div
                className={`w-14 h-14 ${f.bg} rounded-2xl flex items-center justify-center mx-auto mb-4`}
              >
                <f.icon size={28} className={f.color} />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                {f.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 text-center text-white"
              data-ocid={`stats.item.${i + 1}`}
            >
              <div className="text-3xl font-black mb-1">{stat.value}</div>
              <div className="text-blue-200 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-950 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-rule='evenodd'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
            Start Using Free AI Tools
            <br />
            <span className="text-blue-300">Right Now — No Signup!</span>
          </h2>
          <p className="text-blue-200 text-xl mb-10 max-w-xl mx-auto">
            Join thousands of students who are already saving time and studying
            smarter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#tools" data-ocid="cta.primary_button">
              <Button className="bg-white text-blue-700 hover:bg-blue-50 font-bold px-8 py-6 text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all">
                <Zap size={20} className="mr-2" /> Explore AI Tools
              </Button>
            </a>
            <a href="#resources" data-ocid="cta.secondary_button">
              <Button
                variant="outline"
                className="border-white/50 text-white hover:bg-white/15 font-bold px-8 py-6 text-lg rounded-2xl transition-all"
              >
                <BookOpen size={20} className="mr-2" /> Browse Study Notes
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitted(true);
      setSubmitting(false);
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="py-20"
      style={{ background: "oklch(0.976 0.014 240)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <Badge className="bg-blue-50 text-primary-blue border-blue-200 px-4 py-1 text-sm font-semibold mb-4">
            Get In Touch
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Have questions, suggestions, or just want to say hi? We'd love to
            hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Let's Connect
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Whether you have a feature request, found a bug, or need study
                help — our team is here for you.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {[
                { icon: Mail, label: "Email", value: "hello@studyaihub.com" },
                { icon: Phone, label: "Phone", value: "+91 98765 43210" },
                { icon: MapPin, label: "Location", value: "New Delhi, India" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <c.icon size={18} className="text-primary-blue" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                      {c.label}
                    </p>
                    <p className="text-gray-800 font-medium">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-700 mb-3">
                Follow us
              </p>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-gray-200 text-gray-500 transition-all ${s.hoverColor}`}
                    data-ocid="contact.link"
                  >
                    <s.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div
              className="bg-white rounded-2xl shadow-xl p-8"
              data-ocid="contact.panel"
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                    data-ocid="contact.success_state"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle size={32} className="text-green-500" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-500 mb-6">
                      Thank you for reaching out. We'll get back to you within
                      24 hours.
                    </p>
                    <Button
                      onClick={() => setSubmitted(false)}
                      className="bg-primary-blue hover:bg-primary-dark text-white rounded-xl"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                    data-ocid="contact.modal"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-sm font-semibold text-gray-700 mb-1.5"
                        >
                          Name
                        </label>
                        <Input
                          id="contact-name"
                          required
                          value={form.name}
                          onChange={(e) =>
                            setForm((f) => ({ ...f, name: e.target.value }))
                          }
                          placeholder="Your full name"
                          className="rounded-xl border-gray-200 focus:border-blue-400"
                          data-ocid="contact.input"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-sm font-semibold text-gray-700 mb-1.5"
                        >
                          Email
                        </label>
                        <Input
                          id="contact-email"
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) =>
                            setForm((f) => ({ ...f, email: e.target.value }))
                          }
                          placeholder="your@email.com"
                          className="rounded-xl border-gray-200 focus:border-blue-400"
                          data-ocid="contact.input"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="contact-subject"
                        className="block text-sm font-semibold text-gray-700 mb-1.5"
                      >
                        Subject
                      </label>
                      <Input
                        id="contact-subject"
                        required
                        value={form.subject}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, subject: e.target.value }))
                        }
                        placeholder="How can we help?"
                        className="rounded-xl border-gray-200 focus:border-blue-400"
                        data-ocid="contact.input"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-sm font-semibold text-gray-700 mb-1.5"
                      >
                        Message
                      </label>
                      <Textarea
                        id="contact-message"
                        required
                        value={form.message}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, message: e.target.value }))
                        }
                        placeholder="Tell us more…"
                        rows={5}
                        className="rounded-xl border-gray-200 focus:border-blue-400 resize-none"
                        data-ocid="contact.textarea"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={submitting}
                      className="bg-primary-blue hover:bg-primary-dark text-white rounded-xl font-bold py-3 text-base shadow-md hover:shadow-lg transition-all"
                      data-ocid="contact.submit_button"
                    >
                      {submitting ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending…
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send size={18} /> Send Message
                        </span>
                      )}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "AI Tools", href: "#tools" },
    { label: "Study Notes", href: "#resources" },
    { label: "Blog", href: "#blog" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const aiTools = [
    "Instagram Bio Generator",
    "YouTube Title Generator",
    "Essay Writer",
    "Resume Builder",
    "Caption Generator",
  ];

  const studyResources = [
    "BA History Notes",
    "Important Questions",
    "Quick Revision",
    "Exam Tips",
    "Blog Articles",
  ];

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <span className="text-white font-black text-lg">S</span>
              </div>
              <span className="font-bold text-lg">
                StudyAI <span className="text-blue-400">Hub</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your go-to platform for free AI tools and study resources.
              Empowering students to learn smarter, not harder.
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all"
                  data-ocid="footer.link"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-gray-400 hover:text-blue-400 text-sm transition-colors flex items-center gap-1.5 group"
                    data-ocid="footer.link"
                  >
                    <ChevronRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Tools */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">
              AI Tools
            </h4>
            <ul className="flex flex-col gap-2.5">
              {aiTools.map((t) => (
                <li key={t}>
                  <a
                    href="#tools"
                    className="text-gray-400 hover:text-blue-400 text-sm transition-colors flex items-center gap-1.5 group"
                    data-ocid="footer.link"
                  >
                    <ChevronRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Study Resources */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">
              Study Resources
            </h4>
            <ul className="flex flex-col gap-2.5">
              {studyResources.map((r) => (
                <li key={r}>
                  <a
                    href="#resources"
                    className="text-gray-400 hover:text-blue-400 text-sm transition-colors flex items-center gap-1.5 group"
                    data-ocid="footer.link"
                  >
                    <ChevronRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    {r}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {year}.{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              Built with ❤️ using caffeine.ai
            </a>
          </p>
          <div className="flex items-center gap-5">
            <a
              href="/privacy"
              className="text-gray-500 hover:text-blue-400 text-sm transition-colors"
              data-ocid="footer.link"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-gray-500 hover:text-blue-400 text-sm transition-colors"
              data-ocid="footer.link"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AIToolsSection />
        <ResourcesSection />
        <WhyChooseSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
