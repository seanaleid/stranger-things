
exports.seed = function(knex) {

  return knex('character_episodes').insert([
    {
      character_id: 1,
      episode_id: 1
    },
    {
      character_id: 2,
      episode_id: 1
    },
    {
      character_id: 3,
      episode_id: 1
    },
    {
      character_id: 1,
      episode_id: 2
    },
    {
      character_id: 2,
      episode_id: 2
    },
    {
      character_id: 3,
      episode_id: 2
    },
    {
      character_id: 1,
      episode_id: 3
    },
    {
      character_id: 2,
      episode_id: 3
    },
    {
      character_id: 3,
      episode_id: 3
    }
  ]);
};