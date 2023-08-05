import Image from "next/image";

const getData = async () => {
  const res = await fetch(`${process.env.API_URL}/api/listing`);
  const produk = await res.json();
  return produk;
};

export default async function Home() {
  const data = await getData();
  console.log(data);
  return (
    <>
      {data.map((item) => (
        <h1>{item.title}</h1>
      ))}
    </>
  );
}
