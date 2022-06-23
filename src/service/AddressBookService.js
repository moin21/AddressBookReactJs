import axios from "axios";

class AddressBookService {
  baseUrl = "http://localhost:8080/address-book";

  addPerson(data) {
    return axios.post(`${this.baseUrl}/post`, data);
  }

  getAllContacts() {
    return axios.get(`${this.baseUrl}/get-all`);
  }

  getPersonById(personId) {
    return axios.get(`${this.baseUrl}/get/${personId}`);
  }

  updatePerson(personId, data) {
    return axios.put(`${this.baseUrl}/update/${personId}`, data);
  }

  deletePerson(personId) {
    return axios.delete(`${this.baseUrl}/delete/${personId}`);
  }
}

export default new AddressBookService();
