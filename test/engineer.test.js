const Engineer = require('../lib/Engineer');


test('creates an Engineer object', () => {
    const engineer = new Engineer('melissa', 31, 'melissa.mor0811@gmail', 'melissa.mor0811');
    
    expect(engineer.github) .toEqual(expect.any(String));
});


test('gets engineer github value', () => {
    const engineer = new Engineer('melissa', 31, 'melissa.mor0811@gmail', 'melissa.mor0811');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});


test('gets role of employee', () => {
    const engineer = new Engineer('melissa', 31, 'melissa.mor0811@gmail', 'melissa.mor0811');

    expect(engineer.getRole()).toEqual("Engineer");
});