const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const bodyParser = require('body-parser');
const fs = require('fs');
const config = require('./webpack.config');

const uuid = require('uuid');


const app = new (require('express'))();

const port = 3000;

const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // for correct reading data from html forms


function readFile(callback) {
  fs.readFile('./src/data.json', callback);
}
function saveChanges(file, callback) {
  fs.writeFile('./src/data.json', JSON.stringify(file), callback);
}

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.get('/api/data', (req, res) => {
  readFile((err, data) => {
    res.json({ data: JSON.parse(data) });
  });
});
app.post('/api/data', (req, res) => {
  readFile((err, data) => {
    const objectTodos = JSON.parse(data);
    const itemId = uuid();
    const newItem = {
      title: req.body.title,
      id: itemId,
      checked: false,
    };
    if (!objectTodos[itemId]) {
      objectTodos[itemId] = newItem;
    }
    saveChanges(objectTodos);
    res.json(newItem);
  });
});


app.put('/api/data/:id', (req, res) => {
  readFile((err, data) => {
    const objectTodos = JSON.parse(data);
    objectTodos[req.params.id].title = req.body.title;
    saveChanges(objectTodos);
    res.json(objectTodos[req.params.id]);
  });
});
app.put('/api/data-checked/:id', (req, res) => {
  readFile((err, data) => {
    const objectTodos = JSON.parse(data);
    objectTodos[req.params.id].checked = !objectTodos[req.params.id].checked;
    saveChanges(objectTodos);
    res.json(objectTodos[req.params.id]);
  });
});
app.delete('/api/data/:id', (req, res) => {
  readFile((err, data) => {
    const objectTodos = JSON.parse(data);
    delete objectTodos[req.params.id];
    saveChanges(objectTodos);
    res.json({ status: 'ok' });
  });
});

app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
  }
});
