import React from 'react';
import Map from './map';

class BuildingList extends React.Component {
  render() {
    const {buildings} = this.props;

    return (
      <div className="buildings">
        <Map buildings={buildings} />
      </div>
    )
  }
};

export default BuildingList;
