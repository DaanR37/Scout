import places from 'places.js';

const initAutocomplete = () => {
  const addressInput = document.getElementById('search-location');
  if (addressInput) {
    places({ container: addressInput });
  }
};

export { initAutocomplete };
