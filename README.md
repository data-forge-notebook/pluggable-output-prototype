# pluggable-output-prototype

This is a prototype of how pluggable cell outputs might work in [Data-Forge Notebook](https://www.data-forge-notebook.com/) v2.

This prototype demonstrate how user-pluggable cell outputs (visualizations) might work in the future in Data-Forge Notebook v2.

To try this out, first run the dev server for the child web page (this web page serves the output plugin):

```bash
cd child-page
npm install
npm start
```

Then open another terminal and run the dev server for the parent web page (this web page simulates the embedding of the output plugin):

```bash
cd parent-page
npm install
npm start
```

Open the web page for the parent and check the console. You'll see output of a message from the parent to the child, and then from the child to the parent.

