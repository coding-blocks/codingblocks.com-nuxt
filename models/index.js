import JsonApi from 'devour-client'
import config from '../config'
import Member from './member'
import Course from './course'
import Batch from './batch'
import Center from './center'
import CourseTopic from './course_topic'
import CourseReview from './course_review'
import CourseFeature from './course_feature'
import CourseFaq from './course_faq'

const jsonApi = new JsonApi({ apiUrl: config.apiEndPoint })

jsonApi.define('member', Member)
jsonApi.define('course', Course)
jsonApi.define('batch', Batch)
jsonApi.define('center', Center)
jsonApi.define('course_topic', CourseTopic)
jsonApi.define('course_review', CourseReview)
jsonApi.define('course_feature', CourseFeature)
jsonApi.define('course_faq', CourseFaq)

export default jsonApi
