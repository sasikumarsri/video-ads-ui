import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name from __filename
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static files from the "dist" directory (where your Vite build is located)
app.use(express.static(path.join(__dirname, 'dist')));

// For any route, serve the "index.html" file (single-page app routing with React Router)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'), (err) => {
    if (err) {
      res.status(500).send('Error loading index.html');
    }
  });
});

// Set the port to 3000 or any other port if needed
const port = process.env.PORT || 4200;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
