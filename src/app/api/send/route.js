export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { name, email } = req.body;
  
      // Here you can handle the form data, such as saving it to a database
      // For now, we will just return a success message
  
      res.status(200).json({ message: `Form submitted successfully! Name: ${name}, Email: ${email}` });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }