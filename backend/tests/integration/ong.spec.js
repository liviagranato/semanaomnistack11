const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback(); //zerar banco de dados para o próximo teste
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    })

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
        .post('/ongs')
        //.set('Authorization', 'id ong')
        .send({
            name: "ashsad",
            email: "asuhdsua@haushds.com.br",
            whatsapp: "11123412347",
            city: "itajubá",
            uf: "sp"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    })
})