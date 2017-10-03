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
  console.log(req);
  readFile((err, data) => {
    const array = JSON.parse(data);
    const newItem = {
      title: req.body.title,
      id: uuid(),
      checked: false,
    };
    array.push(newItem);
    saveChanges(array);
    res.json(newItem);
  });
});
app.put('/api/data/:id', (req, res) => {
  readFile((err, data) => {
    const array = JSON.parse(data);
    const newArray = array.map((item) => {
      if (item.id === req.params.id) {
        const arrayObj = item;
        arrayObj.title = req.body.title;
      }
      return item;
    });
    saveChanges(newArray);
    res.json({ data: newArray });
  });
});
app.put('/api/data-checked/:id', (req, res) => {
  readFile((err, data) => {
    const array = JSON.parse(data);
    const newArray = array.map((item) => {
      if (item.id !== req.params.id) {
        return item;
      }
      const newItem = item;
      newItem.checked = !item.checked;
      return newItem;
    });
    saveChanges(newArray);
    res.json({ data: newArray });
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
    res.json({ data: array });
  });
});

app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
  }
});
