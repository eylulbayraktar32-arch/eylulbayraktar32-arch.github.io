const books = [
    { title: "1984 - George Orwell", author: "George Orwell", price: "85 ₺", condition: "Çok İyi", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500" },
    { title: "Simyacı", author: "Paulo Coelho", price: "70 ₺", condition: "İyi", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500" },
    { title: "Sapiens", author: "Yuval Noah Harari", price: "120 ₺", condition: "Mükemmel", img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500" },
    { title: "Küçük Prens", author: "Antoine de Saint-Exupéry", price: "50 ₺", condition: "Çok İyi", img: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=500" },
    { title: "Dune", author: "Frank Herbert", price: "110 ₺", condition: "İyi", img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500" },
    { title: "Atomic Habits", author: "James Clear", price: "95 ₺", condition: "Mükemmel", img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500" },
];

const container = document.getElementById('books-container');

books.forEach(book => {
    const col = document.createElement('div');
    col.className = 'col';
    col.innerHTML = `
        <div class="card book-card shadow">
            <img src="${book.img}" class="card-img-top book-img" alt="${book.title}">
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