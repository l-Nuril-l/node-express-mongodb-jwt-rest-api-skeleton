import { faker } from '@faker-js/faker';
import { ObjectId } from 'mongodb';
import { HookahStatus } from '../../enums/hookahStatus.js';

export default [
    {
        status: HookahStatus.COURIER,
        hookahId: new ObjectId('5aa1c2c35ef7a4e97b5e99e2'),
        courierId: new ObjectId('5aa1c2c35ef7a4e97b5e995a'),
        userId: null,
        region: 'Germany',
        completedAt: faker.date.past(),
        returnedAt: faker.date.past(faker.date.past()),
        deliveredAt: faker.date.past(faker.date.past(faker.date.past())),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent()
    }, {
        status: HookahStatus.CLIENT,
        hookahId: new ObjectId('5aa1c2c35ef7a4e97b5e99e3'),
        courierId: new ObjectId('5aa1c2c35ef7a4e97b5e995a'),
        userId: null,
        region: 'Germany',
        completedAt: faker.date.past(),
        returnedAt: faker.date.past(faker.date.past()),
        deliveredAt: faker.date.past(faker.date.past(faker.date.past())),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent()
    }, {
        status: HookahStatus.CLEANING,
        hookahId: new ObjectId('5aa1c2c35ef7a4e97b5e99e4'),
        courierId: new ObjectId('5aa1c2c35ef7a4e97b5e995a'),
        userId: new ObjectId('5aa1c2c35ef7a4e97b5e995b'),
        region: 'Germany',
        completedAt: faker.date.past(),
        returnedAt: faker.date.past(faker.date.past()),
        deliveredAt: faker.date.past(faker.date.past(faker.date.past())),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent()
    }, {
        status: HookahStatus.COMPLETED,
        hookahId: new ObjectId('5aa1c2c35ef7a4e97b5e99e5'),
        courierId: new ObjectId('5aa1c2c35ef7a4e97b5e995a'),
        userId: new ObjectId('5aa1c2c35ef7a4e97b5e995b'),
        region: 'Germany',
        completedAt: faker.date.past(),
        returnedAt: faker.date.past(faker.date.past()),
        deliveredAt: faker.date.past(faker.date.past(faker.date.past())),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent()
    },
]

