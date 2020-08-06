import QRCode from 'qrcode-svg'

export default (req, res) => {
  const url = req.query.url
  const svg = new QRCode(url)
  res.statusCode = 200
  res.setHeader('Content-Type', 'image/svg+xml')
  res.end(svg.svg())
}