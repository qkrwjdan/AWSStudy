import express, { Request, Response, NextFunction } from 'express'

const app = express()

app.use(express.json())

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello World!')
})

app.listen('8000', () => {
  console.log(`
        #############################################
            🛡️ Server listening on port: 8000 🛡️
        #############################################
    `)
})
