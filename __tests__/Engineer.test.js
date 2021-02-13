const Engineer = require('../lib/Engineer')

test(`Creates an Engineer`, async ()=>{
    const engineer = new Engineer(`James`, 12, `James.Luu96@gmail.com`, `jamesluu96`)
    expect(engineer.name).toEqual(expect.any(String))
    expect(engineer.id).toEqual(expect.any(Number))
    expect(engineer.email).toEqual(expect.any(String))
    expect(engineer.github).toEqual(expect.any(String))
    expect(engineer.getName()).toEqual(expect.stringContaining(engineer.name))
    expect(engineer.getId()).toEqual(expect.stringContaining(engineer.id.toString()))
    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email))
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github))
    expect(engineer.getRole()).toEqual('Engineer')
})