module.exports = {
  development: {
    client:'pg',
    connection: 'postgres://localhost/feedz'
  },
  production:{
    client:'pg',
    connection: process.env.DATABASE_URL
  }
}