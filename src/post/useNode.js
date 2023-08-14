const useNode = () => {

    const insertNode = function(tree, commentId, item) {
        if (tree.id === commentId){
            tree.items.push({
                id_comment: new Date().getTime(),
                content: item,
                items: []
            });
            return tree;
        }
    };
    const editNode = function(tree, commentId, value) {};
    const deleteNode = function(tree, id) {};
    return {insertNode, editNode, deleteNode}
};

export default useNode;
