To use this app, you will need to install the following Node modules to your computer:  Mongo, Mongoose, Express, Angular, Node, Body-Parser, and Webpack. Firist, you will have to go to the Node website to download and install 
the version that is recommended for most users, which should be "v6.9.2.LTS)". Here is the link to follow for the installation of Node.JS: http://treehouse.github.io/installation-guides/.  The other programs can be installed 
via the command line.  First, be sure you are in the "susan_clprojects" folder and do an "ls". Once you have done that, you can install the Node modules as follows:  

*npm install express --save -E
*npm install angular 
*npm install --save -E mongoose
*npm install body-parser --save -E
*npm install webpack --save-dev-exact
*npm install bootstrap@3

Then, you must install MongoDB.  Here is the link to the website: https://www.mongodb.org/downloads.  Here is the link to the installation guide for Windows: http://treehouse.github.io/installation-guides/windows/mongo-windows.html 
and a link to install it on a Mac: http://treehouse.github.io/installation-guides/mac/mongo-mac.html.


Once, you have installed everything.  Open three Gitbash command line windows.  In the first command line window, start up Mongo by navigating to "susan_clprojects" and typing "ls".  Once you are in your project file (which you know you
are once you see a list of all those files for this project), type "mongod" which will start the database.  In the second window, do the same thing and start "Node" by typing "nodemon src/app.js". Be sure that
Nodemon has also successfully connected to Mongo or the app won't work.  In the third command line window, do the same thing and type in "webpack" to get all the angular data to appear.  After Mongo, Node, and Webpack are 
started, run the project in the browser and type in "localhost:3000" in the browser window at the top of the page. You should see a chart listing all of the subjects for a one day lesson plan for preschoolers.   
In the box to the right of the subject names, there is a list of default activities to go with that subject.  You can either save the default activity, delete the activity, move the cursor into the box and edit the activity 
by typing a new activity in and save or delete it and add new items to a dropdown menu that you can either select when you edit, or click on the "Add a new plan" button to add a new plan and subject and edit it as well as save and delete it. 
If you refresh the page, the lesson plan will return to its default settings.

