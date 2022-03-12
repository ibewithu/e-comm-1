import router from '@system.router';



export default {
    data: {
        val: 1
    },

    backHandler : function() {
        router.push({
            uri : "pages/index/index"
        })
    },

    incVal : function() {
        this.val = this.val<10 ? this.val+1 : 10
    },

    decVal : function() {
        this.val = this.val>0 ? this.val-1 : 0
    }
}

