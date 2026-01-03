// الكتب الأساسية - غيّر هذه الكتب بكتبك الحقيقية لاحقاً
let books = [
    {
        title: "1984",
        author: "George Orwell",
        condition: "Çok İyi Durumda",
        price: 50,
        image: "https://m.media-amazon.com/images/I/71kxa1F2tkL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        title: "Sefiller",
        author: "Victor Hugo",
        condition: "Mükemmel Durumda",
        price: 80,
        image: "https://m.media-amazon.com/images/I/81p8wZr6HQL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        title: "Suç ve Ceza",
        author: "Fyodor Dostoyevski",
        condition: "İyi Durumda",
        price: 70,
        image: "https://m.media-amazon.com/images/I/91b5RhL2nPL._AC_UF1000,1000_QL80_.jpg"
    }
];

// تحميل الكتب من localStorage إذا موجودة (الكتب اللي أضفتها من النموذج سابقاً)
if (localStorage.getItem('books')) {
    books = JSON.parse(localStorage.getItem('books'));
}

// عرض الكتب
function renderBooks() {
    const container = document.getElementById('books-container');
    container.innerHTML = '';

    if (books.length === 0) {
        container.innerHTML = '<div class="col-12 text-center"><p class="text-muted">Henüz kitap eklenmemiş.</p></div>';
        return;
    }

    books.forEach((book, index) => {
        const col = document.createElement('div');
        col.className = 'col';
        col.innerHTML = `
            <div class="card h-100 shadow-sm hover-shadow">
                <img src="${book.image || 'https://via.placeholder.com/300x400?text=Resim+Yok'}" 
                     class="card-img-top" style="height: 350px; object-fit: cover;" alt="${book.title}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">
                        <strong>Yazar:</strong> ${book.author}<br>
                        <strong>Durum:</strong> <span class="badge bg-info">${book.condition}</span><br>
                        <strong>Fiyat:</strong> <span class="text-success fs-5">${book.price} ₺</span>
                    </p>
                    <button class="btn btn-primary mt-auto" onclick="openModal(${index})">
                        Detayları Gör
                    </button>
                </div>
            </div>
        `;
        container.appendChild(col);
    });
}

// فتح المودال
function openModal(index) {
    const book = books[index];
    document.getElementById('modalTitle').textContent = book.title;
    document.getElementById('modalAuthor').textContent = book.author;
    document.getElementById('modalPrice').textContent = book.price + ' ₺';
    document.getElementById('modalCondition').textContent = book.condition;
    document.getElementById('modalImg').src = book.image || 'https://via.placeholder.com/600x800?text=Resim+Yok';

    const modal = new bootstrap.Modal(document.getElementById('bookModal'));
    modal.show();
}

// إضافة كتاب جديد
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

// تشغيل عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', renderBooks);
