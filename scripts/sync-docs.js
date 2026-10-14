import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
const docsDir = path.resolve('docs');

try {
  if (fs.existsSync(distDir)) {
    fs.cpSync(distDir, docsDir, { recursive: true });
    // GitHub Pages requires .nojekyll so asset folders and special files aren't bypassed
    fs.writeFileSync(path.join(docsDir, '.nojekyll'), '');
    
    // Copy 404 handler for SPA routing
    const fallback404 = path.resolve('public/404.html');
    if (fs.existsSync(fallback404)) {
      fs.copyFileSync(fallback404, path.join(docsDir, '404.html'));
    }
    console.log('✓ Production static bundle synced to /docs for direct GitHub Pages deployment.');
  }
} catch (err) {
  console.error('Error syncing docs directory:', err);
}
