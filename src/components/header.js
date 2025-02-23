  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

const Header = (title, date, temp) => {
  const headerDiv = document.createElement('div');
  const headerSpan = document.createElement('span');
  const headerH1 = document.createElement('h1');
  const headerSpan2 = document.createElement('span');
  headerDiv.appendChild(headerSpan);
  headerDiv.appendChild(headerH1);
  headerDiv.appendChild(headerSpan2);
  headerDiv.classList.add('header');
  headerSpan.classList.add('date');
  headerSpan2.classList.add('temp');
  headerSpan.textContent = date;
  headerH1.textContent = title;
  headerSpan2.textContent = temp;
  console.log(headerDiv);
  return headerDiv;
}

// TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

const headerAppender = (selector) => {
  const location = document.querySelector(selector);
  const newHeader = Header('Outside', 'Dec. 3rd, 2021', '69F');
  location.appendChild(newHeader);
  return selector;
}

export { Header, headerAppender }