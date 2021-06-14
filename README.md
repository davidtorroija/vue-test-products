## David Torroija Code test


### To start all the services (mongo, express, browser app)
```
docker-compose up --build
```
### Then go to a browser an type
```
http://localhost:8080
```
---

## Primary tasks
- The user should be able to sort the items on the list.
- ~~On a page refresh action, it should display the last state of the list.~~
- Show a message when no results.
- ~~Each item should have the actions: edit and delete. Edit allows a user to update the
image of an item and the description text. Delete allows a user to remove an item
from the list and update the counter.~~
- ~~There should be a counter in the page that shows how many items are being
displayed~~.
- ~~A functionality to add a new item should exist. This functionality consists of a form to
upload an image (jpg, gif and png extensions of 320px x 320px size) and a
description text (max chars 300).~~
- ~~All the actions of the application should be done without refreshing the page (sort,
add, edit and delete) and saved immediately.~~

## Changelog
- Limit input to 300 chars
- Integrated all the apps to run via docker!
- Refactor BE, moved REST methods to a file
- Sorting items
- Added dropdown to sort items
- Editing an item is working!
- Improved the UI of the dashboard
- Added paste hook to avoid pasting css in the text area.
- Preview the image in the modal
- Move file to a static folder of the app
- Send file to express
- Buttons event styling.
- Inputs styling.
- Rename HelloWorld component to ProductsDashboard.
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
- Remove image when editing
- Invalid Image error handling when upload.
- Drag and drop files.
- Handle server errors and show a modal to the user in the FE for mongo server down, timeout of the request etc.
- Include the node app and FE inside docker image to avoid having the CORS issue and see if that resolves the issue and if positive should remove cors plugin from express.
- Make a gif walking through the application and that GIF in this readme.
- Loaders everywhere
- Mongodb investigate deprecation warning on edit


