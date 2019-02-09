import { Batch } from './batch'
import { Member } from './member'
import DevourRelation from './devour-relation'

export interface Center {
  name: string
  id: string
  contactNo: string // validate via google-libphonenumber
  email: string // Joi email
  batches?: Array<Batch | DevourRelation>
  googleMapLink: string // url
  incharge?: Member | DevourRelation
}

const center: Center = {
  name: '',
  id: '',
  contactNo: '',
  email: '',
  batches: [
    {
      jsonApi: 'hasMany',
      type: 'batch',
    },
  ],
  googleMapLink: '',
  incharge: {
    jsonApi: 'hasOne',
    type: 'member',
  },
}

export default center
