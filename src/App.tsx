
import { useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Heart,
  Mail,
  Sparkles,
} from "lucide-react";
import "./App.css";

const projects = [
  {
    number: "01",
    title: "MetricFlow",
    type: "SaaS Dashboard · UI/UX Design",
    color: "lilac",
    symbol: "✳",
    description:
      "A centralised analytics dashboard designed to help e-commerce businesses track revenue, monitor performance, and understand customer growth.",
    link: "https://www.figma.com/proto/gPttNVHxCPkxigmZHerSmB/Untitled?node-id=2-2&p=f&t=vsOcczqCWpaydc7N-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2",
  },
  {
    number: "02",
    title: "Coming Soon",
    type: "Future Exploration",
    color: "butter",
    symbol: "♡",
    description:
      "Room for the next idea, a new challenge, and another opportunity to learn.",
  },
];

function App() {
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollProjects = (direction: number) => {
    projectsRef.current?.scrollBy({
      left: direction * 340,
      behavior: "smooth",
    });
  };

  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#home">
          ankita<span>✳</span>
        </a>

        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact ↗</a>
          <a
  href="/resume.pdf"
  target="_blank"
  rel="noreferrer"
>
  View Resume ↗
</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="eyebrow">
            <span className="status-dot" />
            ASPIRING UI/UX DESIGNER
          </div>

          <h1>
            Making the
            <br />
            digital world
            <br />
            <span className="highlight">feel more human.</span>
          </h1>

          <p className="hero-description">
            Hi, I'm Ankita! I love exploring colorful interfaces,
            thoughtful interactions, and ways to make digital
            experiences feel a little more delightful.
          </p>

          <div className="hero-actions">
            <a className="button-primary" href="#work">
              Explore my work <ArrowDown size={17} />
            </a>
            <a className="text-link" href="#about">
              A little about me ↗
            </a>
          </div>
        </motion.div>

        <div className="playground" aria-label="Interactive design notes">
          <motion.div
            className="blob blob-lilac"
            animate={{ rotate: [0, 8, -5, 0], y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            <Sparkles size={44} />
          </motion.div>

          <motion.div
            className="note note-yellow"
            drag
            dragMomentum={false}
            whileHover={{ scale: 1.04, rotate: 0 }}
            whileDrag={{ scale: 1.08, zIndex: 10 }}
            initial={{ rotate: 8 }}
            aria-label="Draggable design note"
          >
            <span className="note-label">A LITTLE REMINDER</span>
            <p>Good design is how it feels, not just how it looks.</p>
            <span className="note-doodle">♡</span>
          </motion.div>

          <motion.div
            className="note note-pink"
            drag
            dragMomentum={false}
            whileHover={{ scale: 1.04, rotate: 0 }}
            whileDrag={{ scale: 1.08, zIndex: 10 }}
            initial={{ rotate: -8 }}
          >
            <span className="note-label">CURRENTLY INTO</span>
            <p>Colors, tiny details & happy interfaces.</p>
            <Heart size={22} className="note-heart" />
          </motion.div>

          <motion.div
            className="round-sticker"
            animate={{ rotate: 360 }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          >
            DESIGN
            <br />
            WITH
            <br />
            FEELING ✳
          </motion.div>

          <div className="playground-caption">
            <span>✳</span> a little space to play
          </div>
        </div>

        <a className="scroll-hint" href="#work">
          SCROLL TO EXPLORE ↓
        </a>
      </section>

      <section className="work-section section-pad" id="work">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <span className="eyebrow">A FEW THINGS I'VE MADE</span>
            <h2>Little ideas, big feelings<span>.</span></h2>
            <p>A closer look at one idea, with room for the next.</p>
          </div>

          <div className="scroll-controls">
            <button
              onClick={() => scrollProjects(-1)}
              aria-label="Scroll projects left"
            >
              <ArrowLeft size={19} />
            </button>
            <button
              onClick={() => scrollProjects(1)}
              aria-label="Scroll projects right"
            >
              <ArrowRight size={19} />
            </button>
          </div>
        </motion.div>

        <div className="project-track" ref={projectsRef}>
          {projects.map((project) => (
            <motion.article
              key={project.number}
              className={`project-card ${project.color}`}
              whileHover={{ y: -7 }}
              transition={{ duration: 0.2 }}
            >
              <div className="project-art">
                <span className="project-number">{project.number}</span>
                <span className="project-symbol">{project.symbol}</span>

                {project.number === "01" ? (
                  <img
                    className="project-cover-image"
                    src="/images/metricflow-dashboard.png"
                    alt="MetricFlow SaaS analytics dashboard overview"
                  />
                ) : (
                  <div className="abstract-art">✳　✿　♡</div>
                )}
              </div>

              <div className="project-info">
                <div>
                  <span className="project-type">{project.type}</span>
                  <h3>{project.title}</h3>
                </div>
{project.link ? (
  <a
    href="#case-study"
    aria-label={`View ${project.title} case study`}
  >
    <ArrowUpRight size={21} />
  </a>
) : (
  <span className="project-coming-soon" aria-label="Coming soon">♡</span>
)}

              </div>
            </motion.article>
          ))}
        </div>

        <p className="track-hint">
          ↔ A little nudge to scroll and explore
        </p>
      </section>

      <section className="case-section section-pad" id="case-study">
        <motion.div
          className="metricflow-intro"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="metricflow-intro-copy">
            <span className="eyebrow">FEATURED PROJECT · 01</span>
            <p className="metricflow-kicker">A SaaS analytics dashboard concept</p>
            <h2>Meet <span>MetricFlow.</span></h2>
            <p>
              Turning complex business data into clearer, more approachable
              insights. MetricFlow brings revenue, sales, and customer metrics
              together in one dashboard concept for e-commerce teams.
            </p>
            <div className="tag-list">
              <span>UI/UX Design</span>
              <span>SaaS Dashboard</span>
              <span>Data Visualisation</span>
              <span>Figma</span>
              <span>Interaction Design</span>
            </div>
            <a
              className="button-primary"
              href="https://www.figma.com/proto/gPttNVHxCPkxigmZHerSmB/Untitled?node-id=2-2&p=f&t=vsOcczqCWpaydc7N-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2"
              target="_blank"
              rel="noreferrer"
            >
              View Figma Prototype <ArrowUpRight size={17} />
            </a>
            <p className="metricflow-note">Personal concept project · Designed in Figma · Desktop dashboard</p>
          </div>
          <div className="metricflow-hero-image">
            <img
              src="/images/metricflow-dashboard.png"
              alt="MetricFlow dashboard overview showing revenue, orders, customers and conversion rate"
            />
          </div>
        </motion.div>

        <div className="metricflow-section-heading">
          <span className="eyebrow">INSIDE THE DASHBOARD</span>
          <h2>One workspace, <span>multiple insights.</span></h2>
          <p>Explore the key screens and reporting flow designed for MetricFlow.</p>
        </div>

        <div className="metricflow-gallery">
          <figure className="metricflow-shot metricflow-shot-wide">
            <img src="/images/metricflow-analytics.png" alt="MetricFlow revenue analytics screen with KPI cards and revenue trend chart" loading="lazy" />
            <figcaption><strong>Revenue analytics</strong><span>Track revenue, paid orders, new customers and conversion rate.</span></figcaption>
          </figure>
          <figure className="metricflow-shot">
            <img src="/images/metricflow-reports.png" alt="MetricFlow reports screen listing revenue, sales and customer reports" loading="lazy" />
            <figcaption><strong>Reports</strong><span>Navigate between focused performance reports.</span></figcaption>
          </figure>
          <figure className="metricflow-shot">
            <img src="/images/metricflow-customers.png" alt="MetricFlow customer growth report with new customers and conversion metrics" loading="lazy" />
            <figcaption><strong>Customer growth</strong><span>Review customer acquisition and conversion performance.</span></figcaption>
          </figure>
          <figure className="metricflow-shot metricflow-shot-wide">
            <img src="/images/metricflow-export.png" alt="MetricFlow revenue report with export dialog open and CSV or PDF options" loading="lazy" />
            <figcaption><strong>Export workflow</strong><span>Choose CSV or PDF before preparing a report export.</span></figcaption>
          </figure>
        </div>

        <section className="metricflow-story" aria-label="MetricFlow case study details">
          <div className="metricflow-story-heading">
            <span className="eyebrow">THE DESIGN CHALLENGE</span>
            <h2>From scattered metrics to <span>one clear picture.</span></h2>
            <p>
              E-commerce teams may need to review several kinds of performance
              information at once. This concept explores how a single workspace
              can make those signals easier to scan and compare.
            </p>
          </div>
          <div className="metricflow-story-grid">
            <article className="metricflow-story-card story-lilac">
              <span>01 · THE OPPORTUNITY</span>
              <h3>Bring key metrics together</h3>
              <p>
                Give revenue, paid orders, customer growth and conversion
                performance a consistent home instead of making people jump
                between disconnected views.
              </p>
            </article>
            <article className="metricflow-story-card story-peach">
              <span>02 · THE APPROACH</span>
              <h3>Make information scannable</h3>
              <p>
                Use summary cards for at-a-glance numbers, a trend chart for
                context, and focused report pages for a closer look.
              </p>
            </article>
            <article className="metricflow-story-card story-yellow">
              <span>03 · THE INTERACTION</span>
              <h3>Keep reporting straightforward</h3>
              <p>
                Provide a clear route from the reports list to an individual
                summary, then present CSV and PDF choices in an export dialog.
              </p>
            </article>
          </div>
          <div className="metricflow-learning">
            <div>
              <span className="eyebrow">REFLECTION</span>
              <h3>What this project helped me explore</h3>
            </div>
            <p>
              MetricFlow gave me an opportunity to practise dashboard information
              hierarchy, data visualisation, consistency across related screens,
              and the small interaction details that connect a reporting flow.
            </p>
          </div>
        </section>

        <div className="metricflow-details">
          <div>
            <span className="eyebrow">PROJECT SNAPSHOT</span>
            <h3>Designing for clarity.</h3>
            <p>
              The design brings key performance indicators, revenue trends and
              focused reports into a consistent dashboard experience. The goal
              is to help users move from a quick overview to a more detailed
              report without losing context.
            </p>
          </div>
          <div className="metricflow-meta">
            <p><span>Role</span><strong>UI/UX Designer</strong></p>
            <p><span>Tool</span><strong>Figma</strong></p>
            <p><span>Platform</span><strong>Desktop dashboard</strong></p>
            <p><span>Focus</span><strong>Analytics · Reports · Interaction</strong></p>
          </div>
        </div>
        <p className="disclaimer metricflow-disclaimer">
          MetricFlow is a self-initiated UI/UX concept. The screens demonstrate
          the proposed interface and prototype interactions; this is not a live product.
        </p>
        <div className="metricflow-final-cta">
          <div>
            <span className="eyebrow">WANT TO EXPLORE THE FLOW?</span>
            <h3>Take a closer look at the prototype.</h3>
          </div>
          <a
            className="button-primary"
            href="https://www.figma.com/proto/gPttNVHxCPkxigmZHerSmB/Untitled?node-id=2-2&p=f&t=vsOcczqCWpaydc7N-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2"
            target="_blank"
            rel="noreferrer"
          >
            Explore prototype <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      <section className="about-section section-pad" id="about">
        <div className="about-note">
          <span className="eyebrow">A LITTLE ABOUT ME</span>
          <h2>Curious by nature. Designer by choice<span>♡</span></h2>
          <p>
            I'm a budding UI/UX designer learning to turn
            everyday problems into thoughtful digital
            experiences. I enjoy exploring visual systems,
            experimenting in Figma, and learning why interfaces
            work the way they do.
          </p>
          <p>
            My goal is to make things that are not only useful,
            but also feel good to use.
          </p>
          <div className="skill-pills">
            <span>Figma</span><span>UI Design</span>
            <span>Wireframing</span><span>Prototyping</span>
            <span>Visual Design</span>
          </div>
        </div>
        <div className="about-sticker">
          <span>MAKE</span>
          <span>ROOM</span>
          <span>FOR</span>
          <span>IDEAS ✳</span>
        </div>
      </section>

      <footer className="footer section-pad" id="contact">
        <span className="eyebrow">HAVE SOMETHING IN MIND?</span>
        <h2>Let's make something lovely.</h2>
        <p>I'm excited to learn, collaborate, and grow.</p>
        <div className="footer-links">
          <a href="mailto:p2005ankita@gmail.com">
            <Mail size={17} /> Say hello
          </a>
          <a
            href="https://www.linkedin.com/in/ankita-panigrahi-014756299"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <ArrowUpRight size={16} />
          </a>
          


<a
  href="/resume.pdf"
  download="Ankita_Panigrahi_Resume.pdf"
  className="nav-resume"
>
  Download Resume ↓
</a>

        </div>
        <div className="footer-bottom">
          <a className="brand" href="#home">Ankita Panigrahi<span>✳</span></a>
          <span>Made with curiosity & a little bit of color.</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}

export default App;
