const glob = require("glob");
const fs = require("fs");
const path = require("path");

const docsPath = path.join(__dirname, "..", "docs");

// Match YAML front matter block at top of file
const frontMatterRegex = /^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?/;

/**
 * Extracts the title from YAML front matter
 */
function getTitleFromFrontMatter(content) {
  const match = content.match(frontMatterRegex);
  if (!match) return null;

  const yaml = match[1];
  const titleLine = yaml
    .split(/\r?\n/)
    .find((line) => line.toLowerCase().startsWith("title:"));

  if (!titleLine) return null;

  return titleLine.split(":").slice(1).join(":").trim() || null;
}

/**
 * Converts a string to sentence case: "build workflows" → "Build workflows"
 */
function toSentenceCase(text) {
  const lowered = text.toLowerCase();
  return lowered.charAt(0).toUpperCase() + lowered.slice(1);
}

/**
 * Applies special casing and keyword handling to build the target filename
 */
function generateFileName(title, filePath) {
  let cleaned = title
    .replace(/[<>:"/\\|?*]+/g, "") // Remove invalid characters
    .replace(/-/g, " ") // Replace dashes with spaces
    .replace(/\s+/g, " ") // Collapse whitespace
    .trim();

  // Always fix casing for Flow Builder
  cleaned = cleaned.replace(/\bflow builder\b/gi, "Flow Builder");

  const isInConnectors = filePath
    .toLowerCase()
    .includes(path.sep + "connectors" + path.sep);

  if (isInConnectors) {
    // Replace "connector" with "component"
    cleaned = cleaned.replace(/\bconnector\b/gi, "component");
    return cleaned + ".md";
  } else {
    return toSentenceCase(cleaned) + ".md";
  }
}

/**
 * Main function: renames file using title, then removes front matter
 */
function processFiles() {
  const files = glob.sync("**/*.md", { cwd: docsPath, absolute: true });

  for (const filePath of files) {
    const content = fs.readFileSync(filePath, "utf-8");
    const originalName = path.basename(filePath);

    const title = getTitleFromFrontMatter(content);
    if (!title) {
      console.warn(`⚠️ No title found in ${originalName}`);
      continue;
    }

    // STEP 1: Rename
    const newFileName = generateFileName(title, filePath);
    const dir = path.dirname(filePath);
    const newPath = path.join(dir, newFileName);

    let renamed = false;
    if (originalName !== newFileName) {
      try {
        fs.renameSync(filePath, newPath);
        console.log(`✅ Renamed: ${originalName} → ${newFileName}`);
        renamed = true;
      } catch (err) {
        console.error(`❌ Rename failed for ${originalName}:`, err);
        continue;
      }
    }

    // STEP 2: Remove front matter
    const cleanedContent = content.replace(frontMatterRegex, "").trimStart();
    const finalPath = renamed ? newPath : filePath;

    fs.writeFileSync(finalPath, cleanedContent, "utf-8");
    console.log(`✂️  Removed front matter from: ${path.basename(finalPath)}`);
  }
}

processFiles();
