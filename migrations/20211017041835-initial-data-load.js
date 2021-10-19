'use strict'

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('states', [
      { name: 'Alabama' },
      { name: 'Alaska' },
      { name: 'Arizona' },
      { name: 'Arkansas' },
      { name: 'California' },
      { name: 'Colorado' },
      { name: 'Connecticut' },
      { name: 'Delaware' },
      { name: 'Florida' },
      { name: 'Georgia' },
      { name: 'Hawaii' },
      { name: 'Idaho' },
      { name: 'Massachusetts' },
      { name: 'Pennsylvania' },
    ])

    return queryInterface.bulkInsert('trails', [
      {
        name: 'Darby Creek Trail',
        town: 'Havertown',
        type: {
          line1: 'Mountain Bike',
          line2: 'Walking',
          line3: 'Road Bike',
        },
        difficulty: 'easy',
        length: '2.0 mi',
        estTime: '50m',
        stateId: 14,
      }, {
        name: 'Skyline Outer Reservoir Loop',
        town: 'Medford',
        type: {
          line1: 'Hiking',
          line2: 'Trail Running',
          line3: 'Wildlife',
        },
        difficulty: 'moderate',
        length: '8.1 mi',
        estTime: '3h 54m',
        stateId: 13,
      }
    ])
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('trails')

    await queryInterface.bulkDelete('states')
  }
}
