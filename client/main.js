import {createApp} from 'mantra-core';
import initContext from './configs/context';

// modules
import coreModule from './modules/core';
import buildingsModule from './modules/buildings';
import hoursModule from './modules/hours';

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(buildingsModule);
app.loadModule(hoursModule);
app.init();
