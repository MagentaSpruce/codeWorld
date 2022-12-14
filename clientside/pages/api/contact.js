import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    //email, name, message from contact-form body in fetch
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }

    //store valid data in db
    const newMessage = {
      email,
      name,
      message,
    };
    // console.log(newMessage);
    let client;
    try {
      client = await MongoClient.connect(
        'mongodb+srv://helmsman:changeme@cluster0.z4aibtv.mongodb.net/courses?retryWrites=true&w=majority'
      );
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to database.' });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: 'Storing message failed!' });
      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: 'Successfully stored message!', message: newMessage });
  }
}

export default handler;
