To use this app, you will need to install Gitbash, which I would recommend viewing this video to help you: https://www.youtube.com/watch?v=iR3C0V2Pmvk&list=PLQnkCDSIdQUd6QxF5kPP9SSIT4NrLQXe0. Next, you will have to go to the Node website
to download and install Node and install the version that is recommended for most users, which should be "v6.11.2.LTS)". Here is the link to follow for the installation of Node.JS: https://treehouse.github.io/installation-guides/.  
Once you have downloaded and installed Node, you need to install the Express, Angular, Mongoose, Body-Parser, Webpack, and Bootstrap via the command line.  First, be sure you are in the "susan_cdlou_project" folder and do an "ls". 
Once you have done that, you can install the Node modules as follows:  

*npm install express --save -E
*npm install angular 
*npm install --save -E mongoose
*npm install body-parser --save -E
*npm install webpack --save-dev-exact
*npm install bootstrap@3
*npm install angular-xeditable --save-dev-exact

If you have Node installed globally, you should just be able to type "npm install" in the command line and all of the node modules will be installed for you simultaneously. Finally, you must install MongoDB.  Here is the link to the 
website: https://www.mongodb.org/downloads.  Here is also a link to the installation guide for Windows: https://treehouse.github.io/installation-guides/windows/mongo-windows.html For a Mac, you need to use this link: 
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/.


Once, you have installed everything, open three Gitbash command line windows.  In the first command line window, start up Mongo by navigating to "susan_cdlou_project" and type in "ls".  Once you are in your project file (which you know you
are once you see a list of all those files for this project), type "mongod" which will start the database.  In the second window, do the same thing and start "Node" by typing "nodemon src/app.js". Be sure that
Nodemon has also successfully connected to Mongo or the app won't work.  In the third command line window, do the same thing and type in "webpack" to get all the angular data to appear.  After Mongo, Node, and Webpack are 
started, run the project in the browser by typing in "localhost:3000" in the browser window at the top of the page. You should see a table listing all of the subjects and activities for a one day lesson plan for preschoolers.   
In the box to the right of the subject names, there is a list of default activities to go with that subject.  You can edit the default subjects and/or activities by selecting either one, typing in a new subject and/or activity, and
save it to or delete it from the database. You can also select a subject and/or activity from the dropdown menu that appear when you click on the subject or activity to be edited in the editing label, 
which shows all subjects and/or activities that have been added to the database as each time they are edited and saved.  The dropdown menus for the subject and plan are hidden until you click on the edit button and any plans you add
to each dropdown menu are hidden as well until you click on the editing label itself.  You can also select the button "Add Row" to add your own subject and activity that can be saved, edited, and deleted to the database.  
 Lastly, if you can refresh the page, it will go back to its default settings.  Any new plans added to the lesson plan will also re-appear with the default settings.

