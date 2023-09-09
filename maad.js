const nodes = [
  { id: 1, isHospital: 1, hospitalName: "", ambulancesAvailable: 0 },
  { id: 2, isHospital: 1, hospitalName: "", ambulancesAvailable: 0 },
  { id: 3, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 4, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 5, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 6, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 7, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 8, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 9, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 10, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 11, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 12, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 13, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 14, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 15, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 16, isHospital: 1, hospitalName: "Santokh Hospital", ambulancesAvailable: 24 },
  { id: 17, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 18, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 19, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 20, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 21, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 22, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 23, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 24, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 25, isHospital: 1, hospitalName: "Max Super Specialty Hospital", ambulancesAvailable: 25 },
  { id: 26, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 27, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 28, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 29, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 30, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 31, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 32, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 33, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 34, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 35, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 36, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 37, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 38, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 39, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 40, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 41, isHospital: 1, hospitalName: "Healing Hospital- Best Super Speciality Hospital in Chandigarh", ambulancesAvailable: 23 },
  { id: 42, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 43, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 44, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 45, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 46, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 47, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 48, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 49, isHospital: 1, hospitalName: "Harmony Hospital", ambulancesAvailable: 12 },
  { id: 50, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 51, isHospital: 1, hospitalName: "IVY Hospital Mohali", ambulancesAvailable: 25 },
  { id: 52, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 53, isHospital: 1, hospitalName: "Landmark Hospital", ambulancesAvailable: 14 },
  { id: 54, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 55, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 56, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 57, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 58, isHospital: 1, hospitalName: "Dhawan Hospital", ambulancesAvailable: 11 },
  { id: 59, isHospital: 1, hospitalName: "Command Hospital", ambulancesAvailable: 16 },
  { id: 60, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 61, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 62, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 63, isHospital: 1, hospitalName: "Fortis Hospital Mohali", ambulancesAvailable: 17 },
  { id: 64, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 65, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 66, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 67, isHospital: 1, hospitalName: "Eden Critical Care Hospital", ambulancesAvailable: 10 },
  { id: 68, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 69, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 70, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 71, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 72, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 73, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 74, isHospital: 1, hospitalName: "Park Hospital", ambulancesAvailable: 12 },
  { id: 75, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 76, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 77, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 78, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 79, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 80, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 81, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 82, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 83, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 84, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 85, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 86, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 87, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 88, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 89, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 90, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 91, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 92, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 93, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 94, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 95, isHospital: 0, hospitalName: "", ambulancesAvailable: 0 },
  { id: 96, isHospital: 1, hospitalName: "Alchemist Hospital Panchkula", ambulancesAvailable: 25 },
];

const edges = [];

for (let row = 1; row <= 12; row++) {
  for (let col = 1; col <= 8; col++) {
    const nodeId = (col - 1) * 12 + row;

    // Calculate the node IDs of potential neighbors
    const leftNeighborId = nodeId - 1; // left
    const rightNeighborId = nodeId + 1; // right
    const topNeighborId = nodeId - 12; // top
    const bottomNeighborId = nodeId + 12; // bottom

    // Generate random cost values between 0 and 0.9
    const topCost = Math.random() * 0.9;
    const bottomCost = Math.random() * 0.9;
    const leftCost = Math.random() * 0.9;
    const rightCost = Math.random() * 0.9;

    // Check and add edges to the left, right, top, and bottom if they exist
    if (row > 1) {
      edges.push({ from: nodeId, to: leftNeighborId, cost: topCost });
      edges.push({ from: leftNeighborId, to: nodeId, cost: topCost }); // Add the reverse edge
    }
    if (row < 12) {
      edges.push({ from: nodeId, to: rightNeighborId, cost: bottomCost });
      edges.push({ from: rightNeighborId, to: nodeId, cost: bottomCost }); // Add the reverse edge
    }
    if (col > 1) {
      edges.push({ from: nodeId, to: topNeighborId, cost: leftCost });
      edges.push({ from: topNeighborId, to: nodeId, cost: leftCost }); // Add the reverse edge
    }
    if (col < 8) {
      edges.push({ from: nodeId, to: bottomNeighborId, cost: rightCost });
      edges.push({ from: bottomNeighborId, to: nodeId, cost: rightCost }); // Add the reverse edge
    }
  }
}


function findNearestHospital(requestedNodeId) {
  let nearestHospitalNode = null;
  let shortestDistance = Infinity;

  for (const node of nodes) {
    if (node.isHospital && node.ambulancesAvailable > 0) {
      const distance = getShortestPathDistance(requestedNodeId, node.id);
      if (distance !== null && distance < shortestDistance) {
        shortestDistance = distance;
        nearestHospitalNode = node.id;
      }
    }
  }

  return nearestHospitalNode;
}

function getShortestPathDistance(startNodeId, endNodeId) {
  const visited = new Set();
  const distances = {};
  nodes.forEach(node => (distances[node.id] = Infinity));
  distances[startNodeId] = 0;

  while (visited.size < nodes.length) {
    const currentNodeId = getClosestUnvisitedNode(distances, visited);
    visited.add(currentNodeId);

    for (const edge of edges) {
      if (edge.from === currentNodeId && !visited.has(edge.to)) {
        const potentialDistance = distances[currentNodeId] + edge.cost; // Use edge cost instead of edge.trafficDensity
        if (potentialDistance < distances[edge.to]) {
          distances[edge.to] = potentialDistance;
        }
      }
    }
  }

  return distances[endNodeId] !== Infinity ? distances[endNodeId] : null; // Return null if there is no path
}

function getClosestUnvisitedNode(distances, visited) {
  let closestNode = null;
  let shortestDistance = Infinity;

  for (const node of nodes) {
    if (!visited.has(node.id) && distances[node.id] < shortestDistance) {
      closestNode = node.id;
      shortestDistance = distances[node.id];
    }
  }

  return closestNode;
}

function dijkstra(edges, startNode, endNode) {
  const graph = {};
  for (const edge of edges) {
    if (!graph[edge.from]) graph[edge.from] = [];
    if (!graph[edge.to]) graph[edge.to] = [];
    graph[edge.from].push({ to: edge.to, cost: edge.cost });
    graph[edge.to].push({ to: edge.from, cost: edge.cost });
  }

  const visited = {};
  const distances = {};
  const previousNodes = {};

  for (const node in graph) {
    distances[node] = Infinity;
    previousNodes[node] = null;
  }
  distances[startNode] = 0;

  while (true) {
    let closestNode = null;
    let closestDistance = Infinity;

    for (const node in graph) {
      if (!visited[node] && distances[node] < closestDistance) {
        closestNode = node;
        closestDistance = distances[node];
      }
    }

    if (closestNode === null) break;

    visited[closestNode] = true;

    for (const neighbor of graph[closestNode]) {
      const potentialDistance = distances[closestNode] + neighbor.cost;

      if (potentialDistance < distances[neighbor.to]) {
        distances[neighbor.to] = potentialDistance;
        previousNodes[neighbor.to] = closestNode;
      }
    }
  }

  const shortestPath = [];
  let currentNode = endNode;
  while (currentNode !== null) {
    shortestPath.unshift(currentNode);
    currentNode = previousNodes[currentNode];
  }

  const pathLength = distances[endNode];

  return {
    shortestPath,
    pathLength,
    numberOfNodes: shortestPath.length,
  };
}

function calculateCompleteDistance(result) {
  let a = result.numberOfNodes - 1;
  let b = a * 3;
  return b
}

function calculateEstimatedTime(result, completeDist) {
  let a = 1 - (result.pathLength / (result.numberOfNodes - 1));

  let actualSpeed = 60 * a;

  var time = completeDist / actualSpeed;
  var rounded = time.toFixed(2);
  return rounded;

}

const source = 1;
console.log(source)
const nearestNode = findNearestHospital(1);
console.log("The nearest hospital is: ")
console.log(nearestNode)
const result = dijkstra(edges, source, nearestNode);
console.log(result)
const completeDist = calculateCompleteDistance(result)
console.log(completeDist)
const estimatedTime = calculateEstimatedTime(result, completeDist)
console.log(estimatedTime);

function takenPath(result) {
  let a = result.shortestPath;
  return a;
}

function incrementAmbulanceCount(id, incrementBy) {
  setTimeout(() => {
    const hospitalNode = nodes.find((node) => node.isHospital === 1 && node.id === id);

    if (hospitalNode) {
      hospitalNode.ambulancesAvailable += incrementBy;

      // Ensure ambulance count is not negative
      if (hospitalNode.ambulancesAvailable < 0) {
        hospitalNode.ambulancesAvailable = 0;
      }
    }
  }, 45000);
}

function decrementAmbulanceCount(id, decrementBy) {
  const hospitalNode = nodes.find((node) => node.id === id && node.isHospital == 1);

  if (hospitalNode) {
    hospitalNode.ambulancesAvailable -= decrementBy;

    // Ensure ambulance count is not negative
    if (hospitalNode.ambulancesAvailable < 0) {
      hospitalNode.ambulancesAvailable = 0;
    }
  }
}

function getAmbulanceCountAtHospital(hospitalId) {
  const hospital = nodes.find(node => node.id === hospitalId);

  if (hospital && hospital.isHospital === 1) {
    // Hospital found, return its ambulance count
    return hospital.ambulancesAvailable;
  } else {
    // Hospital not found or it's not a valid hospital node
    return 0; // You can choose to return some other value or handle the error differently
  }
}

function occupancy(result) {
  let a = result.pathLength / (result.numberOfNodes - 1);
  return a;
}
function getRandomValue() {
  return Math.random() * 0.9;
}

async function requestAmbulance(NodeId) {
  //Area requesting Ambulance
  const ambulanceRequested = NodeId;
  //Ambulance Dispatched From
  const nearestHospital = findNearestHospital(NodeId);

  if (nearestHospital === ambulanceRequested) {
    const nodesonSpecialCase = NodeId;
    const totalTime = (2 / 40) * 2 + 0.15;
    const totalDistance = 2;
    const arrivalTime = totalTime / 2;
    // const connectingNodes = NodeId;
    decrementAmbulanceCount(NodeId, 1);
    incrementAmbulanceCount(NodeId, 1);

    const card = document.createElement("card");
    card.innerHTML = `<div class="card">
  <div>
  <img src="ambulance.png" alt="ambulance">
  </div>
  <div id="pathcontainer">
  <div><h3>Hospital area:${nodesonSpecialCase}</h3>
  <p>Area along the path :</p>
  
       <p> ${nodesonSpecialCase}</p>
    
  
  
  </div >
  <div><h3>Requested area:${nodesonSpecialCase}</h3></h2>
  <p>Total time: ${totalTime}hours <br/> 
  Arrival Time: ${arrivalTime}hours<br/>
   Total Distance travelled: ${totalDistance}KM</p></div >
  
  </div > `
    const cardBody = document.getElementById('cardBody');
    cardBody.appendChild(card);


    const fiftynine = getAmbulanceCountAtHospital(59);
    document.getElementById('59').innerText = fiftynine;

    const sixteen = getAmbulanceCountAtHospital(16);
    document.getElementById('16').innerText = sixteen;
    const fiftythree = getAmbulanceCountAtHospital(53);
    document.getElementById('53').innerText = fiftythree;
    const fortynine = getAmbulanceCountAtHospital(49);
    document.getElementById('49').innerText = fortynine;
    const fortyone = getAmbulanceCountAtHospital(41);
    document.getElementById('41').innerText = fortyone;
    const sixtyseven = getAmbulanceCountAtHospital(67);
    document.getElementById('67').innerText = sixtyseven;
    const fiftyeight = getAmbulanceCountAtHospital(58);
    document.getElementById('58').innerText = fiftyeight;
    const ninetysix = getAmbulanceCountAtHospital(96);
    document.getElementById('96').innerText = ninetysix;
    const twentyfive = getAmbulanceCountAtHospital(25);
    document.getElementById('25').innerText = twentyfive;
    const seventyfour = getAmbulanceCountAtHospital(74);
    document.getElementById('74').innerText = seventyfour;
    const fiftyone = getAmbulanceCountAtHospital(51);
    document.getElementById('51').innerText = fiftyone;
    const sixetythree = getAmbulanceCountAtHospital(63);
    document.getElementById('63').innerText = sixetythree;



    var xValues = ["59", "16", "53", "49", "41", "67", "58", "96", "25", "74", "51", "63"];
    var yValues = [getAmbulanceCountAtHospital(59),
    getAmbulanceCountAtHospital(16),
    getAmbulanceCountAtHospital(53),
    getAmbulanceCountAtHospital(49),
    getAmbulanceCountAtHospital(41),
    getAmbulanceCountAtHospital(67),
    getAmbulanceCountAtHospital(58),
    getAmbulanceCountAtHospital(96),
    getAmbulanceCountAtHospital(25),
    getAmbulanceCountAtHospital(74),
    getAmbulanceCountAtHospital(51),
    getAmbulanceCountAtHospital(63)];
    var barColors = [
      "#b91d47",
      "#00aba9",
      "#2b5797",
      "#e8c3b9",
      "#1e7145",
      "#264653",
      "#2a9d8f",
      "#e9c46a",
      "#f4a261",
      "#e76f51",
      "#a2d2ff",
      "#ffafcc"
    ];

    new Chart("myChart", {
      type: "pie",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      },
      options: {
        title: {
          display: true,
          text: "Ambulance available at diffrent hospitals"
        }
      }
    });

    //chart for Occupancy Of Roads
    // var xValues = ["1", "2"];
    // var yValues = [50, 50];
    // var barColors = [
    //   "#b91d47",

    //   "#1e7145"

    // ];

    const occupied = getRandomValue();
    const unoccupied = 1 - occupied;

    var XValues = ["Percentage of Roads Occupied", "Percentage of Roads Not Occupied"];
    var YValues = [occupied, unoccupied];

    new Chart("occupancyOfRoads", {
      type: "pie",
      data: {
        labels: XValues,
        datasets: [{
          backgroundColor: barColors,
          data: YValues
        }]
      },
      options: {
        title: {
          display: true,
          text: "Traffic Density On Roads"
        }
      }
    });







  } else {

    decrementAmbulanceCount(nearestHospital, 1);
    const path = dijkstra(edges, ambulanceRequested, nearestHospital);
    // Total Distance Travelled 
    const completeDistanceTravelled = calculateCompleteDistance(path);
    // Total Time Taken
    const EstimatedTimeofops = calculateEstimatedTime(path, completeDistanceTravelled);

    //Estimated Time Of Arrival
    const estimatedTimeOfAmbulanceToarriveatLocation = calculateEstimatedTime(path, completeDistanceTravelled) / 2;

    const fiftynine = getAmbulanceCountAtHospital(59);
    document.getElementById('59').innerText = fiftynine;

    const sixteen = getAmbulanceCountAtHospital(16);
    document.getElementById('16').innerText = sixteen;
    const fiftythree = getAmbulanceCountAtHospital(53);
    document.getElementById('53').innerText = fiftythree;
    const fortynine = getAmbulanceCountAtHospital(49);
    document.getElementById('49').innerText = fortynine;
    const fortyone = getAmbulanceCountAtHospital(41);
    document.getElementById('41').innerText = fortyone;
    const sixtyseven = getAmbulanceCountAtHospital(67);
    document.getElementById('67').innerText = sixtyseven;
    const fiftyeight = getAmbulanceCountAtHospital(58);
    document.getElementById('58').innerText = fiftyeight;
    const ninetysix = getAmbulanceCountAtHospital(96);
    document.getElementById('96').innerText = ninetysix;
    const twentyfive = getAmbulanceCountAtHospital(25);
    document.getElementById('25').innerText = twentyfive;
    const seventyfour = getAmbulanceCountAtHospital(74);
    document.getElementById('74').innerText = seventyfour;
    const fiftyone = getAmbulanceCountAtHospital(51);
    document.getElementById('51').innerText = fiftyone;
    const sixetythree = getAmbulanceCountAtHospital(63);
    document.getElementById('63').innerText = sixetythree;

    // Returning the nodes from the path
    const AmbPath = takenPath(path).reverse()
    console.log('AmbPath---', AmbPath);
    const card = document.createElement("card");
    card.innerHTML = `<div class="card">
  <div>
  <img src="ambulance.png" alt="ambulance">
  </div>
  <div id="pathcontainer">
  <div><h3>Hospital node:${nearestHospital}</h3>
  <p>Area along the path :</p>
  ${AmbPath.map((element) =>
      `<div class="vl"id="path"><p>Area: ${element}</p></div>`
    )} 
  
  
  </div >
  <div><h3>Requested area:${ambulanceRequested}</h3></h2>
  <p>Total time: ${EstimatedTimeofops}hours <br/> 
  Arrival Time: ${estimatedTimeOfAmbulanceToarriveatLocation}hours<br/>
   Total Distance travelled: ${completeDistanceTravelled}KM</p></div >
  
  </div > `
    const cardBody = document.getElementById('cardBody');
    cardBody.appendChild(card);

    incrementAmbulanceCount(nearestHospital, 1);


    //chart for ambulance availiblity
    var xValues = ["59", "16", "53", "49", "41", "67", "58", "96", "25", "74", "51", "63"];
    var yValues = [getAmbulanceCountAtHospital(59),
    getAmbulanceCountAtHospital(16),
    getAmbulanceCountAtHospital(53),
    getAmbulanceCountAtHospital(49),
    getAmbulanceCountAtHospital(41),
    getAmbulanceCountAtHospital(67),
    getAmbulanceCountAtHospital(58),
    getAmbulanceCountAtHospital(96),
    getAmbulanceCountAtHospital(25),
    getAmbulanceCountAtHospital(74),
    getAmbulanceCountAtHospital(51),
    getAmbulanceCountAtHospital(63)];
    var barColors = [
      "#b91d47",
      "#00aba9",
      "#2b5797",
      "#e8c3b9",
      "#1e7145",
      "#264653",
      "#2a9d8f",
      "#e9c46a",
      "#f4a261",
      "#e76f51",
      "#a2d2ff",
      "#ffafcc"
    ];

    new Chart("myChart", {
      type: "pie",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      },
      options: {
        title: {
          display: true,
          text: "Ambulance available at diffrent hospitals"
        }
      }
    });

    //chart for Occupancy Of Roads
    // var xValues = ["1", "2"];
    // var yValues = [50, 50];
    // var barColors = [
    //   "#b91d47",

    //   "#1e7145"

    // ];

    const occupied = occupancy(path);
    const unoccupied = 1 - occupied;

    var XValues = ["Percentage of Roads Occupied", "Percentage of Roads Not Occupied"];
    var YValues = [occupied, unoccupied];

    new Chart("occupancyOfRoads", {
      type: "pie",
      data: {
        labels: XValues,
        datasets: [{
          backgroundColor: barColors,
          data: YValues
        }]
      },
      options: {
        title: {
          display: true,
          text: "Traffic Density On Roads"
        }
      }
    });



  }
}





