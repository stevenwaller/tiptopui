import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const COMPONENTS_SRC_DIR = "./packages/components/src";
const OUTPUT_DIR = "./apps/docs/docs/_partials";

function getAllCssFiles() {
  const cssFiles = [];

  function scanDirectory(dir) {
    const items = fs.readdirSync(dir, { withFileTypes: true });

    for (const item of items) {
      const fullPath = path.join(dir, item.name);

      if (item.isDirectory()) {
        scanDirectory(fullPath);
      } else if (
        item.isFile() &&
        item.name.endsWith(".css") &&
        item.name !== "styles.css"
      ) {
        cssFiles.push({
          filePath: fullPath,
          componentName: item.name.replace(".css", ""),
        });
      }
    }
  }

  scanDirectory(COMPONENTS_SRC_DIR);
  return cssFiles;
}

function parseCssVariables(cssContent) {
  const lines = cssContent.split("\n");
  let markdownContent = "";
  let inRootBlock = false;
  let braceCount = 0;
  let currentVariables = [];
  let hasComments = false;
  let lastCommentText = null;

  function outputCurrentVariables() {
    if (currentVariables.length > 0) {
      markdownContent += generateVariableTable(currentVariables, hasComments);
      currentVariables = [];
      hasComments = false;
    }
  }

  for (const line of lines) {
    const trimmedLine = line.trim();

    // Skip empty lines
    if (!trimmedLine) continue;

    // Check if we're entering a :root block
    if (trimmedLine.includes(":root") && trimmedLine.includes("{")) {
      inRootBlock = true;
      braceCount =
        (trimmedLine.match(/{/g) || []).length -
        (trimmedLine.match(/}/g) || []).length;
      continue;
    }

    // If we're in a :root block, track braces
    if (inRootBlock) {
      braceCount +=
        (trimmedLine.match(/{/g) || []).length -
        (trimmedLine.match(/}/g) || []).length;

      // If braces are balanced, we're out of the :root block
      if (braceCount <= 0) {
        // Output any remaining variables before exiting
        outputCurrentVariables();
        inRootBlock = false;
        continue;
      }

      // Check for section headers (comments with ##, ###, etc.)
      const headerMatch = trimmedLine.match(
        /\/\*\s*(#{2,})\s*(.+?)\s*-*\s*\*\//
      );
      if (headerMatch) {
        // Output any accumulated variables before starting a new section
        outputCurrentVariables();

        const headerLevel = headerMatch[1];
        const headerText = headerMatch[2].trim();
        markdownContent += `${headerLevel} ${headerText}\n\n`;
        continue;
      }

      // Check for regular comments (without hashes)
      const commentMatch = trimmedLine.match(/\/\*\s*([^#].*?)\s*\*\//);
      if (commentMatch && !trimmedLine.includes("--")) {
        // Output any accumulated variables before this comment
        outputCurrentVariables();

        const commentText = commentMatch[1].trim();
        lastCommentText = commentText;
        markdownContent += `${commentText}\n\n`;
        continue;
      }

      // Check for CSS variables
      const variableMatch = trimmedLine.match(
        /--tipTop[^:]*:\s*([^;]+);?\s*(?:\/\*\s*(.+?)\s*\*\/)?/
      );
      if (variableMatch) {
        const fullVariable = trimmedLine.split(":")[0].trim();
        const value = variableMatch[1].trim();
        const comment = variableMatch[2] ? variableMatch[2].trim() : "";

        if (comment) {
          hasComments = true;
        }

        currentVariables.push({
          name: fullVariable,
          value: value,
          comment: comment,
        });

        // Look ahead to see if the next non-empty line is a comment or variable
        // If it's a comment, output the current variables now
        let nextLineIndex = lines.indexOf(line) + 1;
        let shouldOutputNow = false;

        while (nextLineIndex < lines.length) {
          const nextLine = lines[nextLineIndex].trim();
          if (!nextLine) {
            nextLineIndex++;
            continue;
          }

          // If next line is a comment (not a variable), output current variables
          const nextCommentMatch = nextLine.match(/\/\*\s*([^#].*?)\s*\*\//);
          const nextVariableMatch = nextLine.match(/--tipTop[^:]*:/);
          const nextHeaderMatch = nextLine.match(/\/\*\s*(#{2,})/);

          if (
            (nextCommentMatch && !nextVariableMatch) ||
            nextHeaderMatch ||
            nextLine.includes("}")
          ) {
            shouldOutputNow = true;
          }
          break;
        }

        if (shouldOutputNow) {
          outputCurrentVariables();
        }
      }
    }
  }

  // Output any remaining variables
  outputCurrentVariables();

  return markdownContent;
}

function generateVariableTable(variables, hasComments) {
  let table = "";

  if (hasComments) {
    table += "| Variable | Value | PX Equivalent |\n";
    table += "|----------|-------|---------------|\n";

    for (const variable of variables) {
      const comment = variable.comment || "";
      table += `| \`${variable.name}\` | ${variable.value} | ${comment} |\n`;
    }
  } else {
    table += "| Variable | Value |\n";
    table += "|----------|-------|\n";

    for (const variable of variables) {
      table += `| \`${variable.name}\` | ${variable.value} |\n`;
    }
  }

  table += "\n";
  return table;
}

function ensureDirectoryExists(filePath) {
  const dirname = path.dirname(filePath);
  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname, { recursive: true });
  }
}

function main() {
  try {
    console.log("Generating component CSS variables documentation...");

    const cssFiles = getAllCssFiles();

    if (cssFiles.length === 0) {
      console.log("No CSS files found in components directory.");
      return;
    }

    for (const { filePath, componentName } of cssFiles) {
      console.log(`Processing ${componentName}.css...`);

      const cssContent = fs.readFileSync(filePath, "utf8");
      const markdownContent = parseCssVariables(cssContent);

      // Skip files with no CSS variables
      if (!markdownContent.trim()) {
        console.log(
          `  No CSS variables found in ${componentName}.css, skipping...`
        );
        continue;
      }

      const outputFileName = `_${componentName}CssVars.mdx`;
      const outputFilePath = path.join(OUTPUT_DIR, outputFileName);

      // Ensure the output directory exists
      ensureDirectoryExists(outputFilePath);

      // Write the markdown file
      fs.writeFileSync(outputFilePath, markdownContent);

      console.log(`  ✅ Generated ${outputFileName}`);
    }

    console.log(
      "✅ Successfully generated all component CSS variables documentation!"
    );
  } catch (error) {
    console.error("❌ Error generating CSS variables documentation:", error);
    process.exit(1);
  }
}

main();
