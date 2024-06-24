const initialState = {
    bookData: [
        { id: 1, name: "Emotions @ Meditation", category: "Comic", price: "20000", author: "Vijay", language: "English", pdfName: "123", imgName: "https://m.media-amazon.com/images/I/51rSxioOL4S._AC_UY327_FMwebp_QL65_.jpg"},
        { id: 2, name: "The Monk Who Sold His Ferrari", category: "Comic", price: "80000", author: "Robin Sharma", language: "English", pdfName: "123", imgName: "https://m.media-amazon.com/images/I/61pZyTuNDYL._AC_UY327_FMwebp_QL65_.jpg"},
    ]
}
export default function bookReducer(state = initialState, action) {
    switch (action.type) {
        // case "ADD_BOOK":
        //     return console.log("add Book")
        default:
            return state;

    }
}