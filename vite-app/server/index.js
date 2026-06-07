const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Demo in-memory data
const motifs = [
  {
    id: 'm1',
    title: 'Rose & Dagger',
    tags: ['Traditional','Blackwork'],
    artist: 'Aya',
    artistAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop&crop=faces',
    style: 'Traditional',
    price: 1200,
    description: 'Klassisk rose med dolk. Tett svart contour og sterke farger.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'm2',
    title: 'Minimal Wave',
    tags: ['Minimal','Fine line'],
    artist: 'Kine',
    artistAvatar: 'https://images.unsplash.com/photo-1544739313-88c2f2f93a7a?q=80&w=200&auto=format&fit=crop&crop=faces',
    style: 'Fine line',
    price: 800,
    description: 'Diskret bølge, fint for håndledd eller ankel.',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'm3',
    title: 'Geometric Mandala',
    tags: ['Geometric','Dotwork'],
    artist: 'Mika',
    artistAvatar: 'https://images.unsplash.com/photo-1545996124-52b0d3f0c2f8?q=80&w=200&auto=format&fit=crop&crop=faces',
    style: 'Dotwork',
    price: 2200,
    description: 'Intrikat mandala med prikketeknikk, egnet for skulder eller rygg.',
    image: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?q=80&w=800&auto=format&fit=crop'
  }
];

// Serve Vite dev server root in production or static if needed
app.get('/api/motifs', (req, res) => {
  const list = motifs.map(m => ({ id: m.id, title: m.title, artist: m.artist, price: m.price, image: m.image }));
  res.json(list);
});

app.get('/api/motifs/:id', (req, res) => {
  const m = motifs.find(x => x.id === req.params.id);
  if (!m) return res.status(404).json({ error: 'Not found' });
  res.json(m);
});

app.post('/api/book', (req, res) => {
  const { motifId, name, time } = req.body || {};
  if (!motifId || !name) return res.status(400).json({ error: 'motifId and name required' });
  console.log('Booking:', { motifId, name, time });
  res.json({ success: true, message: 'Booking mottatt (demo)' });
});

app.listen(PORT, () => console.log(`API server running on http://localhost:${PORT}`));
