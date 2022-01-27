# pluggable-output-prototype

A test of using an iframe for a "cell output".  

This test demonstrate how user-pluggable cell outputs (visualizations) might work in the future in Data-Forge Notebook v2.

To try this out, first run the dev server for the chlid web page:

```bash
cd child-page
npm install
npm start
```

Then open another terminal and run the dev server for the parent web page:

```bash
cd parent-page
npm install
npm start
```

Open the web page for the parent and check the console. You'll see output of a message from the parent to the child, and then from the child to the parent.

