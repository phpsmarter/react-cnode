// ReactotronConfig.js
import {reactotronRedux } from 'reactotron-redux';
import Reactotron from 'reactotron-react-js'


// then add it to the plugin list
Reactotron
  .configure({ name: 'Redux-todos-undo' })
  .use(reactotronRedux()) //  <- here i am!
  .connect() //Don't forget about me!
export default Reactotron;
