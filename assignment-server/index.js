const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// Sample data to send as response
const data = {
  statistics: {
    totalSaleAmount: 5000,
    totalSoldItems: 20,
    totalNotSoldItems: 5,
  },
  barChart: [/* Data for bar chart */],
  pieChart: [/* Data for pie chart */],
};

// Define the endpoint to handle the client's request
app.get('/api/combined-data', (req, res) => {
  // Assuming you want to return the same sample data for any selectedMonth
  res.json(data);
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
