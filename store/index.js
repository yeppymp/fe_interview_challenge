export const state = () => ({
    is_dark_mode: false,
    invoices: [
        {
            transaction_id: "RT3080",
            transaction_date: "19 Aug 2021",
            name: "John Doe",
            total_payment: "3500000",
            status: "draft",
            title: 'Grapic Design',
            address: '19 Union Terrance London 35444 United Kingdom',
            payment_due: '20 Sep 2021',
            bill_to: 'Alex Grim',
            bill_address: '84 Chech Whzy BroadRoad 78978 United Kingdom',
            bill_email: 'alexgrim@mailinator.com',
            items: [
                {
                    name: 'Brosur Design',
                    qty: 1,
                    price: 150000,
                    total: 150000
                },
                {
                    name: 'Email Design',
                    qty: 1,
                    price: 200000,
                    total: 200000
                },
            ]
        },
        {
            transaction_id: "RT6780",
            transaction_date: "10 Aug 2021",
            name: "John Snow",
            total_payment: "3500000",
            status: "paid",
            title: 'Website Design',
            address: '15 Red Keep London 35444 United Kingdom',
            payment_due: '20 Sep 2021',
            bill_to: 'Daenerys Targaryen',
            bill_address: '84 Meereen 78978 Meereen Kingdom',
            bill_email: 'daenerys@mailinator.com',
            items: [
                {
                    name: 'Landing Page',
                    qty: 1,
                    price: 1500000,
                    total: 1500000
                },
                {
                    name: 'User Page',
                    qty: 1,
                    price: 2000000,
                    total: 2000000
                },
            ]
        },
        {
            transaction_id: "RT3440",
            transaction_date: "19 Aug 2021",
            name: "Tyrion Lannister",
            total_payment: "2500000",
            status: "pending",
            title: 'Grapic Design',
            address: '19 Unshullied London 35444 United Queendom',
            payment_due: '20 Sep 2021',
            bill_to: 'Sansa Stark',
            bill_address: '84 Winterfell 78978 North United Kingdom',
            bill_email: 'tyrion@mailinator.com',
            items: [
                {
                    name: 'Brosur Design',
                    qty: 1,
                    price: 150000,
                    total: 150000
                },
                {
                    name: 'Poster Design',
                    qty: 1,
                    price: 100000,
                    total: 100000
                },
            ]
        },
    ],
});

export const mutations = {
    change_mode(state) {
        state.is_dark_mode = !state.is_dark_mode;
    },
    delete_invoice(state, { invoice }) {
        state.invoices.splice(state.invoices.indexOf(invoice), 1)
    },
    add_invoice(state, invoice) {
        console.log(invoice);
        state.invoices.push(invoice);
    },
}