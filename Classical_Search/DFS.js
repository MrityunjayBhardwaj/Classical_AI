// Depth first search

function DFS(){

    let callstack = [];
    let visited_list = [];

    let root = new Node;
    let goal = "New_York";

    search_dfs(root,goal,callstack,visited_list);

}

function search_dfs(curr_node,goal,callstack,visited_list){
/*

NOTE: this is a mixture of both the recusive(calling the function instead of using while loop) and the non-recursive algorithm (maintaining the stack part)
remove curr_node from stack; STACK = LIFO.
if (found the goal)return true;

else{

    find and put all the neighbours of curr_node in Stack
    go and search in its neighbour by poping the neighbours from stack and calling the search.

    }
 */
    curr_node.is_visited = true;
    callstack.pop();// poping out the current node from callstack

    if (callstack.length == 0){
        return null;
    }

    if (curr_node.lable == goal){
        print ("yey!! Found it");

        let finalpath = [];

        let search_curr_node = curr_node;

        while(search_curr_node.comingfrom != null){
            finalpath.push(search_curr_node);
            search_curr_node = search_curr_node.comingfrom;
        }

        return finalpath;
    }


    for (let i =0; i< curr_node.neighbours.length;i++){
        let curr_neigh = curr_node.neighbours[i];

        if (curr_neigh.is_visited)continue; // skip this iteration

        curr_neigh.comingfrom = curr_node;
        callstack.push(curr_neigh);
    }

    // after adding to callstack call the last node and search in it
    let next_node = callstack.pop();
    return search_dfs(next_node,goal,callstack,visited_list);

}

function dfs(v){
/**
 * take a starting point let it be "a"
 * function dfs(a){
 *      put "a"  in stack and make it isVisited = 1
 * 
 *      if (neihbours_unvisited.length > 0){
 *          pick a unvisited neighbour and let it be a_w
 *          dfs(a_w)
 *      }
 * }
 * then go and visit its neighbours(children) by calling dfs
 */

    v.is_visited = true;
    
    for (let i =0; i< v.neighbours.length;i++){
        let curr_neigh = curr_node.neighbours[i];

        if (!curr_neigh.is_visited)continue; // skip this iteration in-turn that node
        curr_neigh.comingfrom = curr_node;// register its parent. ( going to be useful for backtracking and other algorithms)

        dfs(curr_node)
    }
}

function findNodeInStack(v,Stack){
    for ( node in Stack){
        if (v == node)return true;
    }
    return false;
}

function findCycle(v,recStack){
//input: 
        // v : current vertex/Node to process.
    v.is_visited = true;
    recStack.push(v);
    
    for (let i =0; i< v.neighbours.length;i++){
        let curr_neigh = curr_node.neighbours[i];

        if (!curr_neigh.is_visited){ // skip this iteration in-turn that node
        curr_neigh.comingfrom = curr_node;// register its parent. ( going to be useful for backtracking and other algorithms)

        findCycle(curr_node,recStack);

        }
        else if (findNodeInStack(v,recStack)){// if we found child is also an ansistor (by looking it in recStack)
            // then we found the cycle
            return true;

        }
    }

    recStack.pop();
    return false;
}




function dfs_nonR(v){
    let S = []
    S.push(v)

    while (S.length > 0){
        let vert = S.pop();
        if (!vert.is_visited){

            vert.is_visited = true;

            for (let i =0; i< vert.neighbours.length;i++){
                let curr_neigh = curr_node.neighbours[i];

                if (curr_neigh.is_visited)continue; // skip this iteration in-turn that node
                S.push(curr_neigh);
                curr_neigh.comingfrom = curr_node;
            }
        }
    }
}

