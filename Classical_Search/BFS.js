/*
Special Thanks To Stuart J.Russel Peter Norvig for creating this beautiful Book.


BFS:
    in : tree
    out: search Path.
*/

// TOMORROW : FINISH BFS.


function BFS(){

     // cnode: gives me a node of the tree...
    // goal : name/lable of the node that we have to reach....

    // So traverse the tree in BFs using recursion....

    // making queue....
    let callq = []; // call queue..

    // Also making list stored explored nodes (so that we dont have to explore it again)
    let visited_list = [];

    let root = new Node;
    let goal = "vanice";

    let BFS_path = search(root,goal,callq,visited_list);

    /// DO whatever the fuck with this information

    return BFS_path;
}

let Node = {
    lable = "1",

    neighbours=[],
    isvisited = false,

    comingfrom= null,
}

function search(cnode,goal,callq,visited_list){

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

    // searching in its neighbours
    for(let i = 0; i<cnode.neighbours.length();i++){

        let curr_neigh = cnode.neighbours[i];

        if (cnode.isvisited == true)continue;

        // and remember the current node as comming from (usefull for backtracking)
        curr_neigh.comingfrom = cnode;
        // adding neighbours in Queue for exploration
        callq.push(curr_neigh);

    }

    if (callq.length() > 0){
        let firstin = callq.shift();// pop the first element from Queue.

        return search(firstin,goal,callq,visited_list);
   }
    else {
        return null
    }


    }