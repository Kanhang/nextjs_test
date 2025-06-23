import { headers } from 'next/headers'

import { neon } from '@neondatabase/serverless';



export default function Home() {

  const Form = () => {
    async function create(formData: FormData) {
        'use server';
        // Connect to the Neon database
        const comment = formData.get('comment');
        const sql = neon(`${process.env.DATABASE_URL}`);
        console.log(comment);
        // Insert the comment from the form into the Postgres database
        await sql('INSERT INTO comments (comment) VALUES ($1)', [comment]);
      }
      



    return (
      <form action={create}>
            <input type="text" placeholder="write a comment" name="comment" />
            <button type="submit">Submit</button>
        </form>
)
}


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
      <Form/>
      <APIPage/>
    </>

  );
}
