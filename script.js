const headliner = document.querySelector('.headliner');
const navBtn = document.getElementById('nav-btn');
const navUl = document.getElementById('navbar-default');
const navIcon = document.getElementById('nav-icon');
const offersUl = document.getElementById('offers-ul');
const links = document.querySelectorAll('.link');

// set the offers 
const offers = [
  {
    id: 1,
    name: 'offer 1',
    price: 200,
    img: 'https://image.shutterstock.com/image-vector/red-banner-special-offer-260nw-1035467014.jpg'
  },
  {
    id: 2,
    name: 'offer 2',
    price: 300,
    img: 'https://rightpropertygroup.com.au/wp-content/uploads/2016/09/Offers-multiply.jpg'
  },
  {
    id: 3,
    name: 'offer 3',
    price: 400,
    img: 'https://www.eventbrite.co.uk/blog/wp-content/uploads/2022/06/special-offers.jpg'
  }
]
// set the date
let currentDate = Date()
currentDate = currentDate.slice(0,16)
headliner.textContent = `Welcome to our page today is ${currentDate}`

// set the navbar dynamicly open and close
navBtn.addEventListener('click',() => {
  if(navUl.classList.contains('hidden')) {
    navIcon.classList.replace('fa-bars', 'fa-close')
    navUl.classList.remove('hidden')
  } else {
    navIcon.classList.replace('fa-close', 'fa-bars')
    navUl.classList.add('hidden')
  }
});
// close navbar when link is clicked
links.forEach(link => {
  link.addEventListener('click',() => {
    navIcon.classList.replace('fa-close', 'fa-bars')
    navUl.classList.add('hidden')
  } )
});

// set the offers
offers.forEach(offer => {
  let li = document.createElement('div');
  li.classList.add('w-full','max-w-sm','bg-white','rounded-lg','shadow-md','dark:bg-gray-800','dark:border-gray-700');
  li.innerHTML = `<a href="#">
          <img class="p-8 rounded-t-lg offer-img" src=${offer.img} alt="offer image">
      </a>
      <div class="px-5 pb-5">
          <a href="#">
              <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              ${offer.name}
              </h5>
          </a>
          <div class="flex items-center mt-2.5 mb-5">
              <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
          </div>
          <div class="flex justify-between items-center">
              <span class="text-3xl font-bold text-gray-900 dark:text-white">$${offer.price}</span>
              <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
          </div>
      </div>`
  offersUl.appendChild(li)

});




