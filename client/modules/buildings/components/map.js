import React from 'react';
import ReactDOM from 'react-dom';
import * as d3 from "d3";
import * as topojson from "topojson";

// // Append Div for tooltip to SVG
// var div = d3.select("body")
// 		    .append("div")
//     		.attr("class", "tooltip")
//     		.style("opacity", 0);

// Load in my states data!
// // d3.csv("stateslived.csv", function(data) {
// // color.domain([0,1,2,3]); // setting the range of the input data
// //
// // // Load GeoJSON data and merge with states data
// // d3.json("us-states.json", function(json) {
//
// // Loop through each state data value in the .csv file
// for (var i = 0; i < data.length; i++) {
//
// 	// Grab State Name
// 	var dataState = data[i].state;
//
// 	// Grab data value
// 	var dataValue = data[i].visited;
//
// 	// Find the corresponding state inside the GeoJSON
// 	for (var j = 0; j < json.features.length; j++)  {
// 		var jsonState = json.features[j].properties.name;
//
// 		if (dataState == jsonState) {
//
// 		// Copy the data value into the JSON
// 		json.features[j].properties.visited = dataValue;
//
// 		// Stop looking through the JSON
// 		break;
// 		}
// 	}
// }
//
// // Bind the data to the SVG and create one path per GeoJSON feature
// svg.selectAll("path")
// 	.data(json.features)
// 	.enter()
// 	.append("path")
// 	.attr("d", path)
// 	.style("stroke", "#fff")
// 	.style("stroke-width", "1")
// 	.style("fill", function(d) {
//
// 	// Get data value
// 	var value = d.properties.visited;
//
// 	if (value) {
// 	//If value exists…
// 	return color(value);
// 	} else {
// 	//If value is undefined…
// 	return "rgb(213,222,217)";
// 	}
// });
//
//
// // Map the cities I have lived in!
// d3.csv("cities-lived.csv", function(data) {
//
// svg.selectAll("circle")
// 	.data(data)
// 	.enter()
// 	.append("circle")
// 	.attr("cx", function(d) {
// 		return projection([d.lon, d.lat])[0];
// 	})
// 	.attr("cy", function(d) {
// 		return projection([d.lon, d.lat])[1];
// 	})
// 	.attr("r", function(d) {
// 		return Math.sqrt(d.years) * 4;
// 	})
// 		.style("fill", "rgb(217,91,67)")
// 		.style("opacity", 0.85)
//
// 	// Modification of custom tooltip code provided by Malcolm Maclean, "D3 Tips and Tricks"
// 	// http://www.d3noob.org/2013/01/adding-tooltips-to-d3js-graph.html
// 	.on("mouseover", function(d) {
//     	div.transition()
//       	   .duration(200)
//            .style("opacity", .9);
//            div.text(d.place)
//            .style("left", (d3.event.pageX) + "px")
//            .style("top", (d3.event.pageY - 28) + "px");
// 	})
//
//     // fade out tooltip on mouse out
//     .on("mouseout", function(d) {
//         div.transition()
//            .duration(500)
//            .style("opacity", 0);
//     });
// });
//
// // Modified Legend Code from Mike Bostock: http://bl.ocks.org/mbostock/3888852
// var legend = d3.select("body").append("svg")
//       			.attr("class", "legend")
//      			.attr("width", 140)
//     			.attr("height", 200)
//    				.selectAll("g")
//    				.data(color.domain().slice().reverse())
//    				.enter()
//    				.append("g")
//      			.attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });
//
//   	legend.append("rect")
//    		  .attr("width", 18)
//    		  .attr("height", 18)
//    		  .style("fill", color);
//
//   	legend.append("text")
//   		  .data(legendText)
//       	  .attr("x", 24)
//       	  .attr("y", 9)
//       	  .attr("dy", ".35em")
//       	  .text(function(d) { return d; });
// 	});
//
// });

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.el = null;
    this.width = 960;
    this.height = 500;
    this.loadStates = this.loadStates.bind(this);
    this.projection = d3.geoAlbersUsa()
      .translate([this.width / 2, this.height / 2])
      .scale([1000]);
    this.path = d3.geoPath()
      .projection(this.projection);
  }

  loadStates(error, us) {
    if (error) throw error;

    this.svg.insert("path", ".buildings")
        .datum(topojson.feature(us, us.objects.land))
        .attr("class", "land")
        .attr("d", this.path);

    this.svg.insert("path", ".buildings")
        .datum(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; }))
        .attr("class", "state-boundary")
        .attr("d", this.path);
  }

  loadBuildings(error, us) {
    
  }

  initMap() {
    const {width, height, projection, path} = this;
    this.el = ReactDOM.findDOMNode(this);

    //Create SVG element and append map to the SVG
    this.svg = d3.select(this.el)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    d3.json("/us.json", this.loadStates);
  }

  componentDidMount() {
    this.initMap()
  }

  render() {
    return (
      <div className="buildings"></div>
    )
  }
};

export default Map;