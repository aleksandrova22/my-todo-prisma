import { ToDo } from "@/components/todo";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <h1>My Todo List</h1>
      <ToDo />
    </>
  );
}


