'use client'
import React, { useState } from 'react';

export default function Git2pdf() {
  const [repoUrl, setRepoUrl] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Qui puoi aggiungere la logica per inviare l'URL al server
    console.log("URL del Repository:", repoUrl);
  };

  return (
    <div className='p-6'>
      <p className='p-2'>Inserisci l&apos;URL del Repository GitHub</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={repoUrl}
          onChange={(e) => setRepoUrl(e.target.value)}
          placeholder="URL del Repository"
          className='border border-gray-300 rounded-md p-2 text-white bg-[#bbda5553] m-2'
          style={{ width: "300px", marginRight: "10px" }}
        />
        <button className='bg-[#bada55] rounded-sm p-2' type="submit">Crea PDF</button>
      </form>
    </div>
  );
}
