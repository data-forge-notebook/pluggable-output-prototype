# pluggable-output-prototype

This is a prototype of how "pluggable cell outputs" (user creatable visualizations) might work in [Data-Forge Notebook](https://www.data-forge-notebook.com/) v2.

[Click here to contribute to the discussion](https://github.com/data-forge-notebook/editor-core/issues/1)

[Follow the developer on Twitter for more frequent news and updates](https://twitter.com/codecapers)

[Click for the main DFN code repository](https://github.com/data-forge-notebook/editor-core)

## Get it running

You need [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/) installed.

Open a terminal and clone this repository:

```bash
git clone https://github.com/data-forge-notebook/pluggable-output-prototype.git
```

Change directory into the local code repository:

```bash
cd pluggable-output-prototype
```

First run the dev server for the child web page (this web page serves the output plugin):

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

