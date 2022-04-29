const Intern = require('../lib/Intern.js');


test('creates an Intern object', () => {
    const intern = new Intern('melissa', 31, 'melissa.mor0811@gmail', 'Vandy');
    
    expect(intern.school) .toEqual(expect.any(String));
});


test('gets employee school', () => {
    const intern = new Intern('melissa', 31, 'melissa.mor0811@gmail', 'Vandy');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of employee', () => {
    const intern = new Intern('melissa', 31, 'melissa.mor0811@gmail.com', 'Vandy');

    expect(intern.getRole()).toEqual("Intern");
}); 