const nodes = [
    { id: 1, isHospital:1, hospitalName: "", ambulancesAvailable: 0},
    { id: 2, isHospital:1, hospitalName: "", ambulancesAvailable: 0},
    { id: 3, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 4, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 5, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 6, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 7, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 8, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 9, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 10, isHospital:0, hospitalName: "", ambulancesAvailable: 0},
    { id: 11, isHospital:0, hospitalName: "", ambulancesAvailable: 0},
    { id: 12, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 13, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 14, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 15, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 16, isHospital:1, hospitalName: "Santokh Hospital", ambulancesAvailable: 24 },
    { id: 17, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 18, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 19, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 20, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 21, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 22, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 23, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 24, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 25, isHospital:1, hospitalName: "Max Super Specialty Hospital", ambulancesAvailable: 25 },
    { id: 26, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 27, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 28, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 29, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 30, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 31, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 32, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 33, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 34, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 35, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 36, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 37, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 38, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 39, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 40, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 41, isHospital:1, hospitalName: "Healing Hospital- Best Super Speciality Hospital in Chandigarh", ambulancesAvailable: 23 },
    { id: 42, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 43, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 44, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 45, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 46, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 47, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 48, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 49, isHospital:1, hospitalName: "Harmony Hospital", ambulancesAvailable: 12 },
    { id: 50, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 51, isHospital:1, hospitalName: "IVY Hospital Mohali", ambulancesAvailable: 25 },
    { id: 52, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 53, isHospital:1, hospitalName: "Landmark Hospital", ambulancesAvailable: 14 },
    { id: 54, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 55, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 56, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 57, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 58, isHospital:1, hospitalName: "Dhawan Hospital", ambulancesAvailable: 11 },
    { id: 59, isHospital:1, hospitalName: "Command Hospital", ambulancesAvailable: 16 },
    { id: 60, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 61, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 62, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 63, isHospital:1, hospitalName: "Fortis Hospital Mohali", ambulancesAvailable: 17 },
    { id: 64, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 65, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 66, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 67, isHospital:1, hospitalName: "Eden Critical Care Hospital", ambulancesAvailable: 10 },
    { id: 68, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 69, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 70, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 71, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 72, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 73, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 74, isHospital:1, hospitalName: "Park Hospital", ambulancesAvailable: 12 },
    { id: 75, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 76, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 77, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 78, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 79, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 80, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 81, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 82, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 83 , isHospital:0, hospitalName: "", ambulancesAvailable: 0},
    { id: 84, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 85, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 86, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 87, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 88, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 89, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 90, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 91, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 92, isHospital:0, hospitalName: "", ambulancesAvailable: 0 },
    { id: 93 , isHospital:0, hospitalName: "", ambulancesAvailable: 0},
    { id: 94 , isHospital:0, hospitalName: "", ambulancesAvailable: 0},
    { id: 95 , isHospital:0, hospitalName: "", ambulancesAvailable: 0},
    { id: 96, isHospital:1, hospitalName: "Alchemist Hospital Panchkula", ambulancesAvailable: 25 },
];

// Define edges between nodes with traffic density
// Initialize an empty edges array
// Initialize an empty edges array

let edgecount = 0;


const edges = [];

for (let row = 1; row <= 12; row++) {
    for (let col = 1; col <= 8; col++) {
        const nodeId = (col - 1) * 12 + row;

        // Calculate the node IDs of potential neighbors
        const leftNeighborId = nodeId - 1; //  left  
        const rightNeighborId = nodeId + 1;  // right 
        const topNeighborId = nodeId - 12;   // top
        const bottomNeighborId = nodeId + 12;  // bottom

        // Generate random traffic densities between 0 and 0.9
        const topTrafficDensity = Math.random() * 0.9;
        const bottomTrafficDensity = Math.random() * 0.9;
        const leftTrafficDensity = Math.random() * 0.9;
        const rightTrafficDensity = Math.random() * 0.9;

        // Check and add edges to the left, right, top, and bottom if they exist
        if (row > 1) {
            edges.push({ from: nodeId, to: leftNeighborId, trafficDensity: topTrafficDensity });
            
            edges.push({ from: leftNeighborId, to: nodeId, trafficDensity: topTrafficDensity }); // Add the reverse edge
            edgecount = edgecount+2;
        }
        if (row < 12) {
            edges.push({ from: nodeId, to: rightNeighborId, trafficDensity: bottomTrafficDensity });
            edges.push({ from: rightNeighborId, to: nodeId, trafficDensity: bottomTrafficDensity }); // Add the reverse edge
            edgecount = edgecount+2;
        }
        if (col > 1) {
            edges.push({ from: nodeId, to: topNeighborId, trafficDensity: leftTrafficDensity });
            edges.push({ from: topNeighborId, to: nodeId, trafficDensity: leftTrafficDensity }); // Add the reverse edge
            edgecount = edgecount+2;
        }
        if (col < 8) {
            edges.push({ from: nodeId, to: bottomNeighborId, trafficDensity: rightTrafficDensity });
            edges.push({ from: bottomNeighborId, to: nodeId, trafficDensity: rightTrafficDensity }); // Add the reverse edge
            edgecount = edgecount+2;
        }
    }
}
console.log(edgecount);


// Function to find the nearest hospital node to the requested node
function findNearestHospital(requestedNodeId) {
    let nearestHospitalNode = null;
    let shortestDistance = Infinity;

    for (const node of nodes) {
        if (node.isHospital && node.ambulancesAvailable > 0) {
            const distance = getShortestPathDistance(requestedNodeId, node.id);
            if (distance < shortestDistance) {
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
                const potentialDistance = distances[currentNodeId] + edge.trafficDensity;
                if (potentialDistance < distances[edge.to]) {
                    distances[edge.to] = potentialDistance;
                }
            }
        }
    }

    return distances[endNodeId];
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
  
  
  
  const startNode = 1;
  const endNode = 19; 

  const result = dijkstra(edges, startNode, endNode);
  
  console.log("Shortest Path:", result.shortestPath);
  console.log("Number of Nodes in Path:", result.shortestPath.length);
  console.log("Combined Cost of Travel:", result.pathLength);