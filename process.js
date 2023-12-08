// process.js
const memories = [];


module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const { date, memory } = req.body;

    if (!date || !memory) {
      return res.status(400).json({ error: 'Date and memory are required' });
    }

    // Store the memory in the array (in-memory storage, not persisted)
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
