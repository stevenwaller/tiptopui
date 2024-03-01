import { useDynamicImport } from "docusaurus-plugin-react-docgen-typescript/dist/esm/hooks";

import "./props-table.css";

export const PropsTable = ({ name }) => {
  const props = useDynamicImport(name);

  if (!props) {
    return null;
  }

  return (
    <table className="props-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Default Value</th>
          <th>Required</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(props).map((key) => {
          return (
            <tr key={key}>
              <td className="props-table-key">{key}</td>
              <td className="props-table-type">{props[key].type?.name}</td>
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
