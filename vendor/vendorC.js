export const getVendorC = (req, res) => {
    const data = [{
        "id": 501,
        "details": {
            "name": "Nasi Tempong",
            "category": "Food"
        },
        "pricing": {
            "base_price": 20000,
            "tax": 2000
        },
        "stock": 50
    },
    {
        "id": 502,
        "details": {
            "name": "Lumpia Goreng",
            "category": "Food"
        },
        "pricing": {
            "base_price": 15000,
            "tax": 1500
        },
        "stock": 75
    },
    {
        "id": 503,
        "details": {
            "name": "Soto Ayam",
            "category": "Food"
        },
        "pricing": {
            "base_price": 18000,
            "tax": 1800
        },
        "stock": 60
    },
    {
        "id": 504,
        "details": {
            "name": "Tahu Goreng",
            "category": "Food"
        },
        "pricing": {
            "base_price": 12000,
            "tax": 1200
        },
        "stock": 100
    },    {
        "id": 505,
        "details": {
            "name": "Perkedel",
            "category": "Food"
        },
        "pricing": {
            "base_price": 10000,
            "tax": 1000
        },
        "stock": 80
    },    {
        "id": 505,
        "details": {
            "name": "Es Cendol",
            "category": "Beverage"
        },
        "pricing": {
            "base_price": 8000,
            "tax": 800
        },
        "stock": 80
    },
    {
        "id": 506,
        "details": {
            "name": "Martabak Telur",
            "category": "Food"
        },
        "pricing": {
            "base_price": 25000,
            "tax": 2500
        },
        "stock": 40
    }];
    res.json(data);
}