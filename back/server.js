const fastify = require('fastify')({logger: true})
const PORT = 4000

fastify.register(require('fastify-cors'), { 
    origin: (origin, cb) => {
        if(/localhost/.test(origin)){
            cb(null, true)
            return
          }
          cb(new Error("Not allowed"))
          }
  })

fastify.register(require('./routes/user'))

const start = async () => {
    try{
        await fastify.listen(PORT)
    } catch(error) {
        fastify.log.error(error)
        process.exit(1)
    }
}


start()