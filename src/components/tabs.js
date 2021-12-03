  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  import axios from 'axios';

const Tabs = (topics) => {
  const tabsTopics = document.createElement('div')
  const topicsJS = document.createElement('div');
  const topicsBS = document.createElement('div');
  const topicsTech = document.createElement('div');
  tabsTopics.appendChild(topicsJS);
  tabsTopics.appendChild(topicsBS);
  tabsTopics.appendChild(topicsTech);
  tabsTopics.classList.add('topics');
  topicsJS.classList.add('tab');
  topicsBS.classList.add('tab');
  topicsTech.classList.add('tab');
  topicsJS.textContent = topics[0];
  topicsBS.textContent = topics[1];
  topicsTech.textContent = topics[2];
  return tabsTopics;
}

  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

const tabsAppender = (selector) => {
  const location = document.querySelector(selector);
  axios.get(`http://localhost:5000/api/topics`)
    .then(resp => {
      // console.log(resp);
      let newTabs = Tabs(resp.data.topics);
      location.appendChild(newTabs);
      // console.log(newTabs);
      return newTabs;
    }).catch(error => {
      console.log(error);
    }).finally(() => console.log('it work? hm'))
};

export { Tabs, tabsAppender }
