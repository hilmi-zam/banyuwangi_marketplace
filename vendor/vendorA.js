export const getVendorA = (req, res) => {
    const data = [{
        kd_produk: "A001",
        nm_brg: "Kopi Bubuk 100g",
        hrg: "15000",
        ket_stok: "ada"
    },
    {
        kd_produk: "A002",
        nm_brg: "Kripik Singkong 200g",
        hrg: "10000",
        ket_stok: "ada"
    },
    {
        kd_produk: "A003",
        nm_brg: "Teh Celup 25pcs",
        hrg: "8000",
        ket_stok: "habis"
    },
    {
        kd_produk: "A004",
        nm_brg: "Tape Manis 500g",
        hrg: "15000",
        ket_stok: "ada"
    }
];
    res.json(data);
}