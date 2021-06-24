import { Layout } from "@components/common/layout/layout";
import { Button } from "@components/common/button/button";
import { useUser } from "@auth0/nextjs-auth0";
function LogBtn() {
  const { user, isLoading } = useUser();
  if (isLoading) return <>is loading</>;
  else if (user) return <a href="/api/auth/logout">Logout</a>;
  else return <a href="/api/auth/login">Login</a>;
}
export default function Home() {
  return (
    <>
      Notre outil est trop bien
      <LogBtn />
    </>
  );
}

Home.Layout = Layout;
