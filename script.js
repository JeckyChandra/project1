function search() {
    var searchKey = document.querySelector('input').value;
    if (searchKey == 'Mobil' || searchKey == 'mobil') {
        document.location.href = 'product.html';
    }
    else {
        document.location.href = 'notFound.html';
    }
}