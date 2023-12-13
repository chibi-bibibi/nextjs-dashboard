const prod = process.env.NODE_ENV === 'production'

console.log(process.env.NODE_ENV)

module.exports = {
  'process.env.BACKEND_URL': prod ? '/nextjs-dashboard' : '',
}