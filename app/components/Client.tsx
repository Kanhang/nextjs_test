'use client'

import React, { useState, useEffect } from 'react';

const ClientSide = () => {
   const [data, setData] = useState("");
   useEffect(() => {
        fetch('http://localhost:3000/client',
            {
                method: 'GET', // Must match what your API expects
                headers: {
                  'Content-Type': 'application/json',
                }
              })
        .then(resp => resp.json())
        .then(data => setData(data.message))
   }, []) 

    return <div>
        {data}
    </div>
};

export default ClientSide;