/* Editorial Command Center: asymmetric resume reading column, copper rules, serif/sans contrast, calm functional interactions. */
import { useEffect, useState } from "react";
import { ArrowUpRight, Download, Mail, Menu, Phone, X } from "lucide-react";

const competencies = [
  "Tier 2 Technical Support",
  "Escalation Handling",
  "Subject Matter Expert (SME)",
  "Call Handoff & Transfer",
  "Supervisor Calls",
  "Customer Retention",
  "Chat Support",
  "Complex Inquiry Resolution",
  "Communication",
  "Time Management",
  "Organization",
  "Multitasking & Tools Navigation",
  "Speed Typing",
  "Creativity",
  "Technical Troubleshooting",
];

const experience = [
  "Handled Tier 2 escalations, resolving complex technical and account issues beyond front-line scope.",
  "Served as Subject Matter Expert (SME), guiding teammates and supporting handoffs on complicated cases.",
  "Managed supervisor calls, de-escalating high-tension situations and restoring customer confidence.",
  "Handled inquiries and retention conversations, balancing customer needs with company objectives.",
  "Delivered support across chat and phone channels, maintaining quality and speed under pressure.",
  "Developed strong speed-typing skills to keep pace with high case volume and documentation needs.",
  "Practiced multitasking and tools navigation, working across multiple systems simultaneously during calls.",
  "Improved communication skills through daily coaching, cross-team collaboration, and customer interaction.",
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("profile");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id)),
      { rootMargin: "-18% 0px -68% 0px" },
    );
    ["profile", "experience", "competencies", "education", "contact"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const navigate = (id: string) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <main className="site-shell">
      <header className="topbar">
        <button className="brand-lockup" onClick={() => navigate("profile")} aria-label="Back to profile">
          <img src="/manus-storage/edward-mark_51c20599.png" alt="Edward Artiaga mark" />
          <span>EA<span className="brand-dot">.</span></span>
        </button>
        <button className="menu-trigger" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen} aria-label="Toggle navigation">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
          <span>Index</span>
        </button>
        <nav className={menuOpen ? "nav-menu is-open" : "nav-menu"} aria-label="Primary navigation">
          {["profile", "experience", "competencies", "education", "contact"].map((id, index) => (
            <button key={id} className={activeSection === id ? "nav-link is-active" : "nav-link"} onClick={() => navigate(id)}>
              <span>0{index + 1}</span>{id}
            </button>
          ))}
        </nav>
      </header>

      <div className="reading-layout">
        <aside className="identity-rail">
          <div className="rail-stamp">EA / 2026</div>
          <div className="rail-copy">Professional profile<br />&amp; work record</div>
          <div className="rail-line" />
          <div className="rail-footer">Parañaque City<br />Philippines</div>
        </aside>

        <div className="content-column">
          <section id="profile" className="hero-section reveal-section">
            <div className="eyebrow"><span className="signal-dot" />Available for the next challenge</div>
            <div className="hero-grid">
              <div>
                <p className="kicker">Tier 02 / Support Operations</p>
                <h1>Edward<br /><em>Artiaga</em></h1>
                <p className="hero-role">Tier 2 Support Specialist<br /><span>Escalation &amp; Subject Matter Expert</span></p>
                <div className="hero-actions">
                  <button className="primary-action" onClick={() => navigate("contact")}>Open a conversation <ArrowUpRight size={16} /></button>
                  <button className="text-action" onClick={() => window.print()}><Download size={16} /> Print / save resume</button>
                </div>
              </div>
              <div className="hero-visual">
                <img src="/manus-storage/support-hero_e3f992d4.jpg" alt="Abstract support operations desk" />
                <span className="visual-caption">01 / Resolve with clarity</span>
              </div>
            </div>
            <div className="hero-note"><span>01</span><p>“The difficult call is usually the one that needs the clearest next step.”</p></div>
          </section>

          <section className="section-block intro-block">
            <div className="section-label"><span>02</span><span>Profile</span></div>
            <div className="section-body">
              <h2>Calm under<br /><em>pressure.</em></h2>
              <div>
                <p className="lede">Tier 2 Support Specialist with hands-on experience handling escalations, complex inquiries, and supervisor-level calls in a fast-paced contact center environment.</p>
                <p>Recognized as a Subject Matter Expert for handoffs and retention, with a track record of resolving high-priority issues while maintaining strong customer satisfaction. Skilled at multitasking across multiple tools and systems, with a fast, accurate typing speed that supports efficient case handling.</p>
                <p>Strong communicator with a proven ability to de-escalate tense situations, support teammates, and drive first-contact resolution.</p>
              </div>
            </div>
          </section>

          <section id="experience" className="section-block experience-block">
            <div className="section-label"><span>03</span><span>Experience</span></div>
            <div className="section-body">
              <div className="job-heading"><div><p className="kicker">Teleperformance</p><h2>Tier 2 Support<br /><em>Specialist</em></h2></div><p className="date-range">2024—2026</p></div>
              <div className="experience-list">{experience.map((item, index) => <div className="experience-item" key={item}><span>0{index + 1}</span><p>{item}</p></div>)}</div>
            </div>
          </section>

          <section id="competencies" className="section-block competency-block">
            <div className="section-label"><span>04</span><span>Core competencies</span></div>
            <div className="section-body">
              <h2>Tools for the<br /><em>hard moments.</em></h2>
              <div className="competency-list">{competencies.map((item, index) => <div className="competency" key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</div>)}</div>
            </div>
          </section>

          <section id="education" className="section-block education-block">
            <div className="section-label"><span>05</span><span>Education &amp; wins</span></div>
            <div className="section-body two-up">
              <div><h2>Built on<br /><em>curiosity.</em></h2><div className="education-item"><p className="kicker">Technological University of the Philippines</p><p>Tertiary Level (Undergraduate)</p><span>2022—2023</span></div><div className="education-item"><p className="kicker">Parañaque National High School — Main</p><p>High School Diploma</p><span>2019—2021</span></div></div>
              <div className="achievement-card"><img src="/manus-storage/chess-detail_cec39c73.jpg" alt="Chess knight representing strategic thinking" /><div className="achievement-copy"><p className="kicker">Selected achievements</p><p>Chess Master — awarded by the Association of Chess Masters.</p><p>Promoted to Supervisor (“Jump”) — recognized and advanced into a supervisory role.</p></div></div>
            </div>
          </section>

          <section id="contact" className="contact-section">
            <div className="contact-art"><img src="/manus-storage/support-detail_735c04d9.jpg" alt="Abstract path through complex cases" /></div>
            <div className="contact-copy"><p className="kicker">06 / Contact</p><h2>Let’s make the<br /><em>next step clear.</em></h2><p>If you’re looking for someone who can bring composure, speed, and sound judgment to complex support moments, I’d be glad to hear from you.</p><div className="contact-actions"><a href="mailto:eartiaga65@gmail.com" className="contact-link"><Mail size={17} /> eartiaga65@gmail.com</a><a href="tel:+639762773260" className="contact-link"><Phone size={17} /> +63 976 277 3260</a></div></div>
          </section>

          <footer className="site-footer"><span>Edward Artiaga / Resume 2026</span><span>Parañaque City, Philippines</span><button onClick={() => navigate("profile")}>Back to top ↑</button></footer>
        </div>
      </div>
    </main>
  );
}
