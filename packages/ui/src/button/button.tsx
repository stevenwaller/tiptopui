import cssModule from "./button.module.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

console.log("cssModule", cssModule);

export function Button({ children, ...other }: ButtonProps): JSX.Element {
  return (
    <button type="button" {...other} className={cssModule.button}>
      {children}
    </button>
  );
}

Button.displayName = "Button";
