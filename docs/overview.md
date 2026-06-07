# Oversikt

Dette dokumentet gir en rask oversikt over prosjektets struktur og teknologi.

Teknologier

- Frontend: JavaScript (rammeverk kan variere avhengig av prosjektets kode)
- Styling: CSS
- Bygg/Distribusjon: Docker

Mappeoversikt (eksempler):

- src/ - kildekode for applikasjonen
- public/ - statiske filer
- docs/ - dokumentasjon
- Dockerfile - oppsett for produksjonsimage

Healthcheck

Applikasjonen eksponerer `/health` for enkel helsesjekk i produksjon.
