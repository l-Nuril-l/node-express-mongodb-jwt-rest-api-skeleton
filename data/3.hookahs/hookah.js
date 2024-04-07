import { faker } from '@faker-js/faker';
import { ObjectId } from 'mongodb';

export default [
    {
        _id: new ObjectId('5aa1c2c35ef7a4e97b5e99e1'),
        region: 'Frankfurt am Main',
        inStock: true,
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent()
    },
    {
        _id: new ObjectId('5aa1c2c35ef7a4e97b5e99e2'),
        region: 'Frankfurt am Main',
        inStock: false,
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent()
    },
    {
        _id: new ObjectId('5aa1c2c35ef7a4e97b5e99e3'),
        region: 'Frankfurt am Main',
        inStock: false,
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent()
    },
    {
        _id: new ObjectId('5aa1c2c35ef7a4e97b5e99e4'),
        region: 'Frankfurt am Main',
        inStock: false,
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent()
    },
    {
        _id: new ObjectId('5aa1c2c35ef7a4e97b5e99e5'),
        region: 'Frankfurt am Main',
        inStock: true,
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent()
    },
    {
        _id: new ObjectId('5aa1c2c35ef7a4e97b5e99e6'),
        region: 'Frankfurt am Main',
        inStock: true,
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent()
    },
    {
        _id: new ObjectId('5aa1c2c35ef7a4e97b5e99e7'),
        region: 'Frankfurt am Main',
        inStock: true,
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent()
    },
    {
        _id: new ObjectId('5aa1c2c35ef7a4e97b5e99e8'),
        region: 'Frankfurt am Main',
        inStock: true,
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent()
    },
    {
        _id: new ObjectId('5aa1c2c35ef7a4e97b5e99e9'),
        region: 'Frankfurt am Main',
        inStock: true,
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent()
    }
]
