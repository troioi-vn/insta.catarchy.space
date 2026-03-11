This is a static page for https://insta.catarchy.space. Placeholder for now, but will eventually be a more sophisticated landing page.

## Run with Docker

### Option 1: Docker Compose

```bash
docker compose up --build -d
```

Open http://localhost:8080

Stop:

```bash
docker compose down
```

### Option 2: Plain Docker

```bash
docker build -t insta-catarchy-site .
docker run --rm -p 8080:80 insta-catarchy-site
```
