const itemContainer = document.getElementById("itemContainer");
const cardTemplate = document.getElementById("cardTemplate");
const cartTableBody = document.getElementById("cartTableBody");
const totalHargaElem = document.getElementById("totalHarga");

const items = [
    { nama: "Honda Beat", harga: "20500000" },
    { nama: "Yamaha NMax", harga: "30000000" },
    { nama: "Suzuki GSX-R150", harga: "28000000" }
];

const keranjang = [];

function createCard(item) {
    const cardClone = cardTemplate.content.cloneNode(true);
    cardClone.querySelector("#namaBarang").textContent = item.nama;
    cardClone.querySelector("#hargaBarang").textContent = `Rp. ${item.harga}`;

    const addBarangButton = cardClone.querySelector(".addButton");
    const minusButton = cardClone.querySelector(".minus");
    const plusButton = cardClone.querySelector(".plus");
    const jumlahBarangInput = cardClone.querySelector("#jumlahBarang");

    minusButton.addEventListener("click", function () {
        const currentValue = parseInt(jumlahBarangInput.value);
        if (currentValue > 0) {
            jumlahBarangInput.value = currentValue - 1;
        }
    });

    plusButton.addEventListener("click", function () {
        const currentValue = parseInt(jumlahBarangInput.value);
        jumlahBarangInput.value = currentValue + 1;
    });

    addBarangButton.addEventListener("click", function () {
        const namaBarang = item.nama;
        const hargaBarang = item.harga;
        const jumlahBarang = parseInt(jumlahBarangInput.value);

        if (jumlahBarang > 0) {
            keranjang.push({ nama: item.nama, harga: item.harga, jumlah: jumlahBarang });
            updateKeranjang();
        }

        console.log("Nama Barang:", namaBarang);
        console.log("Harga Barang:", hargaBarang);
        console.log("Jumlah Barang:", jumlahBarang);
    });

    return cardClone;
}

function updateKeranjang() {
    cartTableBody.innerHTML = "";
    
    let totalHarga = 0;
    keranjang.forEach(item => {
        const hargaBarang = item.harga * item.jumlah;
        totalHarga += hargaBarang;
        
        const row = cartTableBody.insertRow();
        const namaCell = row.insertCell(0);
        const jumlahCell = row.insertCell(1);
        const hargaCell = row.insertCell(2);
        const totalCell = row.insertCell(3);
        
        namaCell.textContent = item.nama;
        jumlahCell.textContent = item.jumlah;
        hargaCell.textContent = `Rp. ${item.harga}`;
        totalCell.textContent = `Rp. ${hargaBarang}`;
    });
    
    totalHargaElem.textContent = `Rp. ${totalHarga}`;
}

items.forEach(item => {
    const card = createCard(item);
    itemContainer.appendChild(card);
});
