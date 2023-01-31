import http from "http"
import app from "./app"

const PORT = process.env.port || 8000

const server = http.createServer(app)

server.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
})
