import Image from "next/image";

export default function Home() {

const APIPage = async () => {
  const res = await fetch('http://localhost:3000/api', 
      {
          method: 'GET', // Must match what your API expects
          headers: {
            'Content-Type': 'application/json',
          }
        });
  console.log(res);
  // const data = await res.text();
  const data = await res.json();
  return <>
      API page 
  <div>
      {data.message }
  </div>
  </>
}

  return (
    <>
      HomePage
      <APIPage/>
    </>

  );
}
