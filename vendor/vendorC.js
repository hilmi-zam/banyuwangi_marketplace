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
    }];
    res.json(data);
}