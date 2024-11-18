import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <h1 className="text-3xl">Welcome</h1>
      <Link href="/properties">Go to properties</Link>
    </>
  );
};

export default HomePage;
