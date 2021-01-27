// from data.js
const tableData = data;

// get tabele references

//var button = d3.select("#filter-btn");

const tbody = d3.select("tbody");

function buildData(data){
  // Clear out any existing data
  tbody.html("");

  // Loop through each object and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the tbody
      const row = tbody.append("tr");

      // Loop through each field in the dataRow and add each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
      }
    );
  });
}

function handleClick(){
  // Get the datetime value
  const date = d3.select("#datetime").property("value");
  let filteredData = tableData;

  // Check if a date was entered and filter the data using that date
  if (date) {
    // Apply the filter to the table data to only keep the rows where the datetime value matches the filtered value
    filteredData = filteredData.filter(row => row.datetime === date);
  }
  // Rebuild the table using the filtered data
  buildTable(filteredData);
}

// Attach an event to listen to the form button
d3.selectAll("#filter-btn").on("click",handleClick);

// Build a table when the page loads
buildTable(tableData);






