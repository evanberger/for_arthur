import React from 'react';
import Map from './common/map';

class BuildingList extends React.Component {
  renderBuilding(building) {
    return (
      <div>
        <h2>{building.name}</h2>
        <div>{building.chillerType}</div>
      </div>
    )
  }

  render() {
    const {loading, buildings} = this.props;

    if (loading) return null;

    return (
      <div className="buildings">
        {buildings.map(this.renderBuilding)}
      </div>
    )
  }
};

export default BuildingList;
