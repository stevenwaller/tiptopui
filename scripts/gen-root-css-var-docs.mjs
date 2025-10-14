import fs from "fs";
import path from "path";

const CSS_FILE_PATH = "./packages/components/src/styles.css";
const OUTPUT_FILE_PATH = "./apps/docs/docs/_partials/_cssVars.mdx";

function parseCssVariables() {
  const cssContent = fs.readFileSync(CSS_FILE_PATH, "utf8");
  const lines = cssContent.split("\n");

  let markdownContent = "";
  let currentSection = null;
  let variables = [];
  let hasComments = false;

  for (const line of lines) {
    const trimmedLine = line.trim();

    // Skip empty lines and lines that are just whitespace
    if (!trimmedLine) continue;

    // Check for section headers (comments with ##, ###, etc.)
    const headerMatch = trimmedLine.match(/\/\*\s*(#{2,})\s*(.+?)\s*-*\s*\*\//);
    if (headerMatch) {
      // If we have accumulated variables, output them before starting a new section
      if (variables.length > 0) {
        markdownContent += generateVariableTable(variables, hasComments);
        variables = [];
        hasComments = false;
      }

      const headerLevel = headerMatch[1];
      const headerText = headerMatch[2];
      markdownContent += `${headerLevel} ${headerText}\n\n`;
      currentSection = headerText;
      continue;
    }

    // Check for CSS variables
    const variableMatch = trimmedLine.match(
      /--tipTop__([^:]+):\s*([^;]+);?\s*(?:\/\*\s*(.+?)\s*\*\/)?/
    );
    if (variableMatch) {
      const variableName = `--tipTop__${variableMatch[1]}`;
      const value = variableMatch[2].trim();
      const comment = variableMatch[3] ? variableMatch[3].trim() : "";

      if (comment) {
        hasComments = true;
      }

      variables.push({
        name: variableName,
        value: value,
        comment: comment,
      });
    }
  }

  // Output any remaining variables
  if (variables.length > 0) {
    markdownContent += generateVariableTable(variables, hasComments);
  }

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
    console.log("Generating CSS variables documentation...");

    const markdownContent = parseCssVariables();

    // Ensure the output directory exists
    ensureDirectoryExists(OUTPUT_FILE_PATH);

    // Write the markdown file
    fs.writeFileSync(OUTPUT_FILE_PATH, markdownContent);

    console.log(
      `✅ Successfully generated CSS variables documentation at ${OUTPUT_FILE_PATH}`
    );
  } catch (error) {
    console.error("❌ Error generating CSS variables documentation:", error);
    process.exit(1);
  }
}

main();
