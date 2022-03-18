//import the data from data.js
const tableData = data;

//Reference the HTML table using D3
var tbody = d3.select("tbody");

//Simiple javascript function
//function printHello() {
    //console.log("Hello there!");
//}

//clear any existing data
function buildTable(data) {
    tbody.html("");
}

//for each object in data table
data.forEach((dataRow) => {
    //append rows to table body
    var row = tbody.append("tr");
    //loop through each field in the dataRow
    Object.values(dataRow).forEach((val) => {
        //add each value in a table cell
        let cell = row.append("td");
        cell.text(val);
    });
});

//create a function to filter the data
function handleClick() {
    //create a variable for the datetime
    var date = d3.select("#datetime").property("value");
    //allows filter to be reused
    var filteredData = tableData;
    //use an if statement to match rows where datetime value equals filter value
    if (date) {filteredData = filteredData.filter(row => row.datetime === date);
    };
    //rebuild the table using the filtered data
    //if no date was entered, the original table will be rebuild
    buildTable(filteredData);
}

//attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

//build the table when the page loads
buildTable(tableData);