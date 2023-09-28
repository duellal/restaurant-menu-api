let { buildSchema } = require('graphql')

let schema = buildSchema(`
    type Sides {
        name: String!
    }

    interface Dish {
        name: String!, 
        add_info: String
    }

    type DishPrice implements Dish {
        name: String!,
        add_info: String, 
        price: Int!,
    }

    type QuicheDish implements Dish {
        name: String!,
        add_info: String, 
        pick_side: [Sides!]!,
        price: Int!
    }

    type ColdPrice {
        type: String!,
        price: Int!
    }

    type FajitaChoice {
        tortilla: [Sides!]!,
        meat: [Dish!]!
    }

    type ComboPrice {
        price: Int!,
        choice: [Sides!]!
    }

    type Upgrades {
        price: Int!,
        choice: [Sides!]!
    }

    type Cold {
        bread: [Sides!]!,
        prices: [ColdPrice!]!,
        choices: [Dish]
    }

    type Hot {
        bread: [Sides!]!,
        choices: [Dish!]!, 
    }

    type Options {
        pick_one: [Sides!]!,
        upgrade: Upgrades!
    }

    type Soup {
        choice: [String!]!,
        price: Int!
    }

    type Combo {
        price: Int!, 
        choice: [Sides!]!
    }

    type EnchPrice {
        uno: Int!, 
        dos: Int!,
        tres: Int!
    }
    
    type Query {
        appetizers: [Dish!]!,
        entrees: [Dish!]!,
        sandwiches: {cold: Cold!, hot: Hot!, options: Options!},
        soup_salads: {soup: Soup!, combo: [Combo!]!},
        fajitas: {choices: FajitaChoices!, price: Int!, sides: [Sides!]!},
        tacos: {choices: [Dish!]!, price: Int!, sides:[Sides!]!},
        enchiladas: {choices: [Dish!]!, price: EnchPrice!, sides: [Sides!]!},
        quiche: [Dish!]!,
        salads: [Dish!]!
    }
`)

module.exports.typeDefs = schema;