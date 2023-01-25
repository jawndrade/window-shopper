# Window Shopper
Phase 2 Project: React, JavaScript, HTML, CSS, JSON

## Introduction
Window Shopper is a shopping app that allows users to view/like/dislike items, add items to cart, search/filter items, and list items to sell.

## Repo
* GitHub Repository: https://github.com/jawndrade/window-shopper

## Technologies
* React
* JavaScript
* HTML
* CSS
* JSON  

## User Stories
The user can:
* Login to an existing account
* Sign up and create an account
* View ALL items
* View one item at a time (window shop)
* Like or dislike items
* Add items to their cart
* Remove items from cart
* Search for an item
* Filter items by category
* Add items to sell

## Setup
To run this project, follow the following steps:
1. Clone [repository](https://github.com/jawndrade/window-shopper)
```
git clone https://github.com/jawndrade/window-shopper
```
2. Get the server running
```
cd window-shopper
```
```
json-server --watch db.json
```
3. Install packages and start the app
```
npm i && npm start
```

## DEMO

<!-- Add DEMO gif or picture here of each page that shows their functionality -->


## Features
### Backend API Points
METHOD | ENDPOINT | DESCRIPTION
------ | ---------| -----------
GET | /items | fetches a list of items and their data from the database
POST | /items | keeps a new item from "list item" form
GET | /users | fetches a list of users
POST | /users | keeps a new user from sign up page

### Client-Side Routes
ROUTE | DESCRIPTION
---------| -----------
/ | home page + login page
/signup | sign up page
/shop | view all items
/windowshop | view one item at a time
/additem | list a new item
/cart | view your cart
/likes | view your likes and dislikes


<!-- Put features here! -->

<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# window-shopper -->