import React from 'react';

class NewBuilding extends React.Component {

  create() {
    const building = {
      name: this.refs.name.value,
      existingRate: this.refs.existingRate.value,
      iceStorageRate: this.refs.iceStorageRate.value,
      airCooled: this.refs.airCooled.value,
      chillerTonnage: this.refs.chillerTonnage.value
    }

    this.props.createBuilding(building)
  }

  render() {
    return (
      <div className="new-building">
        <div>
          <label htmlFor="name">Name</label>
          <input ref="name" id="name" type="text"/>
        </div>
        <div>
          <label htmlFor="existingRate">Existing Rate</label>
          <input ref="existingRate" id="existingRate" type="text"/>
        </div>
        <div>
          <label htmlFor="iceStorageRate">Ice Storage Rate</label>
          <input ref="iceStorageRate" id="iceStorageRate" type="text"/>
        </div>
        <div>
          <label htmlFor="airCooled">Ice Storage Rate</label>
          <input ref="airCooled" id="airCooled" type="text"/>
        </div>
        <div>
          <label htmlFor="chillerTonnage">Chiller Tonnage</label>
          <input ref="chillerTonnage" id="chillerTonnage" type="text"/>
        </div>

        <button onClick={this.create.bind(this)}>Send</button>
      </div>
    )
  }
};

export default NewBuilding;
