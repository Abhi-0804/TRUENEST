import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/aboutus.module.css"; // CSS Module

export default function AboutUs() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1>Simplify Homeownership</h1>
          <p>
            We’re redefining mortgages with speed, transparency, and
            accessibility—powered by innovation and empathy.
          </p>
          <button className={styles.ctaBtn}>Join Now</button>
        </div>
      </section>

      {/* Our Mission */}
      <section className={`${styles.section} ${styles.altBg}`}>
        <h2 className={styles.sectionTitle}>Our Mission</h2>
        <div className={`${styles.textImage} ${styles.reveal}`}>
          <div className={styles.textCard}>
            <p>
              Our mission is simple yet powerful: to make{" "}
              <span className={styles.highlight}>homeownership accessible</span>,
              transparent, and stress-free for everyone.
            </p>
            <p>
              By combining{" "}
              <span className={styles.highlight}>cutting-edge technology</span>{" "}
              with human empathy, we transform mortgages into a journey that
              feels <strong>empowering</strong>, not overwhelming.
            </p>
          </div>
          <div className={`${styles.imageBlock} ${styles.imageHover}`}>
            <img src="/evolution.jpg" alt="Our mission story" />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className={styles.sectionAlt}>
        <h2 className={styles.sectionTitle}>Our Story</h2>
        <div className={`${styles.textImage} ${styles.reveal}`}>
          <div className={`${styles.imageBlock} ${styles.imageHover}`}>
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" alt="Team collaboration" />

          </div>
          <div className={styles.textCard}>
            <p>
              In 2014, our founder faced the frustrations of a broken mortgage
              system. What started as a <strong>personal struggle</strong> soon
              became a vision to reinvent the entire process.
            </p>
            <p>
              Today, that spark has grown into a{" "}
              <span className={styles.highlight}>nationwide movement</span>,
              redefining mortgages for over{" "}
              <strong>1 million homeowners</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* How We’re Changing Things */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>How We’re Changing Things</h2>
        <div className={`${styles.textImage} ${styles.reveal}`}>
          <div className={styles.textCardWide}>
            <p>
              We challenge outdated systems with <strong>speed</strong>,{" "}
              <strong>clarity</strong>, and <strong>empathy</strong>. Every
              detail — from application to approval — is built with{" "}
              <span className={styles.highlight}>your benefit first</span>.
            </p>
            <p>
              Through <span className={styles.highlight}>AI innovation</span>{" "}
              and <span className={styles.highlight}>human-first design</span>,
              we’re shaping a financial landscape where homeowners feel{" "}
              <strong>empowered</strong>, <strong>informed</strong>, and{" "}
              <strong>in control</strong> of their future.
            </p>
            <div className={styles.statsRow}>
              <div className={styles.statBox}>
                <h3>95%</h3>
                <p>Faster Approvals</p>
              </div>
              <div className={styles.statBox}>
                <h3>1M+</h3>
                <p>Happy Customers</p>
              </div>
              <div className={styles.statBox}>
                <h3>50+</h3>
                <p>States Served</p>
              </div>
            </div>
          </div>
          <div className={`${styles.imageBlock} ${styles.imageHover}`}>
            <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d" alt="Futuristic technology" />

          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={styles.timeline}>
        <h2 className={styles.sectionTitleLight}>Our Journey</h2>
        <div className={styles.timelineContainer}>
          {[
            { year: "2014", text: "Founded with a vision" },
            { year: "2016", text: "Launched our first digital mortgage" },
            { year: "2018", text: "10,000+ happy homeowners" },
            { year: "2020", text: "Nationwide expansion" },
            { year: "2022", text: "Recognized as fintech leader" },
            { year: "2024", text: "1M+ customers empowered" },
          ].map((item, i) => (
            <div key={i} className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <span className={styles.timelineYear}>{item.year}</span>
              <div className={styles.timelineBox}>{item.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Related Posts */}
      <section className={styles.related}>
        <h2 className={styles.sectionTitle}>Related Posts</h2>
        <div className={styles.relatedGrid}>
          {[
            {
              title: "Buying Your First Home",
              link: "#",
              img: "/buying_home.jpg",
            },
            {
              title: "Smart Mortgage Tips",
              link: "#",
              img: "/mortagecalculator.webp",
            },
            {
              title: "Transparency Matters",
              link: "#",
              img: "/Cleartransparent.jpeg",
            },
          ].map((post, i) => (
            <div key={i} className={styles.relatedCard}>
              <img src={post.img} alt={post.title} />
              <div className={styles.cardOverlay}></div>
              <div className={styles.cardContent}>
                <h3>{post.title}</h3>
                <a href={post.link} className={styles.readBtn}>
                  Read Now →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
