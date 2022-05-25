import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const viewAuthor = (obj) => {
  clearDom();

  const domString = `
  <div class="mt-5 d-flex flex-wrap">
    <div class="text-white ms-5 details">
      <h5>${obj.bookObject.title} by ${obj.first_name} ${obj.last_name} ${obj.favorite ? '<span class="iconify" data-icon="typcn:star" style="color: goldenrod;" data-width="20" data-height="20"></span> Favorite Author' : ''}</h5>
      Author Email: <a href="mailto:${obj.email}">${obj.email}</a>
      <p>${obj.bookObject.description || ''}</p>
      <hr>
      <p>${obj.bookObject.sale ? `<span class="badge bg-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> 
        $${obj.bookObject.price}` : `$${obj.bookObject.price}`}</p>      
    </div>
   <div class="d-flex flex-column">
     <img src=${obj.bookObject.image} alt=${obj.title} style="width: 300px;">
     <div class="mt-5">
       <i id="edit-book-btn--${obj.bookObject.firebaseKey}" class="fas fa-edit btn btn-info"></i>
       <i id="delete-book--${obj.bookObject.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
     </div>
   </div>
  </div>`;

  renderToDOM('#view', domString);
};

export default viewAuthor;
