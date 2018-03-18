let
    express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    config = require('config'),
    session = require('express-session'),
    cookieParser = require('cookie-parser')
    app = express(),
    routerAdapter = require('./routes'),
    server = require('./dao/index'),
    fs = require('fs'),
    mung = require('express-mung'),
    intercepter  = require('./util/intercepter'),
    morgan = require('morgan'),
    stream = fs.createWriteStream(__dirname + '/access.log', { flags: 'a' });

app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true
}));

app.use(mung.json(intercepter));
morgan.token('body-sent', function (req, res) { return res.bodySent });
morgan.token('req-body', function (req, res) {
    const body = Object.assign({}, req.body)
    if (body && body.pass) {
        body.pass = "**********";
    }
    return JSON.stringify(body)
}
);

app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent" RequestParams ":req-body" Response --> :body-sent',{ stream: stream }));

//config for production
if (process.env.NODE_ENV != 'dev') {
    let redisStore = require('connect-redis')(session);
    console.log('Start ProdMode');
    redisStore = require('connect-redis')(session);
    app.use(session({
        name: 'token',
        secret: 'KCiH6SNsPh0Rhb5J',
        store: new redisStore({ host: 'session_db', port: 6379, prefix: 'adv.' }),
        saveUninitialized: true,
        resave: false
    }));
}

if (process.env.NODE_ENV === 'dev') {
    console.log('Start DevMode');
    app.use(session({
        name: 'token',
        secret: 'KCiH6SNsPh0Rhb5J',
        saveUninitialized: true,
        resave: false
    }));
}


app.use('/uploads', express.static('./uploads'));
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

server(config);
routerAdapter(app);
app.get('*', (req, res) => { res.sendFile(__dirname + '/public/index.html'); });
app.listen(80);