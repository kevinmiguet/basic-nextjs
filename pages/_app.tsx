import { UserProvider } from "@auth0/nextjs-auth0";
import { FC } from "react";

import "@assets/main.css";
import "@assets/chrome-bug.css";

const Noop: FC = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps }) {
  const Layout = (Component as any).Layout || Noop;

  return (
    <UserProvider>
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}

export default MyApp;
