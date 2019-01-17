export default {
  name: '',
  id: '',
  contactNo: '',
  email: '',
  batches: {
    jsonApi: 'hasMany',
    type: 'batch'
  },
  googleMapLink: '',
  incharge: {
    jsonApi: 'hasOne',
    type: 'member'
  }
}
