import express from 'express'
const router =express.Router()
import contactControllers from '../controllers/contact.controller.js'

router.route('/search').get(contactControllers.getContactByEmailOrByPhone);
// router.route('/search').get(contactControllers.getContactByPhone)
router.route('/createContact').post(contactControllers.createContact)
router.route('/getAll').get(contactControllers.getAllContact)
router.route('/:id').get(contactControllers.getContact).put(contactControllers.updateContact).delete(contactControllers.deleteContact)




export default router

