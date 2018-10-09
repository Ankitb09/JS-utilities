function getElementsByClassName(className) {
    let nodes = [];
    function findNodes(node) {
        for (var i = 0; i < node.childNodes.length; i++) {
            if(node.childNodes[i].nodeType==1 && node.childNodes[i].classList.contains(className)){
                nodes.push(node.childNodes[i])
            }
            if(node.childNodes[i].childNodes.length>0){
                findNodes(node.childNodes[i])
            }

        }
    }
    findNodes(document);
    return nodes
}


module.exports = getElementsByClassName;