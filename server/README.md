## IsItDown
If you aren't using an Nginx reverse-proxy, define ports in the docker-compose as I did in the shortt url shortener project.

my depends_on is using the name on my MongoDB container, you will need to adjust.

I attempted to use environment variables, but I'm doing something wrong, so I edited config/db.js by hand on the server before building to include the proper mongoURI.

### Server Component
- docker build -t downapi .
- docker run -d -p 3000:3000 --name downapi downapi

### Docker-Compose
```yaml
---
version: "3"
services: 
  down:
    image: downapi
    container_name: downapi
    restart: unless-stopped
    depends_on: 
      - mongo