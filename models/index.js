import JsonApi from 'devour-client'
import config from '../config'
import Member from './member'
import Course from './course'

const jsonApi = new JsonApi({ apiUrl: config.apiEndPoint })

jsonApi.define('members', Member)
jsonApi.define('courses', Course)

export default jsonApi
