let resolvers = {
    Query: {
        appetizers: (obj, args, context, info) => {
            return context.appetizers
        },
        entress: (obj, args, context, info) => {
            return context.entrees
        },
        sandwiches: (obj, args, context, info) => {
            return context.sandwiches
        },
        soup_salads: (obj, args, context, info) => {
            return context.soup_salads
        },
        fajitas: (obj, args, context, info) => {
            return context.fajitas
        },
        tacos: (obj, args, context, info) => {
            return context.tacos
        },
        enchiladas: (obj, args, context, info) => {
            return context.enchiladas
        },
        quiche: (obj, args, context, info) => {
            return context.quiche
        },
        salads: (obj, args, context, info) => {
            return context.salads
        }
    },

    Dish: (obj, args, context, info) => {
        console.log(`Obj:`, obj, `args:`, args, `context:`, context, `info:`, info)
            if(context.price){
                return `DishPrice`
            }
            else if(context.pick_side){
                return `QuicheDish`
            }
           return `Dish`
        },
}

module.exports = resolvers;