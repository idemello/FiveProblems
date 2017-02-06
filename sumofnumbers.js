let nums = [1,2,3,4,5,6,7,8,9,10]

function sumFor(list){

  let total = 0;
  for(i=0; i < list.length; i++) {

    total += list[i];
  }

  return total;
}

function sumWhile(list){

  let total = 0;
  let i = 0;
  while(i < list.length){

    total += list[i];
    i++;

  }

  return total;
}

function sumRecursion(list) {

  if(list.length === 0) {
    return 0;
  }
  return list[0] + sumRecursion(list.slice(1, list.length));
}

function sumTheSimpleWay(list){

  return _.reduce(list, function(memo, num){ return memo + num; }, 0);
}

console.log("The for loop total is: " + sumFor(nums));
console.log("The while loop total is: " + sumWhile(nums));
console.log("The recursive total is: " + sumRecursion(nums));
console.log("The simple total is: " + sumTheSimpleWay(nums));