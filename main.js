//task 1
var animal = {
  name: "",
  sound: ""
};
  
function isSound(animal) {
  let Sound = animal.sound;
  if (animal === undefined) {
    return "null";
  } else {
    return Sound;
  }
};
isSound({
  name: "",
  sound: ""
});


//task 2
function getAverageMark(marks) {
  let sum = 0, average = 0;
  for (i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  average = sum / marks.length;
  return Math.round(average);
}
getAverageMark([4, 5, 4, 4, 3, 2, 5, 5]);


//task 3
function checkBirthday(name, birthday) {
  let age = Math.round((Date.now() - Number(new Date(birthday))) / (1000*60*60*24*365.24));
      
  if (age < 18) {
      console.log(`Сожалею, ${name}, но я не могу вам продать алкоголь.\nЗато могу предложить вам замечательный клюквенный компот!`);
      return;
  } else if (age >= 18) {
      console.log(`Не желаете ли олд-фэшн, ${name}?`);
      return;
  }
}
checkBirthday("Vasya", "2001, 8, 22");