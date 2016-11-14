import React from 'react';
import Map from './common/map';

class BuildingList extends React.Component {
  renderBuilding(building) {
    return (
      <tr>
        <td>
          {building.name && <div>{building.name}</div>}
        </td>
        <td>
          {building.chillerType && <div>{building.chillerType}</div>}
        </td>
      </tr>
    );
  }

  render() {
    const {loading, buildings} = this.props;

    if (loading) return null;

    return (
      <table className="buildings">
        <thead>
          <td><strong>Name</strong></td>
          <td><strong>Chiller Type</strong></td>
        </thead>
        <tbody>
          {buildings.map(this.renderBuilding)}
        </tbody>
      </table>
    )
  }
};

export default BuildingList;
