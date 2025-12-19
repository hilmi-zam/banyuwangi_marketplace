import axios from 'axios';

export async function getIntegratorData(req, res) {
    try {
        const [resA, resB, resC] = await Promise.all([
            axios.get(`http://localhost:3000/api/vendor-a`),
            axios.get(`http://localhost:3000/api/vendor-b`),
            axios.get(`http://localhost:3000/api/vendor-c`),
        ]);
        const dataA = resA.data;
        const dataB = resB.data;
        const dataC = resC.data;

        const normalizedDataA = dataA.map(item => {
            const price = parseInt(item.hrg);
            const finalPriceAfterDiscount = price - (price * 0.1); // diskon 10%
            let statusStok = "Tidak Tersedia";
            if(item.ket_stok == "ada") {
                statusStok = "Tersedia";
            }

            return {
                id:  item.kd_produk,
                nama: item.nm_brg,
                harga_final: finalPriceAfterDiscount , // WAJIB Number / Integer 
                status: statusStok , // WAJIB String seragam
                sumber: "Vendor A"
            };
        });

         const normalizedDataB = dataB.map(item => {
            const price = parseInt(item.price);
            let statusStok = "Tidak Tersedia";
            if(item.isAvailable) {
                statusStok = "Tersedia";
            }

            return {
                id:  item.sku,
                nama: item.productName,
                harga_final: price , // WAJIB Number / Integer 
                status: statusStok , // WAJIB String seragam
                sumber: "Vendor B"
            };
        });
        
        const normalizedDataC = dataC.map(item => {
            const id = "A" + item.id;

            let productName = item.details.name + " (Recommended)";

            let price = item.pricing.base_price + item.pricing.tax;

            let statusStok = "Tidak Tersedia";
            if(item.stock > 0) {
                statusStok = "Tersedia";
            }
            
            return {
                id: id,
                nama: productName,
                harga_final: price , // WAJIB Number / Integer 
                status: statusStok , // WAJIB String seragam
                sumber: "Vendor B"
            };
        });
        
        const resultIntegrator = [...normalizedDataA, ...normalizedDataB, ...normalizedDataC];

        res.json(resultIntegrator);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: "Error saat mengambil api vendor",
        });
    }
}