const faker = require('faker');
const { getPostalAddress } = require('./PostalAddress');
const { getPerson } = require('./Person');
//Include test data for ecom products.
const prods = require('../../data/generated/EcomProducts.json');
//Include payment methods
const payments = require('../../data/generated/payment-types.json');
//Include Payment Status
const paymentstatus = require('../../data/generated/payment-status.json');
//Include currencies 
const currencies = require('../../data/generated/currency-format.json');

const getEcommerceInvoiceRegistrationEvidenceDocument = () => {

    //get a payment method
    const randomPayment =
        faker.random.number({ min: 1, max: payments.payment.length });
    const paymentMethod = payments.payment[randomPayment - 1];
    //get a payment status
    const randomPaymentStatus =
        faker.random.number({ min: 1, max: paymentstatus.status.length });
    const paymentStatus = payments.payment[randomPaymentStatus - 1];
    //get a currency
    const randomCurrency = Object.keys(currencies)[
        faker.random.number(Object.keys(currencies).length - 1)
    ];
    const currency = currencies[randomCurrency].code;

    //create a list of ordered products in invoice
    let numItemsinOrder = faker.random.number({ min: 1, max: 4 });
    let orderlist = [];
    let totalPrice = 0;
    while (numItemsinOrder > 0) {
        const randomProd = faker.random.number({ min: 1, max: Object.keys(prods).length - 1 });
        const quantity = faker.random.number({ min: 1, max: 10 });
        const itemOrderedName = prods[randomProd].name;
        const itemOrderedProduct = prods[randomProd].productID;
        const itemOrderedProductUnitPrice = prods[randomProd].price;
        const itemOrderedProductPrice = quantity * itemOrderedProductUnitPrice;
        const unitPriceSpecification = {
            "@type": "UnitPriceSpecification",
            "price": itemOrderedProductUnitPrice,
            "priceCurrency": currency
        };
        const priceSpecification = {
            "@type": "PriceSpecification",
            "price": itemOrderedProductPrice,
            "priceCurrency": currency
        };
        const item = {
            "@type": "Product",
            "name": itemOrderedName,
            "productID": itemOrderedProduct,
            "unitPriceSpecification": unitPriceSpecification,
            "orderQuantity": quantity,
            "priceSpecification": priceSpecification
        };
        orderlist.push(item);
        totalPrice = totalPrice + itemOrderedProductPrice;
        numItemsinOrder -= 1;
    };

    //check if invoice has already been paid, if yes set payment amount to 0

    if (paymentStatus === "PaymentAutomaticallyApplied" || paymentStatus === "PaymentComplete") {
        totalPrice = 0;
    };
    // End ordered products list in invoice

    // create seller, broker, customer, seller = provider for simplicity
    const name1 = faker.company.companyName();
    const lei1 = `2345${faker.random.number({ min: 1000000000000000, max: 1999999999999999 })}`;
    const name2 = faker.company.companyName();
    const lei2 = `5432${faker.random.number({ min: 1000000000000000, max: 1999999999999999 })}`;
    const Seller = {
        "@type": "Corporation",
        "name": name1,
        "leiCode": lei1
    };
    const broker = {
        "@type": "Corporation",
        "name": name2,
        "leiCode": lei2
    };
    const person = getPerson();
    delete person['@context'];
    const address = getPostalAddress();
    delete address['@context'];
    delete address['organizationName'];
    const customer = {
        "@type": "Person",
        "name": `${person.firstName} ${person.lastName}`,
        "address": address,
        "telephone": person.phoneNumber,
        "email": person.email
    };

    const orderDate = new Date(faker.date.recent());
    const paymentDate = new Date(faker.date.future());
    const orderNumber = `Order#${faker.random.number({ min: 1, max: 999 })}`;

    const referencesOrder = {
        "@type": "Order",
        "description": `New Order For ${person.firstName} ${person.lastName}`,
        "orderDate": orderDate.getMonth() + "-" + orderDate.getDay() + "-" + orderDate.getFullYear(),
        "orderNumber": orderNumber,
        "paymentMethod": paymentMethod,
        "orderedItem": orderlist,
        "seller": Seller
    };

    const invoiceNumber = `Invoice#${faker.random.number({ min: 1, max: 999 })}`;

    const example = {
        '@context': ['https://w3id.org/traceability/v1'],
        "type": "EcommerceInvoiceRegistrationEvidenceDocument",
        "identifier": invoiceNumber,
        "description": `Invoice For ${person.firstName} ${person.lastName} for ${orderNumber}`,
        "url": `${faker.internet.url()}?queryid=${invoiceNumber}`,
        "broker": broker,
        "accountId": `xxxx-xxxx-xxxx-${faker.random.number({ min: 1000, max: 9999 })}`,
        "customer": customer,
        "paymentDueDate": paymentDate.getMonth() + "-" + paymentDate.getDay() + "-" + paymentDate.getFullYear(),
        "totalPaymentDue": totalPrice,
        "paymentStatus": paymentStatus,
        "provider": Seller,
        "referencesOrder": referencesOrder
    };
    return example;
};

module.exports = { getEcommerceInvoiceRegistrationEvidenceDocument };