export const getVendorB = (req, res) => {
    const data = [{
        "sku": "TSHIRT-001",
        "productName": "Kaos Ijen Crater",
        "price": "75000",
        "isAvailable": true
    },
    {
        "sku": "MUG-002",
        "productName": "Mug Banyuwangi",
        "price": "45000",
        "isAvailable": true
    },
    {
        "sku": "SOUV-003",
        "productName": "Souvenir Khas Banyuwangi",
        "price": "25000",
        "isAvailable": true
    },
    {
        "sku": "BAG-004",
        "productName": "Tas Krama Banyuwangi",
        "price": "120000",
        "isAvailable": false
    }];
    res.json(data);
}