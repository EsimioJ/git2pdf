'use client'
import React, { useState } from 'react';

export default function Git2pdf() {
  const [repoUrl, setRepoUrl] = useState("");

  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   // Qui puoi aggiungere la logica per inviare l'URL al server
  //   console.log("URL del Repository:", repoUrl);
  // };


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // Verifica se l'URL è stato inserito
    if (!repoUrl) {
      alert('Per favore, inserisci un URL del repository.');
      return;
    }
  
    // Opzioni per la richiesta fetch
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: repoUrl })
    };
  
    try {
      // Invia la richiesta al server
      const response = await fetch('../api/generate-pdf', requestOptions);
  
      if (!response.ok) {
        throw new Error('La richiesta al server è fallita.');
      }
  
      // Ottieni la risposta (ad esempio, l'URL del PDF generato)
      const data = await response.json();
      
      // Aggiungi qui il codice per gestire la risposta, ad esempio:
      // - Visualizzare un messaggio di successo
      // - Redirigere l'utente al PDF o fornire un link per il download
      console.log('PDF generato:', data.pdfUrl);
  
    } catch (error) {
      console.error('Errore:', error);
      alert('Si è verificato un errore durante la generazione del PDF.');
    }
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
