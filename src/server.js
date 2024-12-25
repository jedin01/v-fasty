import fastifyCors from '@fastify/cors';
import fastify from 'fastify';

const server = fastify();

const port = process.env.PORT || 3000;

server.register(fastifyCors, {
    origin: '*', // Permitir requisições de qualquer origem
});

server.get('/', async () => {
    return "animal se comunicando...";
});

server.listen({ port: 3000 }, () => { console.log('Server is running on port 3000') });
