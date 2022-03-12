import router from '@system.router';


export default {

    data: {
        brandName: "E-comm",
    },


    clickHandler : function(){
        this.category = "current-category";
    },

    detailHandler : function() {
        router.push({
            uri:"pages/itemDetail/itemDetail"
        });
    },

    filterHandler : function() {
        router.push({
            uri:"pages/filterPage/filterPage"
        })
    }
}

