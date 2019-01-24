import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q="
const APIKEY = "&printType=Books&key=AIzaSyAHR9-A8oL7LgYrBQRJnm5oKDVSbujaTuk"

export default {
    search: function(query){
        return axios.get(BASEURL + query + APIKEY);
    },
    getBooks: function() {
        return axios.get("/api/books");
    },
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    },
    saveBook: function(bookData){
        return axios.post("/api/books", bookData)
    }
};