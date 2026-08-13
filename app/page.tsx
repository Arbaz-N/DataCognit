"use client";

import { useEffect, useState } from "react";
import "./page.css";

const technologies = [
  {
    name: "Databricks",
    text: "Lakehouse • Data Engineering • AI/ML",
  },
  {
    name: "Snowflake",
    text: "Cloud Data Platform • Analytics",
  },
  {
    name: "Microsoft Azure",
    text: "Cloud • Integration • Data Services",
  },
  {
    name: "AWS",
    text: "Cloud Infrastructure • Data Services",
  },
  {
    name: "Informatica",
    text: "Enterprise Data Integration",
  },
  {
    name: "Oracle",
    text: "Enterprise Database Solutions",
  },
  {
    name: "SQL Server",
    text: "Database • Analytics • BI",
  },
  {
    name: "Salesforce",
    text: "CRM • Enterprise Data",
  },
];

const solutions = [
  {
    number: "01",
    icon: "◎",
    title: "Data Integration",
    description:
      "Integrate disparate data sources and build a reliable single source of truth.",
  },
  {
    number: "02",
    icon: "◯",
    title: "Modern Data Platforms",
    description:
      "Build scalable and future-ready data platforms on modern cloud infrastructure.",
  },
  {
    number: "03",
    icon: "↗",
    title: "Analytics & BI",
    description:
      "Transform data into real-time insights and meaningful visualizations.",
  },
  {
    number: "04",
    icon: "✦",
    title: "AI & Machine Learning",
    description:
      "Unlock the potential of your data with AI and machine learning solutions.",
  },
  {
    number: "05",
    icon: "◇",
    title: "Data Governance",
    description:
      "Improve data quality, security, compliance and trust across your organization.",
  },
  {
    number: "06",
    icon: "⌘",
    title: "API Management",
    description:
      "Secure, monitor and scale enterprise APIs across your organization.",
  },
];

const caseStudies = [
  {
    category: "Retail & E-commerce",
    title: "Modern Data Platform for a Global Retailer",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80",
    stats: ["60% Faster Data Processing", "40% Reporting Efficiency"],
  },
  {
    category: "Healthcare",
    title: "Data Integration & Analytics for Healthcare",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
    stats: ["50% Faster Decisions", "35% Improved Accuracy"],
  },
  {
    category: "Financial Services",
    title: "Snowflake Implementation for Financial Services",
    image:
      "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=900&q=80",
    stats: ["70% Faster Data Access", "45% Reduction in ETL Time"],
  },
];

export default function Home() {
  const [activeTech, setActiveTech] = useState(technologies[0]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <main className={visible ? "page loaded" : "page"}>

      {/* ================= HEADER ================= */}

      <header className="header">
        <div className="brand">
          <div className="brand-symbol">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div>
            <div className="brand-name">
              Data<span>Cognit</span>
            </div>

            <div className="brand-tagline">
              Unify Your Data, Amplify Your Insights
            </div>
          </div>
        </div>

        <nav>
          <a className="active" href="#home">
            Home
          </a>
          <a href="#solutions">Solutions</a>
          <a href="#services">Services</a>
          <a href="#technology">Technologies</a>
          <a href="#industries">Industries</a>
          <a href="#cases">Case Studies</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact Us</a>
        </nav>

        <button className="header-button">
          Talk to an Aslam
          <span>→</span>
        </button>
      </header>

      {/* ================= HERO ================= */}

      <section id="home" className="hero">

        <div className="hero-left">

          <div className="hero-label">
            DATA ENGINEERING • CLOUD • AI • ANALYTICS
          </div>

          <h1>
            Transforming Data
            <br />
            Into <span>Business Impact</span>
          </h1>

          <p>
            End-to-end data engineering, integration and analytics
            solutions that turn complex data into measurable business
            outcomes.
          </p>

          <div className="hero-buttons">
            <button className="primary-button">
              Explore Solutions
              <span>→</span>
            </button>

            <button className="video-button">
              <span className="play">▶</span>
              Watch Video
            </button>
          </div>

          {/* STATS */}

          <div className="stats">

            <div className="stat">
              <strong>10+</strong>
              <span>Years of Experience</span>
            </div>

            <div className="stat">
              <strong>150+</strong>
              <span>Projects Delivered</span>
            </div>

            <div className="stat">
              <strong>50+</strong>
              <span>Enterprise Clients</span>
            </div>

            <div className="stat">
              <strong>30+</strong>
              <span>Expert Consultants</span>
            </div>

          </div>
        </div>

        {/* ================= HERO VISUAL ================= */}

        <div className="hero-visual">

          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>

          <div className="data-particle particle-one"></div>
          <div className="data-particle particle-two"></div>
          <div className="data-particle particle-three"></div>
          <div className="data-particle particle-four"></div>
          <div className="data-particle particle-five"></div>

          {/* CENTRAL PLATFORM */}

          <div className="platform">

            <div className="platform-top">
              <div className="cloud-symbol">☁</div>
            </div>

            <div className="platform-body">
              <span>DataCognit</span>
            </div>

          </div>

          {/* DATA NODES */}

          <div className="visual-node node-data">
            <strong>DATA</strong>
            <span>Collect & Connect</span>
          </div>

          <div className="visual-node node-platform">
            <strong>PLATFORM</strong>
            <span>Integrate & Transform</span>
          </div>

          <div className="visual-node node-insight">
            <strong>INSIGHT</strong>
            <span>Analyze & Predict</span>
          </div>

          <div className="visual-node node-impact">
            <strong>IMPACT</strong>
            <span>Drive Business Value</span>
          </div>

          {/* MINI DASHBOARD */}

          <div className="mini-dashboard">
            <div className="dashboard-header">
              Analytics
              <span>●</span>
            </div>

            <div className="bars">
              <i style={{ height: "35%" }}></i>
              <i style={{ height: "55%" }}></i>
              <i style={{ height: "45%" }}></i>
              <i style={{ height: "75%" }}></i>
              <i style={{ height: "90%" }}></i>
            </div>

            <div className="dashboard-line"></div>
          </div>

        </div>
      </section>

      {/* ================= SOLUTIONS ================= */}

      <section id="solutions" className="solutions section">

        <div className="section-title center">

          <span>SOLUTIONS THAT DRIVE VALUE</span>

          <h2>
            What challenge are you
            <br />
            trying to solve?
          </h2>

        </div>

        <div className="solution-grid">

          {solutions.map((solution) => (
            <div className="solution-card" key={solution.number}>

              <div className="solution-icon">
                {solution.icon}
              </div>

              <small>{solution.number}</small>

              <h3>{solution.title}</h3>

              <p>{solution.description}</p>

              <a href="#">
                Learn More
                <span>→</span>
              </a>

            </div>
          ))}

        </div>
      </section>

      {/* ================= TECHNOLOGIES ================= */}

      <section id="technology" className="technology section">

        <div className="section-title center">
          <span>TECHNOLOGIES WE WORK WITH</span>
        </div>

        <div className="technology-layout">

          <div className="technology-list">

            {technologies.map((tech) => (
              <button
                key={tech.name}
                className={
                  activeTech.name === tech.name
                    ? "technology-item selected"
                    : "technology-item"
                }
                onMouseEnter={() => setActiveTech(tech)}
              >
                {tech.name}

                <span>→</span>
              </button>
            ))}

          </div>

          <div className="technology-info">

            <div className="tech-glow"></div>

            <span>OUR TECHNOLOGY EXPERTISE</span>

            <h2>{activeTech.name}</h2>

            <p>{activeTech.text}</p>

            <div className="tech-visual">

              <div className="tech-circle"></div>

              <div className="tech-ring ring-one"></div>
              <div className="tech-ring ring-two"></div>

              <div className="tech-core">
                {activeTech.name.substring(0, 2)}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= ARCHITECTURE ================= */}

      <section id="services" className="architecture-section">

        <div className="architecture-overlay"></div>

        <div className="architecture-content">

          <div className="section-title">

            <span>OUR PLATFORM ARCHITECTURE</span>

            <h2>
              From Data
              <br />
              to Decisions
            </h2>

          </div>

          <div className="architecture-flow">

            {[
              ["01", "Data Sources", "Databases · APIs · Files"],
              ["02", "Data Integration", "ETL · ELT · Data Quality"],
              ["03", "Cloud Data Platform", "Scalable · Secure"],
              ["04", "AI & Analytics", "ML · BI · Analytics"],
              ["05", "Business Insights", "Dashboards · Decisions"],
            ].map((item, index) => (
              <div className="architecture-step" key={item[0]}>

                <div className="architecture-circle">
                  {index + 1}
                </div>

                <small>{item[0]}</small>

                <strong>{item[1]}</strong>

                <p>{item[2]}</p>

                {index < 4 && (
                  <div className="flow-arrow">
                    →
                  </div>
                )}

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= CASE STUDIES ================= */}

      <section id="cases" className="cases section">

        <div className="case-heading">

          <div className="section-title">

            <span>CASE STUDIES</span>

            <h2>
              Delivering Real
              <br />
              Business Impact
            </h2>

          </div>

          <button className="outline-button">
            View All Case Studies →
          </button>

        </div>

        <div className="case-grid">

          {caseStudies.map((item) => (
            <article className="case-card" key={item.title}>

              <div className="case-image">

                <img
                  src={item.image}
                  alt={item.title}
                />

                <span>{item.category}</span>

              </div>

              <div className="case-content">

                <h3>{item.title}</h3>

                <div className="case-stats">

                  {item.stats.map((stat) => (
                    <div key={stat}>
                      <strong>{stat.split(" ")[0]}</strong>
                      <span>
                        {stat.substring(stat.indexOf(" ") + 1)}
                      </span>
                    </div>
                  ))}

                </div>

                <a href="#">
                  Read More →
                </a>

              </div>
            </article>
          ))}

        </div>
      </section>

      {/* ================= CTA ================= */}

      <section id="contact" className="cta">

        <div className="cta-particles"></div>

        <div>

          <span>LET'S BUILD SOMETHING BETTER</span>

          <h2>
            Let's solve your
            <br />
            data challenge together.
          </h2>

        </div>

        <button className="primary-button">
          Talk to a Data Expert
          <span>→</span>
        </button>

      </section>

      {/* ================= FOOTER ================= */}

      <footer id="about">

        <div className="footer-top">

          <div className="footer-brand">

            <div className="brand-name">
              Data<span>Cognit</span>
            </div>

            <p>
              Unify Your Data, Amplify Your Insights
            </p>

            <div className="socials">
              <span>in</span>
              <span>𝕏</span>
              <span>f</span>
              <span>▶</span>
            </div>

          </div>

          <div className="footer-column">
            <h4>Solutions</h4>
            <a href="#">Data Integration</a>
            <a href="#">Modern Data Platforms</a>
            <a href="#">Analytics & BI</a>
            <a href="#">AI & Machine Learning</a>
            <a href="#">API Management</a>
          </div>

          <div className="footer-column">
            <h4>Services</h4>
            <a href="#">Data Engineering</a>
            <a href="#">Cloud Solutions</a>
            <a href="#">Data Migration</a>
            <a href="#">Data Governance</a>
            <a href="#">Managed Services</a>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <a href="#">About Us</a>
            <a href="#">Case Studies</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">Contact Us</a>
          </div>

        </div>

        <div className="footer-bottom">

          <span>
            © 2026 DataCognit. All Rights Reserved.
          </span>

          <div>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </div>

        </div>

      </footer>

    </main>
  );
}