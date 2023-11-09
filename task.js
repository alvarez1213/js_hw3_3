const fontElements = document.querySelectorAll('.font-size')
let fontActiveElement = document.querySelector('.font-size_active')

const book = document.getElementById('book')

for (const font of fontElements) {
    font.addEventListener('click', (e) => {
        if (font !== fontActiveElement) {
            fontActiveElement.classList.remove('font-size_active')        
            font.classList.add('font-size_active')
            fontActiveElement = font
            
            if (font.getAttribute('data-size') === 'small') {
                book.classList.add('book_fs-small')
                book.classList.remove('book_fs-big')
            } else if (font.getAttribute('data-size') === 'big') {
                book.classList.add('book_fs-big')
                book.classList.remove('book_fs-small')
            } else {                
                book.classList.remove('book_fs-big')
                book.classList.remove('book_fs-small')
            }
        }
        
        // запрет перехода по ссылке
        e.preventDefault()
    })
}