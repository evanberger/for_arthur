import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '../core/components/main_layout';
import BuildingList from './containers/building_list';
import NewBuilding from './components/new_building';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'home',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<BuildingList />)
      });
    }
  });


  FlowRouter.route('/new-building', {
    name: 'new.building',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NewBuilding />)
      });
    }
  });
}
