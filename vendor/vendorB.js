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
    }];
    res.json(data);
}