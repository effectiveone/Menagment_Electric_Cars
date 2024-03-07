const { MongoClient } = require('mongodb');
const bcrypt = require('bcryptjs');

async function initScript() {
  let client;

  try {
    client = new MongoClient(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await client.connect();

    const db = client.db('electriccar');

    const sanitizedPassword = 'admin12';
    const encryptedPassword = await bcrypt.hash(sanitizedPassword, 10);

    // Dodaj użytkownika admina
    await db.collection('users').insertOne({
      mail: 'admin@example.com',
      username: 'admin',
      password: encryptedPassword,
      isAdmin: true,
    });

    await db.collection('announcements').insertMany([
      {
        title: 'Porsche Taycan Availability Update',
        description:
          'Starting from April, the Porsche Taycan will no longer be available. We apologize for any inconvenience this may cause.',
      },
      {
        title: 'Exciting News: New Porsche Taycan Release',
        description:
          'We are thrilled to announce that the Porsche Taycan will be back in our fleet from October. Get ready for an exhilarating driving experience!',
      },
      {
        title: 'Important Notice: Scheduled Fleet Deliveries',
        description:
          'All fleet vehicles scheduled for delivery on specific dates in October. Please ensure all necessary preparations are in place.',
      },
      {
        title: 'Maintenance Alert: Porsche Taycan Servicing',
        description:
          'Scheduled maintenance for all Porsche Taycan vehicles on October 15th. Please plan accordingly.',
      },
    ]);

    await db.collection('tasks').insertMany([
      {
        title: 'Charging Station Maintenance',
        description:
          'Perform regular maintenance on electric vehicle charging stations.',
        time: '3 hours',
        coinsToEarn: 8,
        status: 'Requested',
        responsivePerson: 'admins@example.com',
      },
      {
        title: 'Software Update for Fleet Vehicles',
        description:
          'Update the software for the electric fleet vehicles to the latest version.',
        time: '5 hours',
        coinsToEarn: 12,
        status: 'Requested',
        responsivePerson: 'admins@example.com',
      },
      {
        title: 'Electric Car Inspection',
        description:
          'Conduct inspections on electric cars to ensure they meet safety standards.',
        time: '4 hours',
        coinsToEarn: 9,
        status: 'backlog',
        responsivePerson: null,
      },
      {
        title: 'Implement New Charging Strategies',
        description:
          'Research and implement innovative charging strategies for electric vehicles.',
        time: '6 hours',
        coinsToEarn: 15,
        status: 'backlog',
        responsivePerson: null,
      },
      {
        title: 'Organize Electric Car Showcase Event',
        description:
          'Plan and organize an event to showcase the latest electric car models.',
        time: '8 hours',
        coinsToEarn: 20,
        status: 'backlog',
        responsivePerson: null,
      },
      {
        title: 'Organize Electric Car Showcase Event',
        description:
          'Plan and organize an event to showcase the latest electric car models.',
        time: '8 hours',
        coinsToEarn: 20,
        status: 'backlog',
        responsivePerson: null,
      },
    ]);
    // Dodaj przykładowe dane o samochodach
    await db.collection('electriccars').insertMany([
      {
        make: 'Tesla',
        model: 'Model S',
        range: '370 miles',
        price: 20,
        reservations: [],
      },
      {
        make: 'Nissan',
        model: 'Leaf',
        range: '150 miles',
        price: 10,
        reservations: [],
      },
      {
        make: 'Chevrolet',
        model: 'Bolt EV',
        range: '259 miles',
        price: 10,
        reservations: [],
      },
      {
        make: 'BMW',
        model: 'i3',
        range: '153 miles',
        price: 20,
        reservations: [],
      },
      {
        make: 'Audi',
        model: 'e-tron',
        range: '204 miles',
        price: 20,
        reservations: [],
      },
      {
        make: 'Hyundai',
        model: 'Kona Electric',
        range: '258 miles',
        price: 20,
        reservations: [],
      },
      {
        make: 'Jaguar',
        model: 'I-PACE',
        range: '234 miles',
        price: 20,
        reservations: [],
      },
    ]);
  } catch (error) {
    console.error('Initialization script failed:', error);
  } finally {
    if (client) {
      await client.close();
    }
  }
}

module.exports = initScript;
