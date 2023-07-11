const orderHistory = [
    {
        username: 'JS Masher',
        hasPrime: false,
        emailVerified: true,
        cardOnAccount: true
    },
    {
        item: 'JavaScript for impatient programmers',
        oneItemOrder: true,
        multiItemOrder: false,
        orderPlacedOn: 'August 4, 2020',
        orderDeliveredOn: 'August 8, 2020',
        price: 31.55,
        discountsApplied: false,
        numberOfPayments: 1,
        fullAmountPaid: true,
        partialAmountPaid: false,
        outstandingPayment: 0,
        orderNumber: 'ORDER # 114-3941689-8772232'
    },
    {
        item: 'The Timeless Way of Building',
        oneItemOrder: true,
        multiItemOrder: false,
        orderPlacedOn: 'July 19, 2020',
        orderDeliveredOn: 'July 20, 2020',
        price: 41.33,
        discountsApplied: false,
        numberOfPayments: 1,
        fullAmountPaid: true,
        partialAmountPaid: false,
        outstandingPayment: 0,
        orderNumber: 'ORDER # 113-9984268-1280257'
    },
    {
        item: 'Gamecube Controller Adapter',
        oneItemOrder: true,
        multiItemOrder: false,
        orderPlacedOn: 'July 4, 2020',
        orderDeliveredOn: 'July 7, 2020',
        price: 15.98,
        numberOfPayments: 1,
        fullAmountPaid: true,
        partialAmountPaid: false,
        outstandingPayment: 0,
        orderNumber: 'ORDER # 114-2875557-9059409'
    },
    {
        item: ['GameCube Controller', 'The Art of Sql'],
        oneItemOrder: false,
        multiItemOrder: true,
        orderPlacedOn: 'July 3, 2020',
        orderDeliveredOn: 'July 5, 2020',
        price: 94.95 + 33.99,
        discountsApplied: false,
        numberOfPayments: 1,
        fullAmountPaid: true,
        partialAmountPaid: false,
        outstandingPayment: 0,
        orderNumber: 'ORDER # 113-2883177-2648248'
    }
];

console.log('the value of orderHistory is: ', orderHistory);
