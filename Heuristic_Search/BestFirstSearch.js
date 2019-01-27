// Best First Search ( its greedy!)

// Exactly equals to UCS but instead of using G to calculate the cost it usese f
// i.e, G_cost = cost from start_node to current_node;
// i.e, F_cost derived from evaluation function = cost from this current_node to the goal_node


// import UCS

function evaluation_func(curr_node,goal_node){

    // Using L2 norm a.k.a euclideon distance

   let x_dist = (curr_node.coords[0] - goal_node.coords[0]);
   let y_dist = (curr_node.corrds[1] - goal_node.coords[1]);

   return (x_dist**2 + y_dist**2)**(0.5);
}

function BestFirstSearch(inp_graph){
    // calculate the cost for all the node in the inp_graph

    // please note that its just a mathematical representation
    //and the f and g both are just numbers which can be initialized randomly

    for (let i =0; i< inp_graph.length;i++){
        let curr_node = inp_graph[i];
        let curr_cost = evaluation_func(curr_node);
        curr_node.cost = curr_cost;
    }
    return UCS();

}