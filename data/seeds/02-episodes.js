
exports.seed = function(knex) {

  return knex('episodes').insert([
    {
      name: 'test 1',
      seasons: 1
    },
    {
      name: 'test 2',
      seasons: 2
    },
    {
      name: 'test 3',
      seasons: 3
    },

  ]);
};
