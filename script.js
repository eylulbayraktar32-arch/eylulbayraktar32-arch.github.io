col.innerHTML = `
    <div class="card book-card shadow h-100" data-bs-toggle="modal" data-bs-target="#bookModal" 
         onclick="openModal('${book.title}', '${book.author}', '${book.price}', '${book.condition}', '${book.img}')">
        <img src="${book.img}" class="card-img-top book-img" alt="${book.title}" onerror="this.src='https://via.placeholder.com/300x450?text=Kapak+Yok';">
        <div class="card-body d-flex flex-column text-center">
            <h5 class="card-title fw-bold">${book.title}</h5>
            <p class="text-muted">Yazar: ${book.author}</p>
            <span class="badge bg-success mb-2">${book.condition} Durumda</span>
            <p class="price mt-auto">${book.price}</p>
            <button class="btn btn-success btn-lg mt-3" onclick="event.stopPropagation(); alert('Sipariş için WhatsApp: +90 XXX XXX XX XX')">
                Hemen Al
            </button>
        </div>
    </div>
`;





