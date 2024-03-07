// init.js

// Dodaj użytkownika admina
db.users.insertOne({
  mail: 'admin@example.com',
  username: 'admin',
  password: 'admin12',
  isAdmin: true,
});

// Dodaj zgłoszenia
// Dodaj dodatkowe zadania
db.task.insertMany([
  {
    title: 'Charging Station Maintenance',
    description:
      'Perform regular maintenance on electric vehicle charging stations.',
    time: '3 hours',
    coinsToEarn: 8,
    status: 'pending',
    responsivePerson: 'admin@example.com',
  },
  {
    title: 'Software Update for Fleet Vehicles',
    description:
      'Update the software for the electric fleet vehicles to the latest version.',
    time: '5 hours',
    coinsToEarn: 12,
    status: 'pending',
    responsivePerson: 'admin@example.com',
  },
  {
    title: 'Electric Car Inspection',
    description:
      'Conduct inspections on electric cars to ensure they meet safety standards.',
    time: '4 hours',
    coinsToEarn: 9,
    status: 'pending',
    responsivePerson: 'admin@example.com',
  },
  {
    title: 'Implement New Charging Strategies',
    description:
      'Research and implement innovative charging strategies for electric vehicles.',
    time: '6 hours',
    coinsToEarn: 15,
    status: 'pending',
    responsivePerson: 'admin@example.com',
  },
  {
    title: 'Organize Electric Car Showcase Event',
    description:
      'Plan and organize an event to showcase the latest electric car models.',
    time: '8 hours',
    coinsToEarn: 20,
    status: 'pending',
    responsivePerson: 'admin@example.com',
  },
  {
    title: 'Organize Electric Car Showcase Event',
    description:
      'Plan and organize an event to showcase the latest electric car models.',
    time: '8 hours',
    coinsToEarn: 20,
    status: 'pending',
    responsivePerson: 'admin@example.com',
  },
]);

db.ElectricCars.insertMany([
  {
    make: 'Tesla',
    model: 'Model S',
    range: '370 miles',
    price: '$79,990',
    reservations: [],
  },
  {
    make: 'Nissan',
    model: 'Leaf',
    range: '150 miles',
    price: '$31,600',
    reservations: [],
  },
  {
    make: 'Chevrolet',
    model: 'Bolt EV',
    range: '259 miles',
    price: '$31,995',
    reservations: [],
  },
  {
    make: 'BMW',
    model: 'i3',
    range: '153 miles',
    price: '$44,450',
    reservations: [],
  },
  {
    make: 'Audi',
    model: 'e-tron',
    range: '204 miles',
    price: '$65,900',
    reservations: [],
  },
  {
    make: 'Hyundai',
    model: 'Kona Electric',
    range: '258 miles',
    price: '$36,990',
    reservations: [],
  },
  {
    make: 'Jaguar',
    model: 'I-PACE',
    range: '234 miles',
    price: '$69,900',
    reservations: [],
  },
]);
