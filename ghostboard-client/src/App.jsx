import { useEffect, useState } from "react";
import { getFeed, postConfession, vote } from "./api";

function App() {

  const [feed, setFeed] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [mood, setMood] = useState("happy");

  let ghostId = localStorage.getItem("ghostId");

  if (!ghostId) {
    ghostId = crypto.randomUUID();
    localStorage.setItem("ghostId", ghostId);
  }

  async function loadFeed() {
    const data = await getFeed();
    setFeed(data.data);
  }

  async function submitConfession() {
    await postConfession({ title, body, mood, ghostId });
    setTitle("");
    setBody("");
    loadFeed();
  }

  async function handleVote(id, value) {
    await vote(id, ghostId, value);
    loadFeed();
  }

  useEffect(() => {
    async function fetchFeed() {
      const data = await getFeed();
      setFeed(data.data);
    }

    fetchFeed();
  }, []);

  return (
    <div style={{ maxWidth: "700px", margin: "auto" }}>
      <h1>GhostBoard 👻</h1>
      <h2>Post Confession</h2>
      <input
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Your confession"
        value={body}
        onChange={e => setBody(e.target.value)}
      />

      <select value={mood} onChange={e => setMood(e.target.value)}>
        <option value="happy">happy</option>
        <option value="sad">sad</option>
        <option value="angry">angry</option>
        <option value="confused">confused</option>
      </select>

      <button onClick={submitConfession}>Confess</button>

      <hr />

      <h2>Feed</h2>

      {feed.map(c => (
        <div key={c._id} style={{ borderBottom: "1px solid #ccc", marginBottom: "20px" }}>
          <h3>{c.title}</h3>
          <p>{c.body}</p>
          <p>Score: {c.score}</p>

          <button onClick={() => handleVote(c._id, 1)}>⬆️</button>
          <button onClick={() => handleVote(c._id, -1)}>⬇️</button>
          <button onClick={() => handleVote(c._id, 0)}>❌</button>
        </div>
      ))}
    </div>
  );
}

export default App;