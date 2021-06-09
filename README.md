# Mini project to show my vue and node skills.

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```
yarn lint
```

## For the server part

Go to `./server` and type:

### To start mongo
```
docker-compose up
```
### To start node
```
yarn start
```

## Changelog
- Buttons event styling.
- Rename HelloWorld component.
- Hooked up the add product method in the FE and BE
- Added description and imageURL fields in the DB
- Separated colors into a new scss file
- Added AddModal component and added some styles to this component
- Developed the Close modal logic
- Added some shared classes in the main scss
- Improved look and feel of the products
- Added favicon
- Endpoints called using store actions
- Hooked backend using axios and express
- Created Dockerfile and docker-compose.yml files to run mongo

## TODO

- There should be a counter in the page that shows how many items are being
displayed.
- Each item should have the actions: edit and delete. Edit allows a user to update the
image of an item and the description text. Delete allows a user to remove an item
from the list and update the counter.
- A functionality to add a new item should exist. This functionality consists of a form to
upload an image (jpg, gif and png extensions of 320px x 320px size) and a
description text (max chars 300).
- The user should be able to sort the items on the list.
- All the actions of the application should be done without refreshing the page (sort,
add, edit and delete) and saved immediately.
- On a page refresh action, it should display the last state of the list.
- Show a message when no results.
- Create a BE method to update an item.
- Add look and feel to the boxes.
- Validate input text.
- Add loader bones, and use loader from codepen I saw in google email.
- Add a video showing how to start the application.
- Move all the files to a new Route
- Handle server errors and show a modal to the user in the FE for mongo server down, timeout of the request etc.
- Include the node app and FE inside docker image to avoid having the CORS issue and see if that resolves the issue and if positive should remove cors plugin from express.
- Make a gif walking through the application and that GIF in this readme.

