$(document).ready(function() {
    //Function to type text, one character at a time for an element.
    //This function will return a promise. The promise resolves when the typing effect for the current element is complete. This is done so that next paragraph starts typing after the current has been typed completely.
    function typeText(element, text) {
      return new Promise(resolve => {
        let index = 0;
        element.classList.add('typing-cursor'); //Add cursor before typing starts
        let tempHTML = '';
        function typeNextCharacter() {
          if (index >= text.length) {
            element.classList.remove('typing-cursor');
            resolve(); //Resolve the promise when typing is complete
            return;
          }
          if (text[index] === '<') {
            let tagClose = text.indexOf('>', index);
            tempHTML += text.substring(index, tagClose + 1);
            index = tagClose + 1;
          }
          else {
            tempHTML += text[index++];
          }
  
          element.innerHTML = tempHTML;
          setTimeout(typeNextCharacter, 30); //Adjust typing speed
        }
        typeNextCharacter();
      });
    }
  
    //Sequentially animate each paragraph
    const elements = document.querySelectorAll('.type-it');
    let promiseChain = Promise.resolve(); //Start with a resolved promise
  
    Array.from(elements).forEach(el => {
      const text = el.getAttribute('data-text');
      promiseChain = promiseChain.then(() => typeText(el, text));
    });
});
  