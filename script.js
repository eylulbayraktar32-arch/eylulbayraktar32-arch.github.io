document.addEventListener('DOMContentLoaded', function() {
    const books = [
        { title: "1984", author: "George Orwell", price: "85 ₺", condition: "Çok İyi", img: "https://m.media-amazon.com/images/I/71kxaO1Qf-L._AC_UF1000,1000_QL80_.jpg" },
        { title: "Simyacı", author: "Paulo Coelho", price: "70 ₺", condition: "İyi", img: "https://m.media-amazon.com/images/I/61FdWtwanqL._AC_UF894,1000_QL80_.jpg" },
        { title: "Sapiens", author: "Yuval Noah Harari", price: "120 ₺", condition: "Mükemmel", img: "https://www.ynharari.com/wp-content/uploads/2017/01/sapiens.png" },
        { title: "Küçük Prens", author: "Antoine de Saint-Exupéry", price: "50 ₺", condition: "Çok İyi", img: "https://m.media-amazon.com/images/I/71jG+NT4+3L._AC_UF1000,1000_QL80_.jpg" },
        { title: "Dune", author: "Frank Herbert", price: "110 ₺", condition: "İyi", img: "https://m.media-amazon.com/images/I/81kYgT5yrJL._AC_UF1000,1000_QL80_.jpg" },
        { title: "Atomik Alışkanlıklar", author: "James Clear", price: "95 ₺", condition: "Mükemmel", img: "https://m.media-amazon.com/images/I/51-nXsSRfZL._AC_UF1000,1000_QL80_.jpg" },
        { title: "Körlük", author: "José Saramago", price: "80 ₺", condition: "Çok İyi", img: "https://m.media-amazon.com/images/I/81fJXB2R-JL.jpg" },
        { title: "Nutuk", author: "Mustafa Kemal Atatürk", price: "60 ₺", condition: "İyi", img: "https://m.media-amazon.com/images/I/51yH-3o4WKL.jpg" },
        { title: "Harry Potter ve Felsefe Taşı", author: "J.K. Rowling", price: "100 ₺", condition: "Mükemmel", img: "https://m.media-amazon.com/images/I/71-++hbbERL._AC_UF1000,1000_QL80_.jpg" },
        { title: "Suç ve Ceza", author: "Fyodor Dostoyevski", price: "90 ₺", condition: "Çok İyi", img: "https://m.media-amazon.com/images/I/81UxgjnqwbL._AC_UF1000,1000_QL80_.jpg" },
    ];

    const container = document.getElementById('books-container');

    books.forEach(book => {
        const col = document.createElement('div');
        col.className = 'col';
        col.innerHTML = `
            <div class="card book-card shadow">
                <img src="${book.img}" class="card-img-top book-img" alt="${book.title}" onerror="this.src='https://via.placeholder.com/300x450?text=Kitap+Kapağı';">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="text-muted">Yazar: ${book.author}</p>
                    <span class="badge bg-success condition-badge mb-2">${book.condition} Durumda</span>
                    <p class="price mt-auto">${book.price}</p>
                    <button class="btn btn-order btn-lg mt-3" onclick="alert('Sipariş için WhatsApp: +90 XXX XXX XX XX')">
                        Kitabı Satın Al
                    </button>
                </div>
            </div>
        `;
        container.appendChild(col);
    });
});

