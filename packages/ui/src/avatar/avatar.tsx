import cssModule from "./avatar.module.css";

export interface AvatarProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

// console.log("cssModule", cssModule);

export function Avatar({ children, ...other }: AvatarProps): JSX.Element {
  return (
    <button type="button" {...other} className={cssModule.avatar}>
      {children}
    </button>
  );
}

Avatar.displayName = "Avatar";
