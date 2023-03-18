
    function openingceremony(callback){
        console.log("let the games begin");
        const score = {red : 0, blue : 0 , green : 0 , yellow : 0};
        setTimeout(() => {
            race100m(score , callback);
        }, 1000);
    }

    function race100M(scores, callback) {
        const redTime = Math.floor(Math.random() * 6) + 10;
        const blueTime = Math.floor(Math.random() * 6) + 10;
        const greenTime = Math.floor(Math.random() * 6) + 10;
        const yellowTime = Math.floor(Math.random() * 6) + 10;
      
        let winners = [];
        let minTime = Math.min(redTime, blueTime, greenTime, yellowTime);
        for (let color in scores) {
          if (scores[color] < 50) {
            continue;
          }
          if (redTime === minTime && color === "red") {
            winners.push(color);
            scores[color] += 50;
          } else if (blueTime === minTime && color === "blue") {
            winners.push(color);
            scores[color] += 50;
          } else if (greenTime === minTime && color === "green") {
            winners.push(color);
            scores[color] += 50;
          } else if (yellowTime === minTime && color === "yellow") {
            winners.push(color);
            scores[color] += 50;
          } else {
            scores[color] += 25;
          }
        }
        
        callback(scores, afterLongJump);
      }
      
      function afterRace100M(scores, callback) {
        console.log("Moving on to Long Jump!");
        setTimeout(() => {
          longJump(scores, callback);
        }, 2000);
      }
      
      function longJump(scores, callback) {
        
        const colors = ["red", "blue", "green", "yellow"];
        const colorIndex = Math.floor(Math.random() * 4);
        const color = colors[colorIndex];
        scores[color] += 150;
      
        
        console.log(`Long Jump Winner: ${color}`);
        
      
        
        callback(scores, afterHighJump);
      }
      
      function afterLongJump(scores, callback) {
        console.log("Moving on to High Jump!");
        highJump(scores, callback);
      }
      