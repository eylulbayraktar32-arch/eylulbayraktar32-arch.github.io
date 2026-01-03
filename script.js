// Kitapların temel listesi
// Buraya kendi kitaplarını ekleyebilir veya değiştirebilirsin
let books = [
    {
        title: "Sarı Yüz",
        author: "R. F. Kuang",
        condition: "Mükemmel Durumda",
        price: 120,
        image: "https://m.media-amazon.com/images/I/51jy24kvSXL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        title: "Gece Yarısı Kütüphanesi",
        author: "Matt Haig",
        condition: "Çok İyi Durumda",
        price: 90,
        image: "https://m.media-amazon.com/images/I/81Q+Dx71auS._AC_UF1000,1000_QL80_.jpg"
    },
    {
        title: "Rezonans Kanunu",
        author: "Pierre Franckh",
        condition: "İyi Durumda",
        price: 75,
        image: "https://m.media-amazon.com/images/I/61MQy-GPzcL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        title: "Engereğin Gözü",
        author: "Zülfü Livaneli",
        condition: "Çok İyi Durumda",
        price: 85,
        image: "https://m.media-amazon.com/images/I/71vNYen1meL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        title: "Atomik Alışkanlıklar",
        author: "James Clear",
        condition: "Mükemmel Durumda",
        price: 95,
        image: "https://m.media-amazon.com/images/I/513qwXn862L._AC_UF1000,1000_QL80_.jpg"
    },
    {
        title: "1984",
        author: "George Orwell",
        condition: "İyi Durumda",
        price: 80,
        image: "https://i.etsystatic.com/17937725/r/il/7df2de/6117642888/il_fullxfull.6117642888_abca.jpg"
    },
    {
        title: "Simyacı",
        author: "Paulo Coelho",
        condition: "Çok İyi Durumda",
        price: 70,
        image: "https://m.media-amazon.com/images/I/81UxgjnqwbL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        title: "Sapiens",
        author: "Yuval Noah Harari",
        condition: "Mükemmel Durumda",
        price: 130,
        image: "https://www.ynharari.com/wp-content/uploads/2017/01/sapiens.png"
    },
    {
        title: "Küçük Prens",
        author: "Antoine de Saint-Exupéry",
        condition: "Çok İyi Durumda",
        price: 50,
        image: "https://m.media-amazon.com/images/I/71s0DWeKtVL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        title: "Kürk Mantolu Madonna",
        author: "Sabahattin Ali",
        condition: "Çok İyi Durumda",
        price: 65,
        image: "https://m.media-amazon.com/images/I/61Sa5w9LDKL._AC_UF1000,1000_QL80_.jpg"
    }
];

// Tarayıcıda daha önce eklenmiş kitapları yükle (localStorage)
if (localStorage.getItem('books')) {
    books = JSON.parse(localStorage.getItem('books'));
}

// Kitapları sayfada göster
function renderBooks() {
    const container = document.getElementById('books-container');
    container.innerHTML = '';

    if (books.length === 0) {
        container.innerHTML = '<div class="col-12 text-center"><p class="text-muted fs-4">Henüz kitap eklenmemiş.</p></div>';
        return;
    }

    books.forEach((book, index) => {
        const col = document.createElement('div');
        col.className = 'col';

        // Resim yüklenemezse yedek placeholder göster
        const fallbackImage = 'https://via.placeholder.com/400x600/C9D6DF/1E3F66?text=' + encodeURIComponent(book.title);

        col.innerHTML = `
            <div class="card h-100 shadow-sm border-0">
                <img src="${book.image || fallbackImage}" 
                     class="card-img-top" 
                     style="height: 350px; object-fit: cover;"
                     onerror="this.src='${fallbackImage}'"
                     alt="${book.title}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title mb-3">${book.title}</h5>
                    <p class="card-text flex-grow-1">
                        <strong>Yazar:</strong> ${book.author}<br>
                        <strong>Durum:</strong> <span class="badge bg-success">${book.condition}</span><br>
                        <strong>Fiyat:</strong> <span class="text-primary fs-4 fw-bold">${book.price} ₺</span>
                    </p>
                    <button class="btn btn-primary mt-3" onclick="openModal(${index})">
                        Detayları Gör
                    </button>
                </div>
            </div>
        `;
        container.appendChild(col);
    });
}

// Modal'ı aç (kitap detayları)
function openModal(index) {
    const book = books[index];
    const fallbackImage = 'https://via.placeholder.com/800x1000/C9D6DF/1E3F66?text=' + encodeURIComponent(book.title);

    document.getElementById('modalTitle').textContent = book.title;
    document.getElementById('modalAuthor').textContent = book.author;
    document.getElementById('modalPrice').textContent = book.price + ' ₺';
    document.getElementById('modalCondition').textContent = book.condition;
    document.getElementById('modalImg').src = book.image || fallbackImage;
    document.getElementById('modalImg').onerror = function() { this.src = fallbackImage; };

    const modal = new bootstrap.Modal(document.getElementById('bookModal'));
    modal.show();
}

// Yeni kitap ekleme formu (eğer sayfada varsa)
document.getElementById('add-book-form')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const newBook = {
        title: document.getElementById('title').value.trim(),
        author: document.getElementById('author').value.trim(),
        condition: document.getElementById('condition').value,
        price: parseInt(document.getElementById('price').value),
        image: document.getElementById('image').value.trim() || null
    };

    if (!newBook.title || !newBook.author || isNaN(newBook.price)) {
        alert('Lütfen tüm zorunlu alanları doldurun!');
        return;
    }

    books.push(newBook);
    localStorage.setItem('books', JSON.stringify(books));
    renderBooks();
    this.reset();
    alert('✅ Kitap başarıyla eklendi!');
});

// Sayfa yüklendiğinde kitapları göster
document.addEventListener('DOMContentLoaded', renderBooks);
