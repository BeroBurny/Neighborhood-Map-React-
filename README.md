# Asian Food
Asian Food Map project as part for final Project for Udacity Front End Web Developer Nano Degree Program
(Neighborhood Map in react)

## Usage guide
This project use TypeScript for details check on [typescriptlang.org](https://www.typescriptlang.org)

### Back-End Server
Back-End server is simple `Express` server based on `nodeJs`. Required Front-End application  
For installing it navigate inside `RESTful` folder and make `npm install` (or `yarn install`)  
Server use MongoDB for database if you need one here is guide => [guide link](https://docs.mongodb.com/manual/installation/)  
Then start server whit `npm start` (or `yarn start`)  
_(In case you need change setting for a server you can use environment variables, check `server.mjs` for list)_

### Installation
* install all project dependencies with `npm install` (or `yarn install`)
  * check if `react-select` did update for `2.0` release on [@types/react-select](https://www.npmjs.com/package/@types/react-select) if there no version for `2.0` or above you need to do kinda "hack" for types :sweat:  
  open file inside `node_modules/@types/react-select/` => `index.d.ts` find  
  `export interface ReactSelectProps<TValue = OptionValues> extends React.Props<ReactSelectClass<TValue>>`
  on line `234` and add `isMulti?: boolean;` inside (that will fix type error)
* Setup Project environment variables.
  * create file `.env` in root of project
  * add `REACT_APP_MAPBOXACCESSTOKEN=[your MapBox key]` => [MapBox.com](https://www.mapbox.com/maps/)
  * add `REACT_APP_API_BASE_URL=[Back-End URL]` for Back-End URL like `http://localhost:3001/` (<= you can use if you use default settings for back-end)
* start the development server with `npm start` (or `yarn start`)
* build project whit `npm build` (or `yarn build`)
  
  
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

## Credits
Front-End and Back-End writer Bernard "@BeroBurny" Stojanovic 