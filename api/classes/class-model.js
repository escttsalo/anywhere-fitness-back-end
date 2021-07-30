const db = require('../data/db-config')

const getAll = () => {
    return db('classes')
}

const getBy = filter => {
    return db('classes')
    .where(filter)
    .first()
}

const addClass = async postClass => {
    const [newClass] = await db('classes').insert(postClass, ['class_name', 'class_type', 'start_time', 'duration', 'intensity_level', 'class_location', 'registered', 'max_size', 'instructor_id'])
    return newClass
}

module.exports = {
    getAll,
    getBy,
    addClass
}