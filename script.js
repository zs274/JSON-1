let sqName = document.querySelector(".squad-name");
let home = document.querySelector(".home-town");
let formed = document.querySelector(".formed");
let secretBase = document.querySelector(".secretBase");
// let members = document.querySelector(".members");
let membersName = document.querySelector(".members-name");
let membersAge = document.querySelector(".members-age");
let membersSecret = document.querySelector(".members-secret");
let membersPowers = document.querySelector(".members-powers");



axios.get('https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json')
    .then(function (response) {
        console.log(response);

        sqName.innerHTML = response.data.squadName;
        home.innerHTML = response.data.homeTown;
        formed.innerHTML = response.data.formed;
        secretBase.innerHTML = response.data.secretBase;

        let members = [];

        for (var i = 0; i < members.length; i++) {
            console.log(members);

            // members.innerHTML = response.data.members;
            membersName.innerHTML = response.data.members.name;
            membersAge.innerHTML = response.data.members.age;
            membersSecret.innerHTML = response.data.members.secretIdentity;
            membersPowers.innerHTML = response.data.members.powers;
        }



    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {

    });
