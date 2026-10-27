function sum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function connectWagons(wagons) {
  var locomotiveA = [];
  var locomotiveB = [];
  var locomotiveC = [];

  for (var i = 0; i < wagons.length; i++) {
    var locomotiveALength = sum(locomotiveA);
    var locomotiveBLength = sum(locomotiveB);
    var locomotiveCLength = sum(locomotiveC);

    if (
      locomotiveALength <= locomotiveBLength &&
      locomotiveALength <= locomotiveCLength
    ) {
      locomotiveA.push(wagons[i]);
    } else if (
      locomotiveBLength <= locomotiveALength &&
      locomotiveBLength <= locomotiveCLength
    ) {
      locomotiveB.push(wagons[i]);
    } else {
      locomotiveC.push(wagons[i]);
    }
  }

  return [locomotiveA, locomotiveB, locomotiveC];
}

if (require.main === module) {
  var result = connectWagons([1, 2, 3, 6, 5, 4]);
  console.log("========= connectWagons =========");
  console.log("locomotiveA", result[0], "length:", sum(result[0]));
  console.log("locomotiveB", result[1], "length:", sum(result[1]));
  console.log("locomotiveC", result[2], "length:", sum(result[2]));
  console.log("=================================");
}

module.exports = { connectWagons };
