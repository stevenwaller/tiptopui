import { useDynamicImport } from "docusaurus-plugin-react-docgen-typescript/dist/esm/hooks";

import "./props-table.css";

const formatObjectType = (typeString: string): JSX.Element | string => {
  if (!typeString || !typeString.includes("{")) {
    return typeString;
  }

  // Remove extra spaces and normalize the string
  const normalized = typeString.replace(/\s+/g, " ").trim();

  // Check if it's an object type
  if (normalized.startsWith("{") && normalized.endsWith("}")) {
    // Split by semicolons but preserve nested objects
    const parts = [];
    let depth = 0;
    let current = "";

    for (let i = 1; i < normalized.length - 1; i++) {
      const char = normalized[i];

      if (char === "{") {
        depth++;
      } else if (char === "}") {
        depth--;
      }

      if (char === ";" && depth === 0) {
        if (current.trim()) {
          parts.push(current.trim());
        }
        current = "";
      } else {
        current += char;
      }
    }

    // Add the last part if it exists
    if (current.trim()) {
      parts.push(current.trim());
    }

    // Format each part with proper indentation
    const formattedParts = parts.map((part, index) => {
      const trimmedPart = part.trim();
      if (trimmedPart.includes("{") && trimmedPart.includes("}")) {
        // Handle nested objects
        const colonIndex = trimmedPart.indexOf(":");
        if (colonIndex > -1) {
          const key = trimmedPart.substring(0, colonIndex);
          const value = trimmedPart.substring(colonIndex + 1).trim();

          if (value.startsWith("{") && value.endsWith("}")) {
            const nestedContent = value.slice(1, -1).trim();
            // Remove trailing semicolon from nested content if it exists
            const cleanNestedContent = nestedContent.endsWith(";")
              ? nestedContent.slice(0, -1)
              : nestedContent;

            return (
              <div key={index}>
                <span style={{ marginLeft: "1rem" }}>
                  {key}: {`{`}
                </span>
                <div style={{ marginLeft: "2rem" }}>{cleanNestedContent};</div>
                <span style={{ marginLeft: "1rem" }}>{`}`};</span>
              </div>
            );
          }
        }
      }

      // Remove trailing semicolon from the part if it exists, we'll add it back
      const cleanPart = trimmedPart.endsWith(";")
        ? trimmedPart.slice(0, -1)
        : trimmedPart;

      return (
        <div key={index} style={{ marginLeft: "1rem" }}>
          {cleanPart};
        </div>
      );
    });

    return (
      <div className="props-table-object-type">
        <div>{`{`}</div>
        {formattedParts}
        <div>{`}`}</div>
      </div>
    );
  }

  return typeString;
};

export const PropsTable = ({ name }) => {
  const props = useDynamicImport(name);

  if (!props) {
    return null;
  }

  // delete unwanted props
  delete props["mt"];
  delete props["mb"];
  delete props["ms"];
  delete props["me"];
  delete props["style"];

  return (
    <table className="props-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Default</th>
          <th>Required</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(props).map((key) => {
          return (
            <tr key={key}>
              <td className="props-table-key">{key}</td>
              <td className="props-table-type">
                {formatObjectType(props[key].type?.name)}
              </td>
              <td className="props-table-value">
                {props[key].defaultValue && (
                  <span>{props[key].defaultValue.value}</span>
                )}
              </td>
              <td>{props[key].required ? "Yes" : "No"}</td>
              <td>{props[key].description}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
