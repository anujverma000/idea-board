## Idea Board
Clear visible mammer to brainstorm, create plans, manage projects and more.

### `docker-compose up`

 - Runs Client, Server and MongoDb.
 - Runs the app in the development mode.
 - Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
 - Open [http://localhost:9000](http://localhost:9000/ideas) to view it in the browser.
 - The page will reload if you make edits.
 - You will also see any lint errors in the console.

 - To rebuild the containers `docker-compose up --build`.
 - To start groundup again user `docker-compose down && docker-compose up --build`

### `yarn test`

 - Launches the test runner in the watch mode.
 - Use `yarn test --watchAll=false` to disable watch

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.
