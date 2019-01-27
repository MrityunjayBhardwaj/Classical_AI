//Depth limited search

function DLS(depth_limit){

    let callstack = [];
    let visited_list = [];

    let root = new Node;
    let goal = "New_York";

    let cdepth = 0;

    search_dls(root,goal,callstack,visited_list,depth_limit,cdepth);

}


function search_dls(curr_node,goal,callstack,visited_list,dlimit,cdepth){
/*
remove curr_node from stack; STACK == LIFO.
if (found the goal)return true;

else{

    find and put all the neighbours of curr_node in Stack
    go and search in its neighbour by poping the neighbours from stack and calling the search.

    }
 */

    // if the search exceeds the depth limit then return failure
    if (cdepth > dlimit)return false;

    cdepth++;// increment current depth;



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
    return search_dls(next_node,goal,callstack,visited_list,dlimit,cdepth);

}