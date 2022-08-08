const Testimonails = [
  {
    name: "Tanya Sinclair",
    role: "UX Engineer",
    picture: new URL('/images/image-tanya.jpg', import.meta.url),
    testimonial: `“ I've been interested in coding for a while but never taken the jump, until now.
      I couldn't recommend this course enough. I'm now in the job of my dreams and
      so excited about the future. ”`
  },
  {
    name: "John Tarkpor",
    role: "Junior Front-end Developer",
    picture: new URL('/images/image-john.jpg', import.meta.url),
    testimonial: `  “ If you want to lay the best foundation possible I'd recommend taking this course.
      The depth the instructors go into is incredible. I now feel so confident about
      starting up as a professional developer. ”`
  },
]

const state = { current: 0 };

const card = document.querySelector('.testimonials-card');

const pictureContainer = card.querySelector('.picture-container');
const customerPicture = document.createElement('img');
customerPicture.className = 'picture';
customerPicture.alt = '';
pictureContainer.appendChild(customerPicture);

const customerTestimonial = card.querySelector('.testimonial');

const customerName = card.querySelector('.name');

const customerRole = card.querySelector('.role');

const update = (index) => {
  state.current = Math.abs(index) % Testimonails.length;
  const person = Testimonails[ index % Testimonails.length ];
  customerPicture.src = person.picture;
  customerPicture.alt = person.name;
  customerName.textContent = person.name;
  customerRole.textContent = person.role;
  customerTestimonial.textContent = person.testimonial;
}

update(0);