import React from 'react';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import gql from 'graphql-tag';

import Component from '../components/building_list';

const BUILDINGS_QUERY = gql`
  query {
    buildings {
      name
      existingRate
      iceStorageRate
      chillerType
      chillerTonnage
      template
      standardChillerEfficiency
      ddChillerEfficiency
      iceMakingEfficiency
      nonIceChillerCost
      icemakingChillerCost
      icebankCost
      hxCost
      rebate
      additionalCostsIceStorageInstallation
      downsizeDuctSavings
      downsizePipeSavings
      roundDuctSavings
      hours {
        hour1
        hour2
        hour3
        hour4
        hour5
        hour6
        hour7
        hour8
        hour9
        hour10
        hour11
        hour12
        hour13
        hour14
        hour15
        hour16
        hour17
        hour18
        hour19
        hour20
        hour21
        hour22
        hour23
        hour24
      }
    }
  }
`;

const ComponentWithData = graphql(BUILDINGS_QUERY, {
  props({ data: { loading, buildings } }) {
    console.log(buildings)
    return { loading, buildings };
  }
})(Component);


export default ComponentWithData
