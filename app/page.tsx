import { headers } from 'next/headers'
export default function Home() {

const APIPage = async (context :any) => {
  const header = await headers();
  const host = header.get('host');
  console.log(host)
  const res = await fetch(`http://${host}/api`, 
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
