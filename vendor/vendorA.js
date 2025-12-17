export const getVendorA = (req, res) => {
    const data = [{
        kd_produk: "A001",
        nm_brg: "Kopi Bubuk 100g",
        hrg: "15000",
        ket_stok: "ada"
    }];
    res.json(data);
}