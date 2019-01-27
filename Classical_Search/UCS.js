// Uniform cost search


// its just like BFS but it maintains priority queue
// which prioritize based on the shallowest path cost...


// The cost of the nodes is calculate based on the distance from the stating node to that node.

function g_func(curr_node,start_node){

    // Using L2 norm a.k.a euclideon distance

   let x_dist = (curr_node.coords[0] - start_node.coords[0]);
   let y_dist = (curr_node.corrds[1] - start_node.coords[1]);

   return (x_dist**2 + y_dist**2)**(0.5);
}

function update_cost(node){
    // calculate the cost from the start node to this node
    let curr_search_node = node.comingfrom;
    let newcost = 0;

    while(curr_search_node.comingfrom != NULL){
       newcost += curr_search_node.cost
       curr_search_node =  curr_search_node.comingfrom// goto its parent
    }
    return newcost;
}

function UCS(inp_graph){

     // cnode: gives me a node of the tree...
    // goal : name/lable of the node that we have to reach....

    // So traverse the tree in BFs using recursion....

    for (let i =0; i< inp_graph.length;i++){
        let curr_node = inp_graph[i];
        let curr_cost = g_func(curr_node);
        curr_node.cost = curr_cost;
    }
    // making queue....
    let callpq = []; // call priority queue..

    // Also making list stored explored nodes (so that we dont have to explore it again)
    let visited_list = [];

    let root = new Node;
    let goal = "vanice";

    let UCS_path = search_ucs(root,goal,callq,visited_list);

    /// DO whatever the fuck with this information

    return BFS_path;
}

let Node = {
    lable = "1",

    neighbours=[],
    isvisited = false,

    comingfrom= null,
}

function search_ucs(cnode,goal,callq,visited_list){

    if (cnode.lable == goal ){
    // give me the track from starting node to that node...

        let finalpath = [];

        let search_curr_node = cnode;

        while(search_curr_node.comingfrom != null){
            finalpath.push(search_curr_node);
            search_curr_node = search_curr_node.comingfrom;
        }

        return finalpath;
    }


    // set the current node AS visited and put it into the visisted_list
    cnode.isvisited = true;
    visited_list.push(cnode);

    // searching in its neighbours and add the smallest cost path to priority.

    for(let i = 0; i<cnode.neighbours.length();i++){

        let curr_neigh = cnode.neighbours[i];

        if (cnode.isvisited == true){

            for (let i=0; i<callq.length;i++){
                if (callq[i] == cnode){
                    curr_neigh.cost = update_cost(curr_neigh);// update_cost calculate the new cost of this node
                }
            }
            continue
        }

// also update the cost if it is already visited and the new path cost is smaller then the previous version

        // and remember the current node as comming from (usefull for backtracking)
        curr_neigh.comingfrom = cnode;
        // adding neighbours in Queue for exploration
        callq.push(curr_neigh);

    }

    if (callq.length() > 0){

        let new_sorted = callq;
        // Sort the callq based on there cost
        for (let i =0; i< callq.length; i++){
            let curr_node_i = callq[i];

            for(let j =0;j<callq.length;j++){
                let curr_node_j = callq[j];

                if (curr_node_j.cost < curr_node_i.cost){
                    // swap'em
                    let tmp = curr_node_i;
                    new_sorted[i] = curr_node_j;
                    new_sorted[j] = curr_node_i;
                }
            }
        }

        let firstin = callq.shift();// pop the first element from Queue.

        return search_ucs(firstin,goal,callq,visited_list);
   }
    else {
        return null
    }


    }
