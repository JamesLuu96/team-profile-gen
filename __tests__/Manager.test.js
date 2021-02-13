const Manager = require('../lib/Manager')

test(`Creates a Manager`, async ()=>{
    const manager = new Manager(`James`, 12, `James.Luu96@gmail.com`, 12)
    expect(manager.name).toEqual(expect.any(String))
    expect(manager.id).toEqual(expect.any(Number))
    expect(manager.email).toEqual(expect.any(String))
    expect(manager.officeNumber).toEqual(expect.any(Number))
    expect(manager.getName()).toEqual(expect.stringContaining(manager.name))
    expect(manager.getId()).toEqual(expect.stringContaining(manager.id.toString()))
    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email))
    expect(manager.getRole()).toEqual('Manager')
})