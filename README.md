# Asian Food
Asian Food Map project as part for final Project for Udacity Front End Web Developer Nano Degree Program
(Neighborhood Map in react)

## Usage guide
This project use TypeScript for details check on [typescriptlang.org](https://www.typescriptlang.org)  
**Service Worker only works on production! Build project before if you want to test it!**

### Installation
* Tools requed for project usage
    1. NodeJS - https://nodejs.org/
    2. CodeEditor (eg, WebStorm, VSCode, Atom)
    3. GIT client (eg. https://git-scm.com)
    4. And old fashion **Console/Terminal**
* clone project to your pc `git clone https://github.com/BeroBurny/Neighborhood-Map-React-.git`
* navigate inside project folder (`cd Neighborhood-Map-React-`)
* install all project dependencies with `npm install` (or `yarn install`)
* after complete project installation open open second console and navigate to project folder
* then navigate into `cd RESTful` folder
* install all RESTful dependencies whit `npm install` (or `yarn install`) 
  * install MongoDB for database (here is guide => [guide link](https://docs.mongodb.com/manual/installation/) ) 
* after complete project installation run RESTful Server (Backend-API) `npm start` (or `yarn start`)
* when server start you will receive message like that  
`neighborhood-map RESTful API server started on: http://localhost:3001/`  
write address from end od message `http://localhost:3001/` (you gonna need for .env)
* _Return to first console but second one need remain running!_
* Setup Project environment variables.
  * create file `.env` in root of project
  * add `REACT_APP_MAPBOXACCESSTOKEN=[your MapBox key]` => [MapBox.com](https://www.mapbox.com/maps/)
  * add `REACT_APP_API_BASE_URL=[Back-End URL]` for Back-End URL like `http://localhost:3001/` (<= you can use if you use default settings for back-end)
* And now you are ready to go... if you want test project is skip this step... start development server if you want to continue working on a project
  * start the development server with `npm start` (or `yarn start`)
* Deploying product for production
  * build project whit `npm build` (or `yarn build`)
    * more about deployment you can read on [http://bit.ly/2vY88Kr](http://bit.ly/2vY88Kr)
* install local server `npm install -g serve` (or `yarn global add serve`)
* start local server `serve -s build` and navigate to
* open favorite browser and enter address `http://localhost:5000`
  * happy exploring! :grin:
  * Enjoy in offline experience whit service worker :stuck_out_tongue_winking_eye:
  
  
##### Package used in project
* react-emotion - https://emotion.sh
* axios - https://github.com/axios/axios
* immer - https://github.com/mweststrate/immer
* react-map-gl - https://uber.github.io/react-map-gl/#/
* react-icons - https://react-icons.netlify.com/#/
* redux - https://redux.js.org
* redux-saga - https://redux-saga.js.org
* reselect - https://github.com/reduxjs/reselect
* typesafe-actions - https://github.com/piotrwitek/typesafe-actions

### Back-End Server
Back-End server is simple `Express` server based on `nodeJs`. Required for Front-End application  
For installing it navigate inside `RESTful` folder and make `npm install` (or `yarn install`)  
Server use MongoDB for database if you need one here is guide => [guide link](https://docs.mongodb.com/manual/installation/)  
Then start server whit `npm start` (or `yarn start`)  
_(In case you need change setting for a server you can use environment variables, check `server.mjs` for list)_

## Credits
Front-End and Back-End writer Bernard "@BeroBurny" Stojanovic
