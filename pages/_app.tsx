import { FC } from "react";

import "@assets/main.css";
import "@assets/chrome-bug.css";

const Noop: FC = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps }) {
  const Layout = (Component as any).Layout || Noop;

  return (
    <Layout pageProps={pageProps}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
