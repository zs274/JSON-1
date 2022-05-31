// let sqName = document.querySelector(".squad-name");
// let home = document.querySelector(".home-town");
// let formed = document.querySelector(".formed");
// let secretBase = document.querySelector(".secretBase");
// let membersName0 = document.querySelector(".members-name");
// let membersAge0 = document.querySelector(".members-age");
// let membersSecret0 = document.querySelector(".members-secret");
// let membersPowers0 = document.querySelector(".members-powers");

// axios.get('https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json')
//     .then(response => {
//         const heroes = response.data;
//         console.log(heroes);

//         sqName.innerHTML = heroes.squadName;
//         home.innerHTML = heroes.homeTown;
//         formed.innerHTML = heroes.formed;
//         secretBase.innerHTML = heroes.secretBase;

//         membersName0.innerHTML = heroes.members[0].name;
//         membersAge0.innerHTML = heroes.members[0].age;
//         membersSecret0.innerHTML = heroes.members[0].secretIdentity;

//         membersPowers0.innerHTML = heroes.members[0].powers;


//     }).catch(err => console.error(err));

const output = document.getElementById('output');


axios.get("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json")
    .then(response => {
        const heroes = response.data;
        console.log("HEROES: ", heroes);

        const squadName = document.createElement("h1");
        squadName.innerText = heroes.squadName;
        output.appendChild(squadName);

        const secretBase = document.createElement("p");
        secretBase.innerText = "Secret base: " + heroes.secretBase;
        output.appendChild(secretBase);

        const homeTown = document.createElement("p");
        homeTown.innerText = "Hometown: " + heroes.homeTown;
        output.appendChild(homeTown);

        const formed = document.createElement("p");
        formed.innerText = "Formed: " + heroes.formed;
        output.appendChild(formed);


        for (let member of heroes.members) {
            console.log("MEMBER: ", member);
            const memberSection = document.createElement("section");

            const memberName = document.createElement("h2");
            memberName.innerText = member.name;
            memberSection.appendChild(memberName);

            const powers = document.createElement("ul");

            for (let power of member.powers) {
                const p = document.createElement("li");
                p.innerText = power;
                powers.appendChild(p);
            }

            memberSection.appendChild(powers);

            output.appendChild(memberSection);
        }

    }).catch(err => console.error(err));