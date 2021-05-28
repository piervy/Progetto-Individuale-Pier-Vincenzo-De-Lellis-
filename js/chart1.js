var margin = {top: 20, right: 160, bottom: 35, left: 30};
var count = 0;
var width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var svg = d3.select("body")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


/* Data in strings like it would be if imported from a csv */

var data = [
  {name: "Nike", tShirts: "2000", trousers: "800", shoes: "5000", hats: "500", accessories: "2200"},
  {name: "Adidas", tShirts: "2000", trousers: "700", shoes: "5000", hats: "500", accessories: "2000"},
  {name: "Lotto", tShirts: "2000", trousers: "600", shoes: "5000", hats: "500", accessories: "1600"},
  {name: "Puma", tShirts: "2000", trousers: "500", shoes: "5000", hats: "500", accessories: "1400"},
  {name: "Rebook", tShirts: "2000", trousers: "500", shoes: "5000", hats: "500", accessories: "1500"},
  {name: "Asics", tShirts: "2000", trousers: "600", shoes: "5000", hats: "500", accessories: "1300"},
  {name: "Umbro", tShirts: "2000", trousers: "400", shoes: "5000", hats: "500", accessories: "1100"},
  {name: "Diadora", tShirts: "2000", trousers: "500", shoes: "5000", hats: "500", accessories: "900"},
  {name: "Fila", tShirts: "2000", trousers: "700", shoes: "5000", hats: "500", accessories: "1100"},
  {name: "Champion", tShirts: "2000", trousers: "300", shoes: "5000", hats: "500", accessories: "1100"}

];


// Transpose the data into layers
var dataset = d3.layout.stack()(["tShirts", "trousers", "shoes", "hats","accessories"].map(function(values) {
  return data.map(function(d) {
    return {x: d.name, y: +d[values]};
  });
}));



// Set x, y and colors
var x = d3.scale.ordinal()
  .domain(dataset[0].map(function(d) { return d.x; }))
  .rangeRoundBands([10, width-10], 0.1);

var y = d3.scale.linear()
  .domain([0, d3.max(dataset, function(d) {  return d3.max(d, function(d) { return d.y0 + d.y; });  })])
  .range([height, 0]);

var colors = ["red", "black", "blue", "orange","green"];


function draAxes(){
var yAxis = d3.svg.axis()
  .scale(y)
  .orient("left")
  .ticks(5)
  .tickSize(-width, 0, 0)
  .tickFormat( function(d) { return d } );

var xAxis = d3.svg.axis()
  .scale(x)
  .orient("bottom")


svg.append("g")
  .attr("class", "y axis")
  .call(yAxis);

      // add a label along the y-axis
    //
svg.append("text")
       .attr("transform", "rotate(0)")
       .attr("y", -5)
       .attr("font-size","15px")
       .text("Reveneau (Milions)");

svg.append("g")
  .attr("class", "x axis")
  .attr("transform", "translate(0," + height + ")")
  .call(xAxis);

}

function drawing(dataset,colors){
// Create groups for each series, rects for each segment 

d3.select(groups).remove();
var groups = svg.selectAll("g.cost").data(dataset)
    groups.exit().remove();
    groups.enter().append("g")
          .attr("class", "cost")
          .style("fill", function(d, i) { return colors[i]; });
    groups.transition().duration(1000)
          .attr("class", "cost")
          .style("fill", function(d, i) { return colors[i]; });

d3.select(rect).remove();
var i=0
var rect = groups.selectAll("rect").data(function(d) { return d; })
   rect.exit().remove();
   rect.enter()
  .append("rect")
  .attr("index",function(d){return i;})
  .attr("x", function(d) { return x(d.x); })
  .attr("y", function(d) { return y(d.y0 + d.y); })
  .attr("height", function(d) { return y(d.y0) - y(d.y0 + d.y); })
  .attr("width", x.rangeBand())
  .on("mouseover", function() { tooltip.style("display", null); })
  .on("mouseout", function() { tooltip.style("display", "none"); })
  .on("mousemove", function(d) {
    var xPosition = d3.mouse(this)[0] - 15;
    var yPosition = d3.mouse(this)[1] - 25;
    tooltip.attr("transform", "translate(" + xPosition + "," + yPosition + ")");
    tooltip.select("text").text(d.y);
  })

  rect.transition().duration(1000)
      .attr("index",function(d){return i++;})
      .attr("x", function(d) { return x(d.x); })
      .attr("y", function(d) { return y(d.y0 + d.y); })
      .attr("height", function(d) { return y(d.y0) - y(d.y0 + d.y); })
      .attr("width", x.rangeBand())


}



function modifyDataY(selected){
 
  data=dataset;
  var temp=0;
  var temp=0;
  var count=1;
  if(count==0){
  temp=data[0][0]["y0"];
  temp1=data[1][0]["y0"];
  data[0][0]["y0"]=temp1
  data[1][0]["y0"]=temp
  count=1;
}else{
  temp=data[0][0]["y0"];
  temp1=data[1][0]["y0"];
  data[0][0]["y0"]=temp1
  data[1][0]["y0"]=temp
  count=0;
}
  console.log(count);
  console.log(data);
  drawing(data);

;
}

//First try to swap Section
/*
function modify(selected){
  data=dataset;
  colori=colors;
  var temp1;
  var temp2;
  var datatemp=data[0]
  var datatemp1=data[1]
  var colors1=colori[0]
  var colors2=colori[1]
  colori[0]=colors2
  colori[1]=colors1
  for (i = 0; i <= 9; i++) {
  temp1=data[0][i]["y0"]; //800
  temp2=data[1][i]["y"];  //800
  temp3=data[1][i]["y0"]; //0



 //nero
  data[0][i]["y0"]=temp1+temp2;
//rosso
  data[1][i]["y0"]=temp1;
}
 data[0]=datatemp1;
 data[1]=datatemp;
   console.log(data);
   drawing(data,colors);
}
*/



function modifyWithIndex(selected){
  data=dataset;
  colori=colors;
  var temp1;
  var temp2;
  var indice = d3.select(selected).attr("index");
  var i=0;
 console.log(indice);
if(0<=indice && indice <=9){
   i=0}
if(10<=indice && indice <=19){
   i=1}
if(20<=indice && indice <=29){
   i=2}
if(30<=indice && indice <=39){
   i=3}
if(40<=indice && indice <=49){
   i=4;
   return;}

  var datatemp=data[i]
  var datatemp1=data[i+1]
  var colors1=colori[i]
  var colors2=colori[i+1]
  colori[i]=colors2
  colori[i+1]=colors1
  

  var z=i+1;
  for (j = 0; j <= 9; j++) {
  
  temp1=data[i][j]["y0"]; //800
  temp2=data[i+1][j]["y"];  //800
  temp3=data[i+1][j]["y0"]; //0



 //nero
  data[i][j]["y0"]=temp1+temp2;
//rosso
  data[i+1][j]["y0"]=temp1;
}
 data[i]=datatemp1;
 data[i+1]=datatemp;
   console.log(data);
   drawing(data,colors);
}


draAxes();
if(count==0){
var colors = ["red", "black", "blue", "orange","green"];
drawing(dataset,colors);
count=1;
}


d3.selectAll("rect")
    .on("click", function(d){
    d3.select(this)
    var ind = d3.select(this).attr("index");
    console.log(this);
    console.log(count);
    console.log(ind);
    console.log(dataset);
    modifyWithIndex(this);
   });


// Draw legend
var legend = svg.selectAll(".legend")
  .data(colors)
  .enter().append("g")
  .attr("class", "legend")
  .attr("transform", function(d, i) { return "translate(30," + i * 19 + ")"; });
 
legend.append("rect")
  .attr("x", width - 18)
  .attr("width", 18)
  .attr("height", 18)
  .style("fill", function(d, i) {return colors.slice().reverse()[i];});
 
legend.append("text")
  .attr("x", width + 5)
  .attr("y", 9)
  .attr("dy", ".35em")
  .style("text-anchor", "start")
  .text(function(d, i) { 
    switch (i) {
      case 0: return "t-Shirts";
      case 1: return "trousers";
      case 2: return "shoes";
      case 3: return "hats";
      case 4: return "accessories"
    }
  });


// Prep the tooltip bits, initial display is hidden
var tooltip = svg.append("g")
  .attr("class", "tooltip")
  .style("display", "none");
    
tooltip.append("rect")
  .attr("width", 30)
  .attr("height", 20)
  .attr("fill", "white")
  .style("opacity", 0.5);

tooltip.append("text")
  .attr("x", 15)
  .attr("dy", "1.2em")
  .style("text-anchor", "middle")
  .attr("font-size", "12px")
  .attr("font-weight", "bold");