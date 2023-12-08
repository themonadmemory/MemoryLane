// process.js
const memories = [];

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const { date, memory } = req.body; // Assuming you're using JSON in the request body

    // Store the memory in the array (you might want to use a database in a real-world scenario)
    memories.push({ date, memory });

    // Send a response (adjust as needed)
    return res.status(200).json({ message: 'Memory shared successfully!' });
  }

  if (req.method === 'GET') {
    // Return the list of shared memories
    return res.status(200).json(memories);
  }

  // Handle other HTTP methods if necessary
  return res.status(400).json({ error: 'Bad request' });
};
