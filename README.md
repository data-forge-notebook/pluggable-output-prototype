# pluggable-output-prototype

This is a prototype of how "pluggable cell outputs" (user creatable visualizations) might work in [Data-Forge Notebook](https://www.data-forge-notebook.com/) v2.

[Click here to contribute to the discussion](https://github.com/data-forge-notebook/editor-core/issues/1)

[Follow the developer on Twitter for more frequent news and updates](https://twitter.com/codecapers)

[Click for the main DFN code repository](https://github.com/data-forge-notebook/editor-core)

## File system

- child-page/
  - A static web page that emulates how a DFN v2 output plugin might be created.
- parent-page/
  - Demonstration of how DFN v2 will embed an output plugin using an iframe.

## Prereqs

You need [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/) installed.

## Setup

Open a terminal and clone this repository:

```bash
git clone https://github.com/data-forge-notebook/pluggable-output-prototype.git
```

Change directory into the local code repository:

```bash
cd pluggable-output-prototype
```

## First, run the web server for the output plugin

Run the build and server for the child web page:

```bash
cd child-page
npm install
npm start
```

## Run it: Electron

Open a new terminal and run the parent-page in Electron:

```bash
cd parent-page
npm install
npm run electron
```

# Run it: Browser

Open a new terminal and run the dev server for the parent web page:

```bash
cd parent-page
npm install
npm start
```

Open the web page for the parent (http://127.0.0.1:5001) and check the console. You'll see output of a message from the parent to the child, and then from the child to the parent.

