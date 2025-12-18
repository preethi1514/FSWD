// OnlineQuiz.jsx
import React, { useEffect, useState } from "react";

const OnlineQuiz = ({ socket }) => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [results, setResults] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    // receive question from server
    socket.on("pollQuestion", (data) => {
      setQuestion(data.question);
      setOptions(data.options);
      setResults({});
      setHasVoted(false);
      setSelectedOption(null);
    });

    // receive live results
    socket.on("pollResults", (data) => {
      setResults(data);
    });

    return () => {
      socket.off("pollQuestion");
      socket.off("pollResults");
    };
  }, [socket]);

  const vote = (option) => {
    if (hasVoted) return;

    socket.emit("vote", option);
    setSelectedOption(option);
    setHasVoted(true);
  };

  return (
    <div style={{ maxWidth: "500px" }}>
      <h2>{question || "Waiting for poll..."}</h2>

      {options.map((opt, index) => (
        <button
          key={index}
          onClick={() => vote(opt)}
          disabled={hasVoted}
          style={{
            display: "block",
            width: "100%",
            margin: "10px 0",
            padding: "10px",
            background:
              selectedOption === opt ? "#4CAF50" : "#e0e0e0",
            border: "none",
            cursor: "pointer",
          }}
        >
          {opt}
        </button>
      ))}

      <hr />

      <h3>Live Results</h3>
      {Object.keys(results).length === 0 && <p>No votes yet</p>}

      {Object.entries(results).map(([option, count]) => (
        <p key={option}>
          {option}: <strong>{count}</strong>
        </p>
      ))}
    </div>
  );
};

export default OnlineQuiz;
