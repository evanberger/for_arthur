import React from "react";

const HoursMenu = () => {
  return (
  <div>
    <p className="header">Design Day Load Info</p>
    <table>
        <tr>
          <td>Choose Peak Load</td>
          <td className="work-in-progress">Input peak load here...</td>
        </tr>
        <tr>
          <td><strong>Choose load profile</strong></td>
          <td>
             <div class="dropdown">
              <select name="loadprofile" id="loaddropdown">
                  <option value="manual" selected>Manual</option>
                  <option value="office">Office Building</option>
                  <option value="middleschool">Middle School</option>
                  <option value="highschool">High School</option>
                  <option value="college">College</option>
              </select>
              <button>View</button>
              </div>
            </td>
          </tr>
    </table>
    <table>
    <tr className="header">
      <td>HE</td>
      <td>Hour Type</td>
      <td>Building Load (in tons)</td>
    </tr>
    <tr>
      <td>1</td>
      <td className="work-in-progress">
        <select>
          <option>Icemaking</option>
          <option>Partial Storage</option>
          <option>Full Storage</option>
          <option>No action</option>
        </select>
      </td>
      <td className="work-in-progress"><span className="hourlyLoad" id="HE1" name="1">0 (input...)</span></td>
    </tr>
    <tr>
      <td>2</td>
      <td className="work-in-progress">Dropdown...</td>
      <td className="work-in-progress"><span className="hourlyLoad" id="HE1" name="1">0 (input...)</span></td>
    </tr>
    <tr>
      <td>3</td>
      <td className="work-in-progress">Dropdown...</td>
      <td className="work-in-progress"><span className="hourlyLoad" id="HE1" name="1">0 (input...)</span></td>
    </tr>
    <tr>
      <td>4</td>
      <td className="work-in-progress">Dropdown...</td>
      <td className="work-in-progress"><span className="hourlyLoad" id="HE1" name="1">0 (input...)</span></td>
    </tr>
    <tr>
      <td>5</td>
      <td className="work-in-progress">Dropdown...</td>
      <td className="work-in-progress"><span className="hourlyLoad" id="HE1" name="1">0 (input...)</span></td>
    </tr>
    <tr>
      <td>6</td>
      <td className="work-in-progress">Dropdown...</td>
      <td className="work-in-progress"><span className="hourlyLoad" id="HE1" name="1">0 (input...)</span></td>
    </tr>
    <tr>
      <td>7</td>
      <td className="work-in-progress">Dropdown...</td>
      <td className="work-in-progress"><span className="hourlyLoad" id="HE1" name="1">0 (input...)</span></td>
    </tr>
    <tr>
      <td>8</td>
      <td className="work-in-progress">Dropdown...</td>
      <td className="work-in-progress"><span className="hourlyLoad" id="HE1" name="1">0 (input...)</span></td>
    </tr>
    <tr>
      <td>9</td>
      <td className="work-in-progress">Dropdown...</td>
      <td className="work-in-progress"><span className="hourlyLoad" id="HE1" name="1">0 (input...)</span></td>
    </tr>
    <tr>
      <td>10</td>
      <td className="work-in-progress">Dropdown...</td>
      <td className="work-in-progress"><span className="hourlyLoad" id="HE1" name="1">0 (input...)</span></td>
    </tr>
    <tr>
      <td>11</td>
      <td className="work-in-progress">Dropdown...</td>
      <td className="work-in-progress"><span className="hourlyLoad" id="HE1" name="1">0 (input...)</span></td>
    </tr>
    <tr>
      <td>12</td>
      <td className="work-in-progress">Dropdown...</td>
      <td className="work-in-progress"><span className="hourlyLoad" id="HE1" name="1">0 (input...)</span></td>
    </tr>
    <tr>
      <td>13</td>
      <td className="work-in-progress">Dropdown...</td>
      <td className="work-in-progress"><span className="hourlyLoad" id="HE1" name="1">0 (input...)</span></td>
    </tr>
    <tr>
      <td>14</td>
      <td className="work-in-progress">Dropdown...</td>
      <td className="work-in-progress"><span className="hourlyLoad" id="HE1" name="1">0 (input...)</span></td>
    </tr>
    <tr>
      <td>15</td>
      <td className="work-in-progress">Dropdown...</td>
      <td className="work-in-progress"><span className="hourlyLoad" id="HE1" name="1">0 (input...)</span></td>
    </tr>
    <tr>
      <td>16</td>
      <td className="work-in-progress">Dropdown...</td>
      <td className="work-in-progress"><span className="hourlyLoad" id="HE1" name="1">0 (input...)</span></td>
    </tr>
    <tr>
      <td>17</td>
      <td className="work-in-progress">Dropdown...</td>
      <td className="work-in-progress"><span className="hourlyLoad" id="HE1" name="1">0 (input...)</span></td>
    </tr>
    <tr>
      <td>18</td>
      <td className="work-in-progress">Dropdown...</td>
      <td className="work-in-progress"><span className="hourlyLoad" id="HE1" name="1">0 (input...)</span></td>
    </tr>
    <tr>
      <td>19</td>
      <td className="work-in-progress">Dropdown...</td>
      <td className="work-in-progress"><span className="hourlyLoad" id="HE1" name="1">0 (input...)</span></td>
    </tr>
    <tr>
      <td>20</td>
      <td className="work-in-progress">Dropdown...</td>
      <td className="work-in-progress"><span className="hourlyLoad" id="HE1" name="1">0 (input...)</span></td>
    </tr>
    <tr>
      <td>21</td>
      <td className="work-in-progress">Dropdown...</td>
      <td className="work-in-progress"><span className="hourlyLoad" id="HE1" name="1">0 (input...)</span></td>
    </tr>
    <tr>
      <td>22</td>
      <td className="work-in-progress">Dropdown...</td>
      <td className="work-in-progress"><span className="hourlyLoad" id="HE1" name="1">0 (input...)</span></td>
    </tr>
    <tr>
      <td>23</td>
      <td className="work-in-progress">Dropdown...</td>
      <td className="work-in-progress"><span className="hourlyLoad" id="HE1" name="1">0 (input...)</span></td>
    </tr>
    <tr>
      <td>24</td>
      <td className="work-in-progress">Dropdown...</td>
      <td className="work-in-progress"><span className="hourlyLoad" id="HE1" name="1">0 (input...)</span></td>
    </tr>
    </table>
    </div>
  );
};

export default HoursMenu;
