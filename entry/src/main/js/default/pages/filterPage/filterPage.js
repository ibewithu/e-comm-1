import router from '@system.router';



export default {
    data: {
        title: 'World'
    },


    backHandler : function() {
        router.push({
            uri : "pages/index/index"
        })
    },
}
