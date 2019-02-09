export default {
  id: '',
  name: '',
  bio: '',
  imageUrl: '',
  designation: '',
  role: '',
  featured: false,
  order: -1,
  center: {
    jsonApi: 'hasOne',
    type: 'center'
  },
  courses: {
    jsonApi: 'hasMany',
    type: 'course'
  }
}
