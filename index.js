import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NestedG from './UIPAGE1'
import * as serviceWorker from './serviceWorker';
//import Personlist from './personlist';
//import Apple from './apple';
//import Alpha from './Alpha';
//import Check from './day2';
//import Personlist from './personlist';
//import Skt from './styledCompExamples'
//import EnhancedTable from'./tables';
import Speech from './speech'
//import Professor from './professor'
//import HighCharts from './highcharts';
//import MLUPLOAD from './mlupload'
ReactDOM.render(
  <React.StrictMode>
    {/*<Professor/>
    <MLUPLOAD/>*/}
    {/*<Personlist/>*/}
    {/*<HighCharts/>
    <App/> */}
     <Speech/>
    {/*<Alpha favfruit="Orange" /> */}
    {/* <Apple /> */ }
    {/*<Check />*/}
    {/*<Skt />*/}
    {/*<Personlist/>*/}
    
  </React.StrictMode>,
  document.getElementById('root')

);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
