const API = "http://localhost:3000/confessions";

export async function getFeed(page = 1) {
    const res = await fetch(`${API}/feed?page=${page}&limit=10`);
    return res.json();
}

export async function postConfession(data) {
    const res = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    return res.json();
}

export async function vote(id, ghostId, value) {
    await fetch(`${API}/${id}/vote`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ghostId, value })
    });
}