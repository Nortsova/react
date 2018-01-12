import Webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import Koa from 'koa';
import send from 'koa-send';
import serve from 'koa-static';
import koaBody from 'koa-body';
import path from 'path';
import WebpackConfig from './webpack.config';
import config from './src/config';
import { configurePublic, configurePrivate } from './server/controllers';

const {
  hotLoader: {
    host: hotHost,
    port: hotPort,
  },
  host,
  port,
} = config;

const staticFolder = 'static';

const app = new Koa();


app.use(koaBody());
app.use(serve(path.resolve(__dirname, `./${staticFolder}`)));

app.use(configurePublic());
app.use(configurePrivate());

app.use(async (ctx) => {
  await send(ctx, `/${staticFolder}/index.html`);
});

app.listen(port, () => console.log(`Server listen on ${port}`)); // eslint-disable-line no-console


const devServer = new WebpackDevServer(Webpack(WebpackConfig), {
  noInfo: true,
  hot: true,
  stats: { color: true },
  proxy: { '*': `http://${host}:${port}` },
  publicPath: WebpackConfig.output.publicPath,
});

devServer.listen(hotPort, (err) => {
  if (err) {
    console.error(err); // eslint-disable-line no-console
  } else {
    console.log(`Hot Loader serves on http://${hotHost}:${hotPort}`); // eslint-disable-line no-console
  }
});
