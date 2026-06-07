# InkMaster

InkMaster er et lite prosjekt for å administrere en tatovørworkshop — frontend og enkel produksjonsserver.

Kort om prosjektet

- Språk: JavaScript, CSS, HTML
- Inneholder: Dockerfile for produksjonsserver og en healthcheck-rute (/health)
- Forfatter / vedlikeholder: Jon Arve Ovesen

Rask start (lokalt)

1. Klon repo:

```bash
git clone https://github.com/Tattokine/InkMaster.git
cd InkMaster
```

2. Installer avhengigheter

```bash
npm install
```

3. Kjør i utvikling

```bash
npm run dev
# eller
npm start
```

Kjør i Docker (produksjon)

Bygg image:

```bash
docker build -t inkmaster:latest .
```

Kjør container:

```bash
docker run -p 3000:3000 --env NODE_ENV=production --name inkmaster inkmaster:latest
```

Healthcheck

Applikasjonen eksponerer en enkel healthcheck på `/health`.

For å teste lokalt:

```bash
curl -f http://localhost:3000/health || echo "Healthcheck feilet"
```

Bidra

Se `CONTRIBUTING.md` for informasjon om hvordan du bidrar med kode, issues og pull requests.

Lisens

Dette prosjektet er lisensiert under MIT-lisensen — se `LICENSE.md`.
