let input = document.querySelector('input');
let userImg = document.querySelector('.avatar');
let userName = document.querySelector('.user-name');
let bio = document.querySelector('.bio');
let followerUser = document.querySelector('.followers');
let followingUser = document.querySelector('.following');



function createUI(data) {
    userImg.src = data.avatar_url;
    userName.innerText = data.name;
    bio.innerText = data.bio;

};

function handleChange(event) {
    if(event.keyCode === 13) {
        let user = event.target.value;
        let url = `https://api.github.com/users/${user}`;
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = function () {
            let userData = JSON.parse(xhr.response);
            createUI(userData);
        }
        xhr.onerror = function () {
            console.log("Something went wrong...")
        }
        xhr.send();

    let followers = new XMLHttpRequest();

    followers.open('GET', `https://api.github.com/users/${user}/followers`);

    followers.onload = function () {
        let followersData = JSON.parse(followers.response);
        followerUser.innerHTML = "Followers: ";
        followersData.forEach((element, index) => {
            if (index <= 5) {
                let followerAvatar = document.createElement("img");
                followerAvatar.src = element.avatar_url;
                let followerName = document.createElement("p");
                followerName.innerText = element.login;
                let followerInfo = document.createElement("div");
                followerInfo.append(followerAvatar, followerName);
                followerUser.append(followerInfo);
            }
        });
    }
    followers.send();

    let following = new XMLHttpRequest();

    following.open('GET', `https://api.github.com/users/${user}/following`);

    following.onload = function () {
        let followingData = JSON.parse(following.response);
        followingUser.innerHTML = "Following: ";
        followingData.forEach((element, index) => {
            if (index <= 5) {
                let followingAvatar = document.createElement("img");
                followingAvatar.src = element.avatar_url;
                let followingName = document.createElement("p");
                followingName.innerText = element.login;
                let followingInfo = document.createElement("div");
                followingInfo.append(followingAvatar, followingName);
                followingUser.append(followingInfo);
            }
        });
    }
    following.send();
    event.target.value = "";
    }
}


input.addEventListener('keyup', handleChange);