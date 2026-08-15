import React, { useState } from "react";

const questions = [
  {
    category: "Cookout",
    lead: "Americans eat OVER or UNDER",
    number: "50 MILLION",
    tail: "hot dogs on the Fourth of July alone",
    answer: "OVER",
    fact: "The real estimate is around 150 million in one day.",
  },
  {
    category: "Cold Treats",
    lead: "The average American eats OVER or UNDER",
    number: "25 POUNDS",
    tail: "of ice cream every year",
    answer: "UNDER",
    fact: "The actual estimate is closer to 18 pounds per year.",
  },
  {
    category: "Travel",
    lead: "AAA expected OVER or UNDER",
    number: "100 MILLION",
    tail: "Americans to travel 50+ miles over Fourth of July week",
    answer: "UNDER",
    fact: "Still a huge travel week, just below that threshold.",
  },
];

const qrTiles = Array.from({ length: 49 }, (_, i) => (i * 7 + 3) % 11 < 5);

const SummerOverUnder = () => {
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [votes, setVotes] = useState({ over: 8, under: 5 });
  const [choice, setChoice] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const question = questions[index];

  const total = votes.over + votes.under;
  const overPct = total ? Math.round((votes.over / total) * 100) : 0;
  const underPct = total ? 100 - overPct : 0;

  const vote = (nextChoice) => {
    if (!started) return;
    if (choice === nextChoice) return;
    setVotes((current) => {
      const updated = { ...current };
      if (choice) updated[choice] -= 1;
      updated[nextChoice] += 1;
      return updated;
    });
    setChoice(nextChoice);
  };

  const nextQuestion = () => {
    setIndex((current) => (current + 1) % questions.length);
    setVotes({ over: 8, under: 5 });
    setChoice(null);
    setRevealed(false);
  };

  return (
    <main className="ai-page">
      <section className="ai-intro">
        <p className="ai-kicker">AI-built live event game</p>
        <h1>Summer Over/Under</h1>
        <p>
          A projector-led trivia game where the room scans a QR code, votes from phones,
          and sees the bars update live. This portfolio version is a working snapshot of
          the main flow.
        </p>
      </section>

      <section className="summer-demo" aria-label="Summer Over Under interactive demo">
        {!started ? (
          <div className="projector-snapshot pregame-snapshot">
            <div className="projector-top">
              <span>Welcome</span>
              <span>{total} joined</span>
            </div>
            <div className="join-screen">
              <div className="qr-grid large" aria-hidden="true">
                {qrTiles.map((filled, i) => <span key={i} className={filled ? "filled" : ""} />)}
              </div>
              <div>
                <p className="join-label">Scan to vote</p>
                <h2>summer-over-under.app</h2>
              </div>
            </div>
            <button className="start-button" onClick={() => setStarted(true)}>Start game</button>
          </div>
        ) : (
          <div className="projector-snapshot">
            <div className="projector-top">
              <span>{question.category}</span>
              <span>{total} joined</span>
            </div>
            <div className="projector-question">
              <p>{question.lead}</p>
              <strong>{question.number}</strong>
              <p>{question.tail}</p>
            </div>
            <div className="vote-bars" aria-label="Vote totals">
              <div className="vote-row">
                <span>OVER</span>
                <div className="vote-track"><i style={{ width: `${overPct}%` }} /></div>
                <b>{overPct}%</b>
              </div>
              <div className="vote-row">
                <span>UNDER</span>
                <div className="vote-track under"><i style={{ width: `${underPct}%` }} /></div>
                <b>{underPct}%</b>
              </div>
            </div>
            <div className="projector-reveal">
              {revealed ? (
                <>
                  <b>Answer: {question.answer}</b>
                  <span>{question.fact}</span>
                </>
              ) : (
                <span>Voting is open</span>
              )}
            </div>
          </div>
        )}

        <div className="phone-snapshot">
          <div className="phone-speaker" />
          <div className="qr-grid" aria-hidden="true">
            {qrTiles.map((filled, i) => <span key={i} className={filled ? "filled" : ""} />)}
          </div>
          <p>summer-over-under.app</p>
          <button
            className={choice === "over" ? "selected" : ""}
            onClick={() => vote("over")}
            disabled={!started}
          >
            Vote OVER
          </button>
          <button
            className={choice === "under" ? "selected" : ""}
            onClick={() => vote("under")}
            disabled={!started}
          >
            Vote UNDER
          </button>
        </div>
      </section>

      <div className="ai-actions" hidden={!started}>
        <button onClick={() => setRevealed((current) => !current)}>
          {revealed ? "Reopen voting" : "Reveal answer"}
        </button>
        <button onClick={nextQuestion}>Next question</button>
      </div>
    </main>
  );
};

export default SummerOverUnder;
