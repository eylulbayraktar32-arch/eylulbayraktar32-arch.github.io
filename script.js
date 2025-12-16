document.addEventListener('DOMContentLoaded', function() {
    const books = [
        { title: "1984", author: "George Orwell", price: "85 ₺", condition: "Çok İyi", img: "https://m.media-amazon.com/images/I/71jG+NT4+3L._AC_UF1000,1000_QL80_.jpg" },
        { title: "Simyacı", author: "Paulo Coelho", price: "70 ₺", condition: "İyi", img: "https://m.media-amazon.com/images/I/61FdWtwanqL._AC_UF894,1000_QL80_.jpg" },
        { title: "Sapiens", author: "Yuval Noah Harari", price: "120 ₺", condition: "Mükemmel", img: "https://www.ynharari.com/wp-content/uploads/2017/01/sapiens.png" },
        { title: "Küçük Prens", author: "Antoine de Saint-Exupéry", price: "50 ₺", condition: "Çok İyi", img: "https://cdn11.bigcommerce.com/s-62bdpkt7pb/images/stencil/1500x1500/products/7354/40945/DSCN9998__14342.1476024733.jpg?c=2" },
        { title: "Dune", author: "Frank Herbert", price: "110 ₺", condition: "İyi", img: "https://preview.redd.it/6hvnv3ya22o71.jpg?width=640&crop=smart&auto=webp&s=4e676e8363b9ee88890c5874c481fbc7d859f46c" },
        { title: "Atomik Alışkanlıklar", author: "James Clear", price: "95 ₺", condition: "Mükemmel", img: "https://m.media-amazon.com/images/I/513qwXn862L._AC_UF1000,1000_QL80_.jpg" },
        { title: "Körlük", author: "José Saramago", price: "80 ₺", condition: "Çok İyi", img: "https://is1-ssl.mzstatic.com/image/thumb/Publication4/v4/98/a2/5b/98a25b50-050a-3daf-0a8b-61aa234c8c7b/korluk_27baski.jpg/1200x900wz.jpg" },
        { title: "Nutuk", author: "Mustafa Kemal Atatürk", price: "60 ₺", condition: "İyi", img: "https://is1-ssl.mzstatic.com/image/thumb/Publication122/v4/b3/b7/c0/b3b7c0a2-9f3d-d4f3-5575-2e35668df4e9/Nutuk_eng.jpg/1200x675wz.jpg" },
        { title: "Harry Potter ve Felsefe Taşı", author: "J.K. Rowling", price: "100 ₺", condition: "Mükemmel", img: "https://m.media-amazon.com/images/I/61reDkJHXqS.jpg" },
        { title: "Suç ve Ceza", author: "Fyodor Dostoyevski", price: "90 ₺", condition: "Çok İyi", img: "https://pictures.abebooks.com/isbn/9786055907730-us.jpg" },
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
