const app = Vue.createApp({
    data(){
        return{
            title: "Contador App",
            count: 0,
        };
    },
    methods: {
        /* disCount(){
            this.count -= 1;
            Console.log("dis"); 
        },
        addCount(){
            this.count += 1;
            console.log("add"); */
            modCount(instruction = "add", limit = 1){
                if(instruction === 'dis') this.count -= limit;
                else this.count += limit;
            },
            
        }, 
});