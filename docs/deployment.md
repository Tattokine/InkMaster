# Deployment og Docker

Denne guiden beskriver hvordan du bygger og deployer applikasjonen med Docker.

Bygg image

```bash
docker build -t inkmaster:latest .
```

Kjør container

```bash
docker run -p 3000:3000 --env NODE_ENV=production --name inkmaster inkmaster:latest
```

Miljøvariabler

- NODE_ENV: sett til `production` i produksjon
- PORT: applikasjonen bør støtte å lese port fra miljøvariabel (standard 3000)

Healthcheck

- Applikasjonen har en GET /health som bør returnere 200 OK når alt er normalt.
- Bruk denne fra container-orchestrator (f.eks. Docker, Kubernetes) for readiness/liveness checks.

Eksempel Dockerfile-tips

- Bruk en liten base-image for produksjon (f.eks. node:18-alpine)
- Bygg i to steg: build-stage og runtime-stage for mindre image
- Sett HEALTHCHECK i Dockerfile hvis ønskelig, f.eks.:

```dockerfile
HEALTHCHECK --interval=30s --timeout=3s CMD curl -f http://localhost:3000/health || exit 1
```

CI/CD

- Sørg for at CI bygger image og kjører tester før deploy.
- Push image til en registry (Docker Hub, GitHub Packages el.) og hent i produksjon.
