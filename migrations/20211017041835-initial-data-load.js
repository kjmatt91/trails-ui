'use strict'

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('trails', [
      {
        name: 'Darby Creek Trail',
        state: 'PA',
        town: 'Havertown',
        type: {
          line1: 'Mountain Bike',
          line2: 'Walking',
          line3: 'Road Bike',
        },
        difficulty: 'easy',
        length: '2.0 mi',
        estTime: '50m',
      }, {
        name: 'Skyline Outer Reservoir Loop',
        state: 'MA',
        town: 'Medford',
        type: {
          line1: 'Hiking',
          line2: 'Trail Running',
          line3: 'Wildlife',
        },
        difficulty: 'moderate',
        length: '8.1 mi',
        estTime: '3h 54m',
      }
    ])
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('trails')
  }
}
