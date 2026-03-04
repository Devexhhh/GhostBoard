import { useEffect, useState } from "react";
import { getFeed, postConfession, vote } from "./api";
import ConfessionCard from "./components/ConfessionCard";

function App() {
  const [feed, setFeed] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

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
    await postConfession({
      title,
      body,
      mood: "confused",
      ghostId
    });

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
    <div className="container">

      <h1>GhostBoard 👻</h1>

      <div className="form">
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Confess something..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <button onClick={submitConfession}>
          Confess
        </button>
      </div>

      <div className="feed">

        {feed.map(c => (
          <ConfessionCard
            key={c._id}
            confession={c}
            onVote={handleVote}
          />
        ))}

      </div>

    </div>
  );
}

export default App;
