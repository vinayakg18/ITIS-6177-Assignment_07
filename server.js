const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.get('/say', async (req, res) => {
  try {
    const keyword = req.query.keyword;
    // Correct API Gateway URL with /say path
    const response = await axios.get('https://y99ksugyd0.execute-api.us-east-1.amazonaws.com/Prod/say', {
      params: { keyword },  // Passing the keyword as a query parameter
    });

    res.send(response.data); // Send the response back to the client
  } catch (error) {
    console.log(error); // Log the error for debugging
    res.status(500).send('Error: Keyword not found'); // Handle the error response
  }
});

app.listen(PORT, () => {
  console.log(`Web service running on http://localhost:${PORT}`);
});
