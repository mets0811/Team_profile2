const Manager = require('../lib/Manager.js');


test('creates an Manager object', () => {
    const manager = new Manager('Melissa', 60, 'melissa.mor0811@gmail', 44);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});


test('gets role of employee', () => {
    const manager = new Manager('Melissa', 60, 'melissa.mor0811@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 