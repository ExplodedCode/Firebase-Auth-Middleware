# Firebase-Auth-Middleware

Verify Firebase password with Hash & Salt


# Start
```bash
docker run -p 8080:8080 \
    -e PORT=8080 \
    -e SUPABASE_URL="https://api.example.com" \
    -e SUPABASE_SERVICE_ROLE_KEY="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" \
    -e POSTGRES_HOST="localhost" \
    -e POSTGRES_DB="postgres" \
    -e POSTGRES_PORT=5432 \
    -e POSTGRES_USER="postgres" \
    -e POSTGRES_PASSWORD="postgres" \
    -e FIREBASE_MEMCOST=14 \
    -e FIREBASE_ROUNDS=8 \
    -e FIREBASE_SALTSEPARATOR="xx==" \
    -e FIREBASE_SIGNERKEY="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx==" \
    --name=firebase-auth-middleware explodedcode/firebase-auth-middleware
```