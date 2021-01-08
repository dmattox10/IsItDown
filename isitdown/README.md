## IsItDown
If you aren't using an Nginx reverse-proxy, define ports in the docker-compose as I did in the shortt url shortener project.

### Client Component
- docker build -t down .
- docker run -d -p 3000:3000 --name down down

### Docker-Compose
```yaml
---
version: "3"
services: 
  down:
    image: down
    container_name: down
    restart: unless-stopped
    depends_on: 
      - downapi