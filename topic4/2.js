function filter(whiteList, blackList) {
    let notBlackList = [];
    for (let i = 0; i < whiteList.length; i++) {
        if (!contains(blackList, whiteList[i])) {
            notBlackList.push(whiteList[i]);
        }
    }

    return notBlackList;
}


function contains(arr, elem) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === elem) {
            return true;
        }
    }
    return false;
}


let whiteList = ['my-email@gmail.ru', 'jsfunc@mail.ru', 'annavkmail@vk.ru', 'fullname@skill.ru', 'goodday@day.ru'];
let blackList = ['jsfunc@mail.ru','goodday@day.ru'];
let result = filter(whiteList, blackList);
console.log(result);