
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
    title: "E-commerce dashboard design",
    type: "Dashboard · UI/UX Design",
    color: "lilac",
    symbol: "✳",
    description:
      "Exploring how thoughtful layouts and horizontally scrollable cards can make store analytics easier to navigate.",
       link: "https://www.figma.com/proto/U4iqlnY9kT9iFRkG9k5pyO/Untitled?node-id=8-15&t=Y6v8XFcicNiyojoM-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=8%3A15",
  
  },
  {
    number: "03",
    title: "Coming soon",
    type: "Future exploration",
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
  href="https://drive.google.com/file/d/1AHwatAvfJ8LUeXMwYGle__ph94wHLbUI/view?usp=drive_link"
  target="_blank"
  rel="noreferrer"
  className="nav-resume"
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
            <p>One featured project, and a little room to experiment.</p>
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
                  <div className="dashboard-preview">
                    <div className="mini-topbar">
                      <span>your store ✳</span>
                      <span>•••</span>
                    </div>
                    <div className="mini-stats">
                      <div>
                        <small>Total sales</small>
                        <strong>$24.8k</strong>
                      </div>
                      <div>
                        <small>Orders</small>
                        <strong>1,248</strong>
                      </div>
                    </div>
                    <div className="mini-chart">
                      {[35, 55, 43, 75, 48, 88, 65, 95, 70].map(
                        (height, index) => (
                          <span
                            key={index}
                            style={{ height: `${height}%` }}
                          />
                        )
                      )}
                    </div>
                    <div className="mini-footer">
                      ↗ A closer look at the numbers
                    </div>
                  </div>
                ) : (
                  <div className="abstract-art">
                    {project.number === "02" ? "✳  ✿  ♡" : "?"}
                  </div>
                )}
              </div>

              <div className="project-info">
                <div>
                  <span className="project-type">{project.type}</span>
                  <h3>{project.title}</h3>
                </div>
<a
  href={project.link}
  target="_blank"
  rel="noreferrer"
  aria-label={`Open ${project.title} in Figma`}
>
  <ArrowUpRight size={21} />
</a>

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
          className="case-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="case-copy">
            <span className="eyebrow">FEATURED CASE STUDY · 01</span>
            <h2>Making store insights easier to explore.</h2>
            <p>
              An e-commerce dashboard UI concept focused on
              information hierarchy, analytics cards, and a
              more approachable visual experience.
            </p>
            <div className="tag-list">
              <span>UI Design</span>
              <span>Dashboard</span>
              <span>Figma</span>
              <span>Interaction exploration</span>
            </div>
            <a className="button-primary" href="#contact">
              Let's talk about the project <ArrowUpRight size={17} />
            </a>
          </div>
        </motion.div>
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
  href="https://drive.google.com/file/d/1AHwatAvfJ8LUeXMwYGle__ph94wHLbUI/view?usp=sharing"
  download="Ankita_Panigrahi_Resume.pdf"
  className="resume-button"
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
