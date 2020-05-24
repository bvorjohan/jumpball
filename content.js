// this file runs on page load, and can interact with the DOM


// test to be sure is working an filter domains correctly
// alert("Hello")

let chatInput = null;
let chatButton = null;
let intervalToSetWatcherForTextInput = null;
let chatHistory = null;
let peopleButton = null;

const runJumpball =  () => {
  console.log("running jumpball!")
  console.log("picking someone at random...")
  peopleButton = document.querySelector(".ThdJC.kaAt2.c0XF8e.s7PhZd.Z9zn3b.sUgV6e")
  // console.log(peopleButton)
  if (!!peopleButton) {
    peopleButton.click()
    setTimeout(() => {
      peoplesNames = document.querySelectorAll(".cS7aqe.NkoVdd")
      // peoplesNames = document.querySelector
      console.log("these are the people...")
      peoplesNames.forEach((element, i) => {
        console.log(element.innerText)
      });

    },500)
  }
}

let intervalToCheckIfJoined = setInterval(() => {
  const checkIfJoinedElement = document.querySelector(".Jrb8ue")
  if (!!checkIfJoinedElement) {
    console.log("joined meeting!")
    chatButton = document.querySelector(".NPEfkd.RveJvd.snByac")

    intervalToSetWatcherForTextInput = setInterval(() => {
      chatInput = document.querySelector(".KHxj8b.tL9Q4c");
      if (!!chatInput) {
        chatHistory = document.querySelector(".oIy2qc")
        // console.log(chatInput)
        if (!!chatHistory) {
          if (chatHistory.innerText === '!jumpball') {
            clearInterval(intervalToSetWatcherForTextInput)
            runJumpball()
          }

        }
        // chatInput.addEventListener('input',(event) => console.log(event))
      }
    },1000)
    clearInterval(intervalToCheckIfJoined)
  }
},1000)

// let joinNowButton = document.querySelector(".e19J0b.CeoRYc");
// console.log(joinNowButton)
// joinNowButton.addEventListener("click",() => console.log("was clicked"))

// let chatInput = document.querySelector(".KHxj8b.tL9Q4c");
// console.log(chatInput)
// chatInput.addEventListener('input',(event) => console.log(event))
