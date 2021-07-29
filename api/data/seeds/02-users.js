exports.seed = function (knex) {
    return knex('users').insert([
        {
            username: 'Johnny',
            password: 1234,
            role: 'instructor'
        },
        {
            username: 'Katie',
            password: 1234,
            role: 'client'
        }
    ])
}