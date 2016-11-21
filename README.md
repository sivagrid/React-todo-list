# React-todo-list

<h4>Running the App:</h4>
First do the <code>npm install</code> all of the dependencies, Then run <code>npm run serve</code> to run the app at port 3000.
<h4>Hot module reloading</h4>
Webpack traverses all of the Javascript files (starting with client/client.js and moving through the import and/or require statements) and bundles them into one file called bundle.js. bundle.js is then loaded by a script tag in the index.html. The server currently has webpack's hot module reloading middleware set up, meaning that any changes to react/redux code will not trigger a complete re-bundle, but rather will update "inline" and the changes will be immediately reflected in the browser
