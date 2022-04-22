import { getAccessToken, useUser } from "@auth0/nextjs-auth0";
import { GetServerSideProps } from "next";
import Link from "next/link";

export default function Home() {
  const { user } = useUser();

  return (
    <div>
      <h1>hello, lab</h1>

      <br/>
      { JSON.stringify(user, null, 3) }
      <br/>

      <Link href="/api/auth/login">
        <a>login</a>
      </Link>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const token = getAccessToken(req, res);
  console.log(token);
  return {
    props: {}
  }
}