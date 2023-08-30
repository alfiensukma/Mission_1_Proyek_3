const itemContainer = document.getElementById("itemContainer");
const cardTemplate = document.getElementById("cardTemplate");

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

        console.log("Nama Barang:", namaBarang);
        console.log("Harga Barang:", hargaBarang);
        console.log("Jumlah Barang:", jumlahBarang);
    });

    return cardClone;
}

items.forEach(item => {
    const card = createCard(item);
    itemContainer.appendChild(card);
});