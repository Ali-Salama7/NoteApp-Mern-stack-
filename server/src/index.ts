import express, {Request, Response} from 'express'
import cors from 'cors'

const app = express()
const port = 4000

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.send('Hello')
})

app.get('/about', (req: Request, res: Response) => {
    res.send('about')
})

app.listen(port, () => {
    console.log(`this port is listening in ${port}`)
})
