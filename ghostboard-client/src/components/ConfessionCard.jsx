export default function ConfessionCard({ confession, onVote }) {
    return (
        <div className="card">
            <h3>{confession.title}</h3>
            <p>{confession.body}</p>
            <div className="actions">
                <button onClick={() => onVote(confession._id, 1)}>
                    ⬆️
                </button>
                <button onClick={() => onVote(confession._id, -1)}>
                    ⬇️
                </button>
                <button onClick={() => onVote(confession._id, 0)}>
                    ❌
                </button>
                <span className="score">
                    Score: {confession.score}
                </span>
            </div>
        </div>
    );
}