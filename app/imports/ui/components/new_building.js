import React from 'react';
import _ from 'lodash';

class NewBuilding extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      templateSelected: null
    };
    this.loadTemplate = this.loadTemplate.bind(this);
  }

  create() {
    const building = {
      name: this.refs.name.value,
      existingRate: this.refs.existingRate.value,
      iceStorageRate: this.refs.iceStorageRate.value,
      airCooled: this.refs.airCooled.value,
      chillerTonnage: this.refs.chillerTonnage.value,
      // hours: {
      //   hour1: this.refs.hour1.value * templateSelected.hour1
      // }
    };

    this.props.createBuilding(building);
  }

  loadTemplate() {
    const templateSelected = _.find(this.props.templates, {
      name: this.refs.template.value
    });

    this.setState({
      templateSelected: templateSelected
    });
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

        <div>
          <label htmlFor="template">Hours template</label>
          <select ref="template" id="template" onChange={this.loadTemplate}>
            <option value="">Select a template</option>
            <option value="School">School</option>
            <option value="Business">Business</option>
          </select>
        </div>

        <div>
          <h3>Template selected</h3>

          {this.state.templateSelected && this.state.templateSelected.name}
        </div>

        <button onClick={this.create.bind(this)}>Send</button>
      </div>
    );
  }
}

export default NewBuilding;
