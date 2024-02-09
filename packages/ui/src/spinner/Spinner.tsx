import React from "react";
import classNames from "classnames";

import cssModule from "./spinner.module.css";

interface Props {
  className?: string;
  color?: "light" | "dark";
  size?: "small" | "medium" | "large" | "extra-large";
}

const foo = "bar";

const Spinner = ({
  className,
  color = "dark",
  size = "medium",
  ...restProps
}: IProps) => {
  return (
    <div
      className={classNames(
        cssModule.spinner,
        cssModule[`spinner--${size}`],
        cssModule[`spinner--${color}`],
        className
      )}
      {...restProps}
    >
      <div />
    </div>
  );
};

export default Spinner;
