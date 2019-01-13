# Express Portfolio

View the demo [here](https://mmgolden-express-portfolio.herokuapp.com/).

This portfolio website showcases the projects that I have built. A JSON file stores all the data about the projects. Pug is used to create templates that utilize the JSON to generate markup that is displayed in the browser. Express is used to import the required dependencies, link JSON with the Pug templates, set up routes to handle requests, set up middleware to utilize static files, handle errors, and set up a server to serve the project. This project was created for the purpose of the Treehouse Full Stack JavaScript Techdegree.

## Style Changes

You can view the original styles in the example-html folder. I have changed the fonts, the background for the sidebar, removed the bullet points from the skills and technologies lists, and added icons for the social media and project links. I also made some adjustments to the PUG templates to make the website mobile-friendly.

## Project Requirements

This project is reviewed and graded based on a set of requirements.

### Meets Expectations

* The node_modules folder is referenced in the .gitignore file and isn't in the repo.
* Running npm install downloads all necessary dependencies.
* Running node app.js serves the app.
* The data.json file is present.
* The data.json file contains a projects property set to an array containing at least five objects that each contain the following properties: id, project_name, description, technologies, live_link, github_link, and image_urls.
* The following routes do render the appropriate pages: home page, about page, and a projects route that includes a project id parameter.
* App uses a static route to serve the static files in the public folder
* The following template are present: layout.pug, index.pug, about.pug, and project.pug.
* Templates have all of the required information as exampled in the provided HTML and mockup files: name, titles, descriptions, project descriptions, project images, and links.
* Starter comments have been removed from pug files.
* App logs out a user friendly error message to the console when the app is pointed at a non-existent route such as /error/error.
* Final project's layout and positioning does match the example HTML or mockup files.

### Exceeds Expectations

* Running npm start serves the app.
* error.pug template has been created.
* When the app is directed at a non-existent route, like /error/error, the app displays a user friendly error page in the browser that details the following: error.message, error.status, and error.stack.
* Project has at least three of the following items customized: color, background color, font, box or text shadows, transitions or animations, or add a logo.
* Changes detailed in the README.md file and the submission notes.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development.

### Downloading

Click on the 'Clone or download' button and select 'Download Zip.'

### Installing

Step 1: Unzip the zip file.

Step 2: Open the folder in a text editor.

Step 3: In the terminal, install dependencies

```
npm install
```

Step 4: Start the app

```
npm start
```
Step 5: View the website on http://localhost:3000/

