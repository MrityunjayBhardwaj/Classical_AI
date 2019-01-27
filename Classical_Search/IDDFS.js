// Iterative deepning depth first search:-

// Import dls and iteratively change the depth limit. upto a certain threshold (or upto inf. if you want)

function IDFS(threshold){

    for(let i =0;i<threshold;i++){
        let result = DLS(i);
        if (result != false)return result;
    }
}

