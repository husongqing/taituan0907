const http = require("http")
const fs = require("fs")
const path = require("path")

const PORT = process.env.PORT || 3000
const HTML_FILE = path.join(__dirname, "钛团工业原料商城高保真原型.html")

const server = http.createServer((req, res) => {
  fs.readFile(HTML_FILE, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" })
      res.end("无法读取原型文件: " + err.message)
      return
    }
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" })
    res.end(data)
  })
})

server.listen(PORT, () => {
  console.log("[v0] 原型服务器已启动: http://localhost:" + PORT)
})
