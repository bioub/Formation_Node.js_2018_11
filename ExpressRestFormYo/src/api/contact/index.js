import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'

const router = new Router()
const { name, email, phone } = schema.tree

/**
 * @api {post} /contacts Create contact
 * @apiName CreateContact
 * @apiGroup Contact
 * @apiParam name Contact's name.
 * @apiParam email Contact's email.
 * @apiParam phone Contact's phone.
 * @apiSuccess {Object} contact Contact's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Contact not found.
 */
router.post('/',
  body({ name, email, phone }),
  create)

/**
 * @api {get} /contacts Retrieve contacts
 * @apiName RetrieveContacts
 * @apiGroup Contact
 * @apiUse listParams
 * @apiSuccess {Object[]} contacts List of contacts.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /contacts/:id Retrieve contact
 * @apiName RetrieveContact
 * @apiGroup Contact
 * @apiSuccess {Object} contact Contact's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Contact not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /contacts/:id Update contact
 * @apiName UpdateContact
 * @apiGroup Contact
 * @apiParam name Contact's name.
 * @apiParam email Contact's email.
 * @apiParam phone Contact's phone.
 * @apiSuccess {Object} contact Contact's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Contact not found.
 */
router.put('/:id',
  body({ name, email, phone }),
  update)

/**
 * @api {delete} /contacts/:id Delete contact
 * @apiName DeleteContact
 * @apiGroup Contact
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Contact not found.
 */
router.delete('/:id',
  destroy)

export default router
