import React from 'react';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import gql from 'graphql-tag';

import Component from '../components/new_building';
import { addBuilding } from '../actions';

const CREATE_BUILDING = gql`
  mutation createBuilding($building: BuildingInput!) {
    createBuilding(building: $building) {
      _id
    }
  }
`;

const ComponentWithData = graphql(CREATE_BUILDING, {
  props: ({ ownProps, mutate }) => ({
    createBuilding(building) {
      return mutate({variables: {building}})
        .then(({data}) => {
          alert('New Buiding ' + data.createBuilding._id)
          //ownProps.onAddedBuilding(data.createBuilding._id);
        });
    },
  })
})(Component);

const ComponentWithDataAndState = connect(
  (state) => ({ buildingId: 'test' }),
  // (dispatch) => ({
  //   onAddedBuilding(id) {
  //     dispatch(addBuilding(id));
  //   }
  // }),
)(ComponentWithData);

export default ComponentWithDataAndState
