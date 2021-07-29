exports.seed = function (knex) {
    return knex('classes').insert([
        {
            class_name: 'Yoga for Beginners',
            class_type: 'Yoga',
            start_time: '08:00:00',
            duration: 30,
            intensity_level: 'Beginner',
            class_location: 'somewhere around the corner',
            registered: 2,
            max_size: 10,
            user_id: 1
        },
        {
            class_name: 'Boxing for Beginners',
            class_type: 'Boxing',
            start_time: '10:00:00',
            duration: 30,
            intensity_level: 'Beginner',
            class_location: 'somewhere around the corner',
            registered: 3,
            max_size: 10,
            user_id: 1
        }
    ])
}