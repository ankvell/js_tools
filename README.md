Start from installation from [Node.js](https://nodejs.org/) website ( if you use Windows or OS X ). 
For Linux:

$ **sudo apt-get update**

$ **sudo apt-get install nodejs**


Install Gulp using the Node Package Manager (npm) from the terminal:
$ **npm install --global gulp**


Use $ **npm install** with no args, and this command will Install the dependencies from a package.json manifest to the local node_modules folder.


Run gulp commands:

$ **gulp build** - build files from **dev** to **dist**;
compile css, concatenate all css and js file, make sourcemaps and minify css and js files; also checked js code with jsHint;
$ **gulp serve** - run the watchers and at first serve project to local server _localhost:8080_ and then connect to the tunnel server, setup the tunnel, and tell you what url to use for testing. 
