import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import markdownpdf from 'markdown-pdf';
import { Readable } from 'stream';
import fs from 'fs';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Solo richieste POST sono permesse' });
    return;
  }

  const { url } = req.body;

  // Verifica se l'URL è stato fornito
  if (!url) {
    res.status(400).json({ message: 'URL mancante' });
    return;
  }

  try {
    // Logica per scaricare e convertire i file Markdown in PDF
    // Questo è un esempio di base e potrebbe richiedere un'adeguata gestione degli errori e ottimizzazioni

    // Scarica il file Markdown
    const response = await axios.get(url);
    const markdownContent = response.data;

    // Converte Markdown in PDF
    const readable = new Readable();
    readable._read = () => {}; // _read è richiesto ma non è necessario implementarlo
    readable.push(markdownContent);
    readable.push(null);

    const pdfPath = path.resolve('./public', 'output.pdf');
    readable.pipe(markdownpdf()).pipe(fs.createWriteStream(pdfPath));

    // Restituisce il percorso al file PDF
    res.status(200).json({ pdfUrl: `/output.pdf` });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Errore durante la generazione del PDF' });
  }
}