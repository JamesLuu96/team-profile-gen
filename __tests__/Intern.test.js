const Intern = require('../lib/Intern')

test(`Creates an Intern`, async ()=>{
    const intern = new Intern(`James`, 12, `James.Luu96@gmail.com`, `UTA`)
    expect(intern.name).toEqual(expect.any(String))
    expect(intern.id).toEqual(expect.any(Number))
    expect(intern.email).toEqual(expect.any(String))
    expect(intern.school).toEqual(expect.any(String))
    expect(intern.getName()).toEqual(expect.stringContaining(intern.name))
    expect(intern.getId()).toEqual(expect.stringContaining(intern.id.toString()))
    expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email))
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school))
    expect(intern.getRole()).toEqual('Intern')
})