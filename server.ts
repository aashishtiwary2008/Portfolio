import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// Check command line arguments for --port and --host
const args = process.argv.slice(2);
let customPort: number | null = null;
let customHost = '0.0.0.0';

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--port' && args[i + 1]) {
    customPort = parseInt(args[i + 1], 10);
    i++;
  } else if (args[i] === '--host' && args[i + 1]) {
    customHost = args[i + 1];
    i++;
  }
}

const isDev = process.env.NODE_ENV !== 'production';
const port = customPort || (isDev ? 3000 : (process.env.PORT ? parseInt(process.env.PORT, 10) : 3000));
const host = customHost;

app.use(express.json());

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please provide name, email, and message.' });
  }
  console.log(`[Direct Message] From: ${name} (${email}) | Message: ${message}`);
  return res.json({ success: true, message: 'Message received successfully!' });
});

// Vite middleware in dev or static files in production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(port, host, () => {
    console.log(`Server listening on http://${host}:${port}`);
  });
}

startServer();
