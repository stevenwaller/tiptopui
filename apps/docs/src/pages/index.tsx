import cx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import cssModule from "./index.module.css";

export default function Home(): JSX.Element {
  return (
    <Layout
      title={`Tip Top UI`}
      description="A highly customizable React component library with minimal dependencies."
    >
      <header className={cssModule.hero}>
        <div className={cssModule.container}>
          <h1 className={cssModule.heroTitle}>Tip Top UI</h1>
          <h2 className={cssModule.heroTagline}>
            A first-rate React component library
          </h2>
          <p className={cssModule.heroSubtext}>
            Fully customizable with minimal dependencies
          </p>
          <div className={cssModule.buttons}>
            <Link
              className={cx(cssModule.button, cssModule.buttonPrimary)}
              to="/docs/GetStarted/installation"
            >
              Get Started
            </Link>
            <Link
              className={cx(cssModule.button, cssModule.buttonSecondary)}
              to="/docs/Components/Inputs/Button"
            >
              View Components
            </Link>
          </div>
        </div>
      </header>
      <main></main>
    </Layout>
  );
}
