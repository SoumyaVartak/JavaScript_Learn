const clock = document.querySelector('#clock');
// or you can use below command  it will give you same output
// document.getElementById('clock')

setInterval(function () {
  let date = new Date();

  // console.log(date.toLocaleTimeString());
  clock.innerHTML = `<span>${date.toLocaleTimeString()}</span>`;
}, 1000);
