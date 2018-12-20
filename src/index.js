let user = {
  firstName: "Eno",
  lastName: "Yao"
}
let pig = require("./base.js")

let profile = <div>
  <img src="https://avatars1.githubusercontent.com/u/17243165" className="profile" />
  <h3>{[user.firstName, user.lastName].join(' ')}</h3>
  <a href="https://github.com/Wscats">Github</a>
</div>;

// let profile = <ul id='list'>
//   <li class='item'>Item 1</li>
//   <li class='item'>Item 2</li>
//   <li class='item'>Item 3</li>
// </ul>
// console.log(pig)
// console.log(profile)
pig.render(profile,document.body,()=>{
  console.log("Virtual DOM")
})

