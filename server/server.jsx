import {StaticRouter} from 'react-router-dom/server';
import ReactDOMServer from 'react-dom/server';
import {HelmetProvider} from 'react-helmet-async';
import App from '../src/App';
import fs from 'fs';
import express from 'express';

const app = express();
app.use('/static', express.static(__dirname));
const PORT = process.env.PORT;


/**
 * Produces the initial non-interactive HTML output of React
 * components. The hydrateRoot method is called on the client
 * to make this HTML interactive.
 * @param {string} location
 * @return {string}
 */
const createReactApp = async (location) => {
  const helmetContext = {};
  const reactApp = ReactDOMServer.renderToString(
     <HelmetProvider context={helmetContext}>
        <StaticRouter location={location}>
          <App />
        </StaticRouter>
     </HelmetProvider>
  );

  const { helmet } = helmetContext;

    const reactHtml = `
      <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta 
                name="description"
                content="App created using ReactJS Webpack"
                data-rh="true"
            />
            <link href="/static/style/bundle.css" rel="stylesheet">
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            ${helmet.style.toString()}
        </head>
        <body>
            <div id="root">${reactApp}</div>
        </body>
        <script type="module" src="/static/client.js"></script>
        <script src="https://kit.fontawesome.com/b1d02b6bc7.js" crossorigin="anonymous"></script>
    </html> 
  `
    return reactHtml;
};

app.get('*', async (req, res) => {
  const indexHtml = await createReactApp(req.url);
  res.status(200).send(indexHtml);
});

app.listen(PORT, () => {
    console.log(__dirname);
  console.log(`Server started on port ${PORT}`);
});


