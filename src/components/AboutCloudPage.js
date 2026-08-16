import React from "react";
import { Link } from "react-router-dom";

const profile = new URL('../assets/Me.jpeg', import.meta.url).href;

const AboutCloudPage = () => {
  return (
    <main className="about-cloud-page">
      <div className="cloud-drift c1" aria-hidden="true" />
      <div className="cloud-drift c2" aria-hidden="true" />
      <div className="cloud-drift c3" aria-hidden="true" />

      <section className="about-cloud-panel">
        <div className="about-cloud-portrait">
          <img src={profile} alt="Isaac Otero" />
        </div>

        <div className="about-cloud-copy">
          <p className="cloud-kicker">More about me</p>
          <h1>Isaac Otero</h1>
          <p>
            I am a developer who likes turning ideas into interactive things people can
            actually use. I have been using AI as a creative coding partner to build
            study tools, live event games, portfolio experiments, and playful UI ideas.
          </p>
          <p>
            I am currently living in San Diego after graduating from UCSD. I enjoy the
            challenge of programming because it rewards patience, problem solving, and
            that moment when something finally works.
          </p>
          <p>
            Outside of coding, I like cooking, volunteering at church events, helping
            with youth outreach, and being part of the food team. A lot of what I build
            comes from that mix of software, community, and wanting useful tools to feel
            a little more personal.
          </p>

          <div className="cloud-tag-row" aria-label="About Isaac highlights">
            <span>React</span>
            <span>AI-assisted builds</span>
            <span>event tools</span>
            <span>study apps</span>
            <span>community</span>
          </div>

          <Link className="cloud-back-link" to="/">
            Back home
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AboutCloudPage;
