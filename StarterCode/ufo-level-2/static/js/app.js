
// from data.js
var tableData = data;

// get table references

var tbody = d3.select("tbody");

function buildData(data){
  // Clear out any existing data
  tbody.html("");

  // Loop through each object and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the tbody
      var row = tbody.append("tr");

      // Loop through each field in the dataRow and add each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        var cell = row.append("td");
        cell.text(val);
      }
    );
  });
}

function updateFilter(){
  // Save the element, value and id of the filter that was changed
  var changedElement = 
  var elementValue = 
  var filterId = 

  // If a filter value was entered then add that filterID and value to the filter's list. Otherwise, clear that filter from the filter's object
  if 

  else

  filterTable();
}

function filterTable(){
  let filteredData = tableData;

  // Loop through all the filters and keep any data that matches the filter values 
  Object.entries(filters).forEach(([key,value]) => {
    filteredData = filteredData.filter(row => row[key] === value);
  });
  buildTable(tableData);
}


// Attach an event to listen to the form button
d3.selectAll(".filter").on("change",updateFilter);

// Build a table when the page loads
buildTable(tableData);


