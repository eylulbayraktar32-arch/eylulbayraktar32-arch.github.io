window.addEventListener('load', function() {
    console.log('Script yüklendi, kitaplar ekleniyor...'); // للتشخيص

    const books = [
        { title: "Sarı Yüz", author: "R. F. Kuang", price: "120 ₺", condition: "Mükemmel", img: "https://i.dr.com.tr/cache/600x600-0/originals/0002171557001-1.jpg" },
        { title: "Gece Yarısı Kütüphanesi", author: "Matt Haig", price: "90 ₺", condition: "Çok İyi", img: "https://i.dr.com.tr/cache/600x600-0/originals/0001922926001-1.jpg" },
        { title: "Rezonans Kanunu", author: "Pierre Franckh", price: "75 ₺", condition: "İyi", img: "https://i.dr.com.tr/cache/600x600-0/originals/0001801769001-1.jpg" },
        { title: "Engereğin Gözü", author: "Zülfü Livaneli", price: "85 ₺", condition: "Çok İyi", img: "https://i.dr.com.tr/cache/600x600-0/originals/0001902371001-1.jpg" },
        { title: "Atomik Alışkanlıklar", author: "James Clear", price: "95 ₺", condition: "Mükemmel", img: "https://i.dr.com.tr/cache/600x600-0/originals/0001983750001-1.jpg" },
        { title: "1984", author: "George Orwell", price: "80 ₺", condition: "İyi", img: "https://i.dr.com.tr/cache/600x600-0/originals/0001789098001-1.jpg" },
        { title: "Simyacı", author: "Paulo Coelho", price: "70 ₺", condition: "Çok İyi", img: "https://i.dr.com.tr/cache/600x600-0/originals/0000000064552-1.jpg" },
        { title: "Sapiens", author: "Yuval Noah Harari", price: "130 ₺", condition: "Mükemmel", img: "https://i.dr.com.tr/cache/600x600-0/originals/0000000633872-1.jpg" },
        { title: "Küçük Prens", author: "Antoine de Saint-Exupéry", price: "50 ₺", condition: "Çok İyi", img: "https://i.dr.com.tr/cache/600x600-0/originals/0000000689023-1.jpg" },
        { title: "Kürk Mantolu Madonna", author: "Sabahattin Ali", price: "65 ₺", condition: "Çok İyi", img: "https://i.dr.com.tr/cache/600x600-0/originals/0000000058245-1.jpg" }
    ];

    const container = document.getElementById('books-container');
    if (!container) {
        console.error('books-container bulunamadı!');
        return;
    }

    books.forEach(book => {
        const col = document.createElement('div');
        col.className = 'col';
        col.innerHTML = `
            <div class="card book-card shadow h-100" style="cursor: pointer;" data-bs-toggle="modal" data-bs-target="#bookModal" onclick="openModal('${book.title}', '${book.author}', '${book.price}', '${book.condition}', '${book.img}')">
                <img src="${book.img}" class="card-img-top book-img" alt="${book.title}" onerror="this.src='https://via.placeholder.com/300x450?text=Kapak+Yok';">
                <div class="card-body d-flex flex-column text-center">
                    <h5 class="card-title fw-bold">${book.title}</h5>
                    <p class="text-muted">Yazar: ${book.author}</p>
                    <span class="badge bg-success mb-2">${book.condition} Durumda</span>
                    <p class="price mt-auto">${book.price}</p>
                    <button class="btn btn-success btn-lg mt-3" onclick="event.stopPropagation(); alert('Sipariş için WhatsApp: +90 XXX XXX XX XX')">
                        Kitabı Satın Al
                    </button>
                </div>
            </div>
        `;
        container.appendChild(col);
    });
    console.log('10 kitap eklendi!');
});

function openModal(title, author, price, condition, img) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalAuthor').innerText = author;
    document.getElementById('modalPrice').innerText = price;
    document.getElementById('modalCondition').innerText = condition;
    document.getElementById('modalImg').src = img;
    const modal = new bootstrap.Modal(document.getElementById('bookModal'));
    modal.show();
}







