const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const bodyParser = require('body-parser');
const fs = require('fs');
const config = require('./webpack.config');


const app = new (require('express'))();

const port = 3000;

const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // for correct reading data from html forms


function readFile(func) {
  fs.readFile('./src/data.json', (err, data) => func(err, data));
}
function saveChanges(file, callback) {
  fs.writeFile('./src/data.json', JSON.stringify(file), callback);
}


app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.get('/api/data', (req, res) => {
  readFile((err, data) => {
    res.json(JSON.parse(data));
  });
});
app.post('/api/data', (req, res) => {
  readFile((err, data) => {
    const array = JSON.parse(data);
    array.push(req.body);
    saveChanges(array);
    res.json(req.body);
  });
});
app.put('/api/data/:id', (req, res) => {
  readFile((err, data) => {
    const array = JSON.parse(data);
    let arrayObj = {};
    array.map((item) => {
      if (item.id === req.params.id) {
        arrayObj = item;
        arrayObj.title = req.body.title;
      }
      return item;
    });
    saveChanges(array);
    res.json(array);
  });
});
app.put('/api/data-checked/:id', (req, res) => {
  readFile((err, data) => {
    const array = JSON.parse(data);
    let arrayObj = {};
    array.map((item) => {
      if (item.id === req.params.id) {
        arrayObj = item;
        arrayObj.checked = !item.checked;
      }
      return item;
    });
    saveChanges(array);
    res.json(array);
  });
});
app.delete('/api/data/:id', (req, res) => {
  readFile((err, data) => {
    const array = JSON.parse(data);


    let index = 0;
    array.forEach((item, currIndex) => {
      console.log(item.id, req.params.id);
      if (item.id === req.params.id.toString()) {
        index = currIndex;
      }
    });

    array.splice(index, 1);

    saveChanges(array);
    res.json(array);
  });
});

app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
  }
});
