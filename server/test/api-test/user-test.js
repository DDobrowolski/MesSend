const expect  = require('chai').expect,
axios = require('axios');

describe('Getting user who does not exist.', () => {
    it('Returns status 200', (done)=>{
        axios.get('http://localhost:8080/users/abc').then(res=>{
            expect(res.status).to.equal(200);
            done();
        }).catch(err => console.error(err));
    })
    it('Gets error object.', (done)=>{
        axios.get('http://localhost:8080/users/abc').then(res=>{
            expect(res.data).to.have.property('message');
            done();
        }).catch(err => console.error(err));
    })
});

describe('Adding new user.', ()=>{
    it('Returns error message.', (done) => {
        axios.post('http://localhost:8080/users', {
            'test': 'test'
        }).then(res=>{
            expect(res.data).to.have.property('message');
            done();
        }).catch(err => console.error(err));
    })
})