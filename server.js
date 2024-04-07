import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import { createServer } from 'http';
import { I18n } from 'i18n';
import morgan from 'morgan';
import passport from 'passport';
import { Server } from 'socket.io';
import initMongo from './config/mongo.js';
import './config/passport.js';
import router from './routes/index.js';

const app = express()
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        credentials: true
    }
});

io.engine.use((req, res, next) => {
    const isHandshake = req._query.sid === undefined;
    if (isHandshake) {
        passport.authenticate("jwt", { session: false })(req, res, next);
    } else {
        next();
    }
});

io.on('connection', (socket) => {
    console.log('a user connected');
});

// Setup express server port from ENV, default: 3001
app.set('port', process.env.PORT || 3001)

// Enable only in development HTTP request logger middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// for parsing json
app.use(
    bodyParser.json({
        limit: '20mb'
    })
)
// for parsing application/x-www-form-urlencoded
app.use(
    bodyParser.urlencoded({
        limit: '20mb',
        extended: true
    })
)

// I18n
const i18n = new I18n({
    locales: ['en', 'es'],
    directory: `${import.meta.dirname}/locales`,
    defaultLocale: 'en',
    objectNotation: true
})

app.use(i18n.init)

//{ origin: [process.env.FRONTEND_URL, `https://localhost:${app.get('port')}`, `https://127.0.0.1:${app.get('port')}`] }
app.use(cors())
app.use(passport.initialize())
app.use(compression())
app.use(helmet())
app.use(express.static('public'))
app.use(router)

// Init MongoDB
initMongo()

server.listen(app.get('port'), () => {
    console.log(`Server starting on port ${app.get('port')}`)
})