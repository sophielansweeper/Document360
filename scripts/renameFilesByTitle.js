const glob = require("glob");
const fs = require("fs");
const path = require("path");

// Adjust this path if needed
const docsPath = path.join(__dirname, "..", "docs");

// Regex to extract the title line from front matter
const titleRegex =
  /^---\s*\r?\n(?:.*\r?\n)*?title:\s*(.+?)\s*\r?\n(?:.*\r?\n)*?---/i;

/**
 * Extracts the title from front matter
 */
function getTitleFromContent(content) {
  const match = content.match(titleRegex);
  return match ? match[1].trim() : null;
}

/**
 * Converts a string to sentence case
 */
function toSentenceCase(text) {
  const lowered = text.toLowerCase();
  return lowered.charAt(0).toUpperCase() + lowered.slice(1);
}

/**
 * Prepares the output filename:
 * - Removes unsafe characters
 * - Replaces dashes with spaces
 * - Applies sentence case unless in 'connectors' folder
 */
function sanitizeFileName(title, filePath) {
  const cleaned = title
    .replace(/[<>:"/\\|?*]+/g, "") // remove invalid filename characters
    .replace(/-/g, " ") // replace dashes with spaces
    .replace(/\s+/g, " ") // collapse multiple spaces
    .trim();

  const inConnectors = filePath
    .toLowerCase()
    .includes(path.sep + "connectors" + path.sep);

  // Apply sentence case unless in connectors
  let formatted = inConnectors ? cleaned : toSentenceCase(cleaned);

  // Preserve brand terms with proper casing
  formatted = formatted.replace(/\bflow builder\b/gi, "Flow Builder");

  return formatted;
}

/**
 * Main logic to find and rename Markdown files
 */
function renameFiles() {
  const markdownFiles = glob.sync("**/*.md", { cwd: docsPath, absolute: true });

  for (const filePath of markdownFiles) {
    const rawContent = fs.readFileSync(filePath, "utf-8");
    const title = getTitleFromContent(rawContent);

    if (!title) {
      console.warn(`⚠️  No title found in: ${filePath}`);
      continue;
    }

    const dir = path.dirname(filePath);
    const ext = path.extname(filePath);
    const newFileName = sanitizeFileName(title, filePath) + ext;
    const newPath = path.join(dir, newFileName);

    if (path.basename(filePath) !== newFileName) {
      try {
        fs.renameSync(filePath, newPath);
        console.log(`✅ Renamed: ${path.basename(filePath)} → ${newFileName}`);
      } catch (e) {
        console.error(`❌ Failed to rename ${filePath}:`, e);
      }
    }
  }
}

renameFiles();
