import React from 'react';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import gql from 'graphql-tag';

import Component from '../components/building_list';

const BUILDINGS_QUERY = gql`
  query {
    buildings {
      name
      createdAt
      existingRate
      iceStorageRate
      airCooled
      chillerTonnage
      chillerEfficiency
      dualDutyCoolingChillerEfficiency
      dualDutyIceMakingEfficiency
      monthsCooling
      savingsDownsizingPipes
      savingsDownsizingPumps
      savingsRoundDuctwork
      additionalCostsIceStorageInstallation
      user
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
