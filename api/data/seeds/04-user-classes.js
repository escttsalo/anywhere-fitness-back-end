exports.seed = function (knex) {
    return knex('user_classes').insert([
        {
            class_id: 1,
            user_id: 2
        },
        {
            class_id: 2,
            user_id: 2
        },
        {
            class_id: 1,
            user_id: 1
        }
    ])
}