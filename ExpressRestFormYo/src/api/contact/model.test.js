import { Contact } from '.'

let contact

beforeEach(async () => {
  contact = await Contact.create({ name: 'test', email: 'test', phone: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = contact.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(contact.id)
    expect(view.name).toBe(contact.name)
    expect(view.email).toBe(contact.email)
    expect(view.phone).toBe(contact.phone)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = contact.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(contact.id)
    expect(view.name).toBe(contact.name)
    expect(view.email).toBe(contact.email)
    expect(view.phone).toBe(contact.phone)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
