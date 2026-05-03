import { createServerEntry } from "../dist/server/index.js";

export default async function handler(req, res) {
    try {
        const entry = await createServerEntry();
        return entry(req, res);
    } catch (error) {
        console.error("Server error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}