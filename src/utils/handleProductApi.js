import axios from 'axios';

const baseUrl = 'https://mobile-bazar-server-jet.vercel.app';

const deleteProduct = (id, products, setProducts) => {
    const procceed = window.confirm('are you sure want to delete');
    if(procceed) {
        axios
        .delete(`${baseUrl}/product/${id}`)
        .then(data => {
          if (data.data.deletedCount > 0) {
              const restProduct = products.filter(product => product._id !== id);
              setProducts(restProduct);
          }
      })
    } else{
        return;
    }
}

export { deleteProduct };

