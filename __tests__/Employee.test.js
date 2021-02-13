const { TestScheduler } = require('jest')
const Employee = require('../lib/Employee')

test(`Creates an Employee`, async ()=>{
    const employee = new Employee(`James`, 12, `James.Luu96@gmail.com`)
    expect(employee.name).toEqual(expect.any(String))
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.email).toEqual(expect.any(String))
    expect(employee.getName()).toEqual(expect.stringContaining(employee.name))
    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()))
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email))
    expect(employee.getRole()).toEqual('Employee')
})