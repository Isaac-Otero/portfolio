import React, { useState } from "react";

const cards = [
  { jp: "きく", reading: "kiku", en: "to ask" },
  { jp: "びょういん", reading: "byouin", en: "hospital" },
  { jp: "しゅくだい", reading: "shukudai", en: "homework" },
  { jp: "みどり", reading: "midori", en: "green" },
];

const clean = (value) => value.toLowerCase().replace(/[^a-z]/g, "");

const JapaneseDrill = () => {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState(null);
  const [streak, setStreak] = useState(2);
  const card = cards[index];

  const checkAnswer = (event) => {
    event.preventDefault();
    const correct = clean(answer) === clean(card.reading) || clean(answer) === clean(card.en);
    setResult(correct ? "Correct" : `Try ${card.reading} or "${card.en}"`);
    setStreak((current) => correct ? current + 1 : 0);
  };

  const nextCard = () => {
    setIndex((current) => (current + 1) % cards.length);
    setAnswer("");
    setResult(null);
  };

  return (
    <main className="ai-page">
      <section className="ai-intro">
        <p className="ai-kicker">AI-built study tool</p>
        <h1>Japanese Drill</h1>
        <p>
          A browser-based vocabulary drill with romaji/kana matching, answer checking,
          review flow, and a deck built from my study material. This is a small active
          snapshot for the portfolio.
        </p>
      </section>

      <section className="drill-demo" aria-label="Japanese Drill interactive demo">
        <div className="drill-card">
          <div className="drill-status">
            <span>Card {index + 1}/{cards.length}</span>
            <span>{streak} streak</span>
          </div>
          <div className="jp-word">{card.jp}</div>
          <p className="drill-prompt">Type the reading or meaning</p>
          <form onSubmit={checkAnswer}>
            <input
              value={answer}
              onChange={(event) => setAnswer(event.target.value)}
              placeholder="example: kiku"
              aria-label="Answer"
            />
            <button type="submit">Check</button>
          </form>
          <div className={`drill-result ${result === "Correct" ? "correct" : ""}`}>
            {result || "Waiting for your answer"}
          </div>
          <button className="secondary-button" onClick={nextCard}>Next card</button>
        </div>

        <div className="feature-panel">
          <h2>What the full app shows</h2>
          <ul>
            <li>Japanese vocabulary deck loaded from structured data</li>
            <li>Romaji and kana answer matching</li>
            <li>Close-answer grading for small typos</li>
            <li>Session stats and spaced-review style practice</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default JapaneseDrill;
