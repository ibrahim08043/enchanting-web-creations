const fs = require("fs");
const path = require("path");

// This helps Vercel properly detect the output
const distPath = path.join(process.cwd(), "dist/server");
if (fs.existsSync(distPath)) {
    console.log("✓ TanStack Start build output detected at dist/server");
} else {
    console.error("✗ Build output missing!");
    process.exit(1);
}