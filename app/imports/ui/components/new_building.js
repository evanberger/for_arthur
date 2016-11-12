import React from 'react';
import _ from 'lodash';

class NewBuilding extends React.Component {

  constructor(props) {
    super(props);
    this.loadTemplate = this.loadTemplate.bind(this);
  }

  create() {
    const building = {
      name: this.refs.name.value,
      existingRate: this.refs.existingRate.value,
      iceStorageRate: this.refs.iceStorageRate.value,
      chillerType: this.refs.chillerType.value,
      chillerTonnage: this.refs.chillerTonnage.value,
      template: this.refs.template.value,
      standardChillerEfficiency: this.refs.standardChillerEfficiency.value,
      ddChillerEfficiency: this.refs.ddChillerEfficiency.value,
      iceMakingEfficiency: this.refs.iceMakingEfficiency.value,
      nonIceChillerCost: this.refs.nonIceChillerCost.value,
      icemakingChillerCost: this.refs.icemakingChillerCost.value,
      icebankCost: this.refs.icebankCost.value,
      hxCost: this.refs.hxCost.value,
      rebate: this.refs.rebate.value,
      additionalCostsIceStorageInstallation: this.refs.additionalCostsIceStorageInstallation.value,
      downsizeDuctSavings: this.refs.downsizeDuctSavings.value,
      downsizePipeSavings: this.refs.downsizePipeSavings.value,
      roundDuctSavings: this.refs.roundDuctSavings.value,
      hours: {
        hour1: this.refs.hour1.value,
        hour2: this.refs.hour2.value,
        hour3: this.refs.hour3.value,
        hour4: this.refs.hour4.value,
        hour5: this.refs.hour5.value,
        hour6: this.refs.hour6.value,
        hour7: this.refs.hour7.value,
        hour8: this.refs.hour8.value,
        hour9: this.refs.hour9.value,
        hour10: this.refs.hour10.value,
        hour11: this.refs.hour11.value,
        hour12: this.refs.hour12.value,
        hour13: this.refs.hour13.value,
        hour14: this.refs.hour14.value,
        hour15: this.refs.hour15.value,
        hour16: this.refs.hour16.value,
        hour17: this.refs.hour17.value,
        hour18: this.refs.hour18.value,
        hour19: this.refs.hour19.value,
        hour20: this.refs.hour20.value,
        hour21: this.refs.hour21.value,
        hour22: this.refs.hour22.value,
        hour23: this.refs.hour23.value,
        hour24: this.refs.hour23.value,
      }
    }

    this.props.createBuilding(building);
  }

  loadTemplate() {
    const templateSelected = _.find(this.props.templates, {name: this.refs.template.value});

    this.refs.hour1.value = templateSelected.hours.hour1;
    this.refs.hour2.value = templateSelected.hours.hour2;
    this.refs.hour3.value = templateSelected.hours.hour3;
    this.refs.hour4.value = templateSelected.hours.hour4;
    this.refs.hour5.value = templateSelected.hours.hour5;
    this.refs.hour6.value = templateSelected.hours.hour6;
    this.refs.hour7.value = templateSelected.hours.hour7;
    this.refs.hour8.value = templateSelected.hours.hour8;
    this.refs.hour9.value = templateSelected.hours.hour9;
    this.refs.hour10.value = templateSelected.hours.hour10;
    this.refs.hour11.value = templateSelected.hours.hour11;
    this.refs.hour12.value = templateSelected.hours.hour12;
    this.refs.hour13.value = templateSelected.hours.hour13;
    this.refs.hour14.value = templateSelected.hours.hour14;
    this.refs.hour15.value = templateSelected.hours.hour15;
    this.refs.hour16.value = templateSelected.hours.hour16;
    this.refs.hour17.value = templateSelected.hours.hour17;
    this.refs.hour18.value = templateSelected.hours.hour18;
    this.refs.hour19.value = templateSelected.hours.hour19;
    this.refs.hour20.value = templateSelected.hours.hour20;
    this.refs.hour21.value = templateSelected.hours.hour21;
    this.refs.hour22.value = templateSelected.hours.hour22;
    this.refs.hour23.value = templateSelected.hours.hour23;
    this.refs.hour24.value = templateSelected.hours.hour24;
  }

  render() {
    return (
      <div className="new-building row">
        <div className="col-xs-6 col-xs-6-pull">
          <h2>General Project Info</h2>
          <div className="form-group">
            <label htmlFor="name">Project Name</label>
            <input ref="name" id="name" className="form-control" className="form-control" type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="existingRate">Existing Rate</label>
            <input ref="existingRate" id="existingRate" className="form-control" type="text"/>
          </div>
          <div className="form-group">
            <label htmlFor="iceStorageRate">Ice Storage Rate</label>
            <input ref="iceStorageRate" id="iceStorageRate" className="form-control" type="text"/>
          </div>
          <div className="form-group">
            <label htmlFor="monthsCooling">Months of Cooling</label>
            <select ref="monthsCooling" id="monthsCooling" className="form-control">
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </div>
          <h2 className="section-start">Chiller Plant Info</h2>
          <div className="form-group">
            <label htmlFor="chillerType">Air-Cooled / Water-Cooled</label>
            <select ref="chillerType" id="chillerType" className="form-control">
              <option value="Air-Cooled">Air-Cooled</option>
              <option value="Water-Cooled">Water-Cooled</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="chillerTonnage">Chiller Tonnage</label>
            <input ref="chillerTonnage" id="chillerTonnage" className="form-control" type="text"/>
          </div>
          <div className="form-group">
            <label htmlFor="standardChillerEfficiency">Chiller Efficiency, standard chiller</label>
            <div className="input-group">
              <input ref="standardChillerEfficiency" className="form-control" id="standardChillerEfficiency" type="number"/>
              <div className="input-group-addon">kW/ton</div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="ddChillerEfficiency">Dual-Duty Chiller Efficiency</label>
            <div className="input-group">
              <input ref="ddChillerEfficiency" className="form-control" id="ddChillerEfficiency" type="number"/>
              <div className="input-group-addon">kW/ton</div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="iceMakingEfficiency">Ice-Making Chiller Efficiency</label>
            <div className="input-group">
              <input ref="iceMakingEfficiency" className="form-control" id="iceMakingEfficiency" type="number"/>
              <div className="input-group-addon">kW/ton</div>
            </div>
          </div>
          <h2 className="section-start">Upfront Costs & Financial Variables</h2>
          <div className="form-group">
            <label htmlFor="nonIceChillerCost">Non Ice Chiller Cost:</label>
            <div className="input-group">
              <div className="input-group-addon">$</div>
              <input ref="nonIceChillerCost" className="form-control" id="nonIceChillerCost" type="number" placeholder="500"/>
              <div className="input-group-addon">/ton</div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="icemakingChillerCost">Ice-Making Chiller Cost:</label>
            <div className="input-group">
              <div className="input-group-addon">$</div>
              <input ref="icemakingChillerCost" className="form-control" id="icemakingChillerCost" type="number" placeholder="500" />
              <div className="input-group-addon">/ton</div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="icebankCost">Cost per IceBank tank</label>
            <div className="input-group">
              <div className="input-group-addon">$</div>
              <input ref="icebankCost" className="form-control" id="icebankCost" type="number" placeholder="14,000"/>
              <div className="input-group-addon">/tank</div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="hxCost">Cost for Plate-Frame HX</label>
            <div className="input-group">
              <div className="input-group-addon">$</div>
              <input ref="hxCost" className="form-control" id="hxCost" type="number" placeholder="60"/>
              <div className="input-group-addon">/ton</div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="additionalCostsIceStorageInstallation">Additional Costs for Ice Storage</label>
            <div className="input-group">
              <div className="input-group-addon">$</div>
              <input ref="additionalCostsIceStorageInstallation" className="form-control" id="additionalCostsIceStorageInstallation" type="number" placeholder="60,000"/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="rebate">Rebate</label>
            <div className="input-group">
              <div className="input-group-addon">$</div>
              <input ref="rebate" className="form-control" id="rebate" type="number" placeholder="0"/>
              <div className="input-group-addon">/kW</div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="downsizeDuctSavings">Savings from Downsized Ducts</label>
            <div className="input-group">
              <div className="input-group-addon">$</div>
              <input ref="downsizeDuctSavings" className="form-control" id="downsizeDuctSavings" type="number" placeholder="0"/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="downsizePipeSavings">Savings from Downsized Pipes</label>
            <div className="input-group">
              <div className="input-group-addon">$</div>
              <input ref="downsizePipeSavings" className="form-control" id="downsizePipeSavings" type="number" placeholder="0"/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="roundDuctSavings">Savings from Round Ductwork</label>
            <div className="input-group">
              <div className="input-group-addon">$</div>
              <input ref="roundDuctSavings" className="form-control" id="roundDuctSavings" type="number" placeholder="0"/>
            </div>
          </div>
        </div>
        <div className="col-xs-6 col-xs-6-push">
          <h2>Building Load Info</h2>
          <div className="form-group">
            <label htmlFor="template">Hours template</label>
            <select ref="template" id="template" className="form-control" onChange={this.loadTemplate}>
              <option value="">Select a template</option>
              <option value="Middle School">Middle School</option>
              <option value="High School">High School</option>
              <option value="Office Building">Office Building</option>
              <option value="College">College</option>
            </select>
          </div>
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th className="col-xs-2" scope="col">HE</th>
                  <th className="col-xs-5" scope="col">Hour Type</th>
                  <th className="col-xs-5" scope="col">Building Load (in tons)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <select ref="HE1type" className="form-control" onChange={this.HE1type}>
                      <option value="icemaking">Ice-Making</option>
                      <option value="partial">Partial Storage</option>
                      <option value="full">Full Storage</option>
                      <option value="na">No Action</option>
                    </select>
                  </td>
                  <td><input ref="hour1" className="form-control" id="HE1" type="number" placeholder="0" min="0" /></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    <select ref="HE2type" className="form-control" onChange={this.HE2type}>
                      <option value="icemaking">Ice-Making</option>
                      <option value="partial">Partial Storage</option>
                      <option value="full">Full Storage</option>
                      <option value="na">No Action</option>
                    </select>
                  </td>
                  <td><input ref="hour2" className="form-control" id="HE2" type="number" placeholder="0" min="0" /></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    <select ref="HE3type" className="form-control" onChange={this.HE3type}>
                      <option value="icemaking">Ice-Making</option>
                      <option value="partial">Partial Storage</option>
                      <option value="full">Full Storage</option>
                      <option value="na">No Action</option>
                    </select>
                  </td>
                  <td><input ref="hour3" className="form-control" id="HE3" type="number" placeholder="0" min="0" /></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td></td>
                  <td><input ref="hour4" className="form-control" id="HE4" type="number" placeholder="0" min="0" /></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td></td>
                  <td><input ref="hour5" className="form-control" id="HE5" type="number" placeholder="0" min="0" /></td>
                </tr>
                <tr>
                  <td>6</td>
                  <td></td>
                  <td><input ref="hour6" className="form-control" id="HE6" type="number" placeholder="0" min="0" /></td>
                </tr>
                <tr>
                  <td>7</td>
                  <td></td>
                  <td><input ref="hour7" className="form-control" id="HE7" type="number" placeholder="0" min="0" /></td>
                </tr>
                <tr>
                  <td>8</td>
                  <td></td>
                  <td><input ref="hour8" className="form-control" id="HE8" type="number" placeholder="0" min="0" /></td>
                </tr>
                <tr>
                  <td>9</td>
                  <td></td>
                  <td><input ref="hour9" className="form-control" id="HE9" type="number" placeholder="0" min="0" /></td>
                </tr>
                <tr>
                  <td>10</td>
                  <td></td>
                  <td><input ref="hour10" className="form-control" id="HE10" type="number" placeholder="0" min="0" /></td>
                </tr>
                <tr>
                  <td>11</td>
                  <td></td>
                  <td><input ref="hour11" className="form-control" id="HE11" type="number" placeholder="0" min="0" /></td>
                </tr>
                <tr>
                  <td>12</td>
                  <td></td>
                  <td><input ref="hour12" className="form-control" id="HE12" type="number" placeholder="0" min="0" /></td>
                </tr>
                <tr>
                  <td>13</td>
                  <td></td>
                  <td><input ref="hour13" className="form-control" id="HE13" type="number" placeholder="0" min="0" /></td>
                </tr>
                <tr>
                  <td>14</td>
                  <td></td>
                  <td><input ref="hour14" className="form-control" id="HE14" type="number" placeholder="0" min="0" /></td>
                </tr>
                <tr>
                  <td>15</td>
                  <td></td>
                  <td><input ref="hour15" className="form-control" id="HE15" type="number" placeholder="0" min="0" /></td>
                </tr>
                <tr>
                  <td>16</td>
                  <td></td>
                  <td><input ref="hour16" className="form-control" id="HE16" type="number" placeholder="0" min="0" /></td>
                </tr>
                <tr>
                  <td>17</td>
                  <td></td>
                  <td><input ref="hour17" className="form-control" id="HE17" type="number" placeholder="0" min="0" /></td>
                </tr>
                <tr>
                  <td>18</td>
                  <td></td>
                  <td><input ref="hour18" className="form-control" id="HE18" type="number" placeholder="0" min="0" /></td>
                </tr>
                <tr>
                  <td>19</td>
                  <td></td>
                  <td><input ref="hour19" className="form-control" id="HE19" type="number" placeholder="0" min="0" /></td>
                </tr>
                <tr>
                  <td>20</td>
                  <td></td>
                  <td><input ref="hour20" className="form-control" id="HE20" type="number" placeholder="0" min="0" /></td>
                </tr>
                <tr>
                  <td>21</td>
                  <td></td>
                  <td><input ref="hour21" className="form-control" id="HE21" type="number" placeholder="0" min="0" /></td>
                </tr>
                <tr>
                  <td>22</td>
                  <td></td>
                  <td><input ref="hour22" className="form-control" id="HE22" type="number" placeholder="0" min="0" /></td>
                </tr>
                <tr>
                  <td>23</td>
                  <td></td>
                  <td><input ref="hour23" className="form-control" id="HE23" type="number" placeholder="0" min="0" /></td>
                </tr>
                <tr>
                  <td>24</td>
                  <td></td>
                  <td><input ref="hour24" className="form-control" id="HE24" type="number" placeholder="0" min="0" /></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <button className="btn btn-primary send" onClick={this.create.bind(this)}>Send</button>
          </div>
        </div>
      </div>
    );
  }
}

export default NewBuilding;
