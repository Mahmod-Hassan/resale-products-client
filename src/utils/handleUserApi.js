import axios from 'axios';

const baseUrl = 'https://mobile-bazar-server-jet.vercel.app';

// after clicking unverify button on dashboard
// this function will execute and seller will be verified
const verifiedSeller = (id) => {
    axios
        .put(`${baseUrl}/user/verify-seller/${id}`)
        .then(({data}) => {})
        .catch(err => console.log(err.message))
}

// A seller will be admin when admin will click 'make admin' button
const makeAdmin = (id) => {
    axios
        .put(`${baseUrl}/user/make-admin/${id}`)
        .then(({data}) => {})
        .catch(err => console.log(err.message))
}

// we are deleting both buyer and seller
// with this function
const deleteBuyerAndSeller = (id, users, setUsers) => {
    const procceed = window.confirm('are you sure want to delete');
    if(procceed) {
        axios
        .delete(`${baseUrl}/user/${id}`)
        .then(({data}) => {
          if (data.deletedCount > 0) {
              const restUser = users.filter(user => user._id !== id);
              setUsers(restUser);
          }
      })
    } else{
        return;
    }
  
}

// export all api handler
export { deleteBuyerAndSeller, makeAdmin, verifiedSeller };

