//This is how I would think the database would look like if all the elements of the menu are present.
//I unfortunately ran out of time to implement the data like this.
//Ideally I would also have ids for each item

let menu = {
    appetizers: [
            {name: "Iceberg Wedge Salad with House Cured Bacon", add_info: "tomato salsa gorgonzola", price: 7.50},
            {name: `Sautéed Shredded Brussels Sprouts`, add_info: `bacon hazelnuts gorgonzola` , price: 6.95},
            {name: `Kale Salad`, add_info: `parmesan crisp corn radish garlic-lemon vinaigrette `, price: 7.50},
            {name: `Pecan Crusted Utah Goat Cheese with Basil-Mint Pesto`, add_info: `grilled tomato salsa crostini`, price: 6.95},
            {name: `Chicken and Cabbage Eggrolls`, add_info: `hot & sour dipping sauce`, price: 6.95},
    ],
    entrees: [
            {name: `Farfalle Pasta with Braised Pork in Tomato Cream`, add_info: `capers butternut squash kale`, price: 12.95},
            {name: `Stout Braised Bratwurst`, add_info: ` horseradish mashed potatoes roasted root veggies grilled onion`, price: 13.95},
            {name: `Salmon & Crispy Tofu in Yellow Curry Sauce`, add_info: `vegetable sauté golden raisin chutney`, price: 15.95},
            {name: `Sesame Shrimp`, add_info: `udon noodles ramen broth shiitake mushrooms bean sprouts scallions`, price: 13.95},
            {name: `Chili Relleno`, add_info: `Stuffed with Jack Cheese & Corn Glazed Yam, Chayote Squash Succotash, Red Chili Sauce`, price: 9.95},
            {name: `Pepita Crusted Salmon with Chipotle Glaze`, add_info: `chevre whipped yams, jicama slaw, tomatillo sauce`, price: 10.95},
    ],
    sandwiches: {
            cold: {
                bread: [
                    {name: 'sourdough'},
                    {name: 'whole wheat'},
                    {name: 'rye'},
                ],
                prices: [
                    {type: 'half', price: 7.95},
                    {type: 'full', price: 9.25}
                ],
                choices: [
                    {name: 'turkey & avocado', add_info: 'tomato'},
                    {name: 'pub club', add_info: 'turkey, bacon, lettuce, tomato'},
                    {name: 'rare roast beef & swiss', add_info: 'swee-hot mustard, lettuce, red onion'},
                    {name: 'veggie', add_info: 'pepper jack, avocado, sprout, tomato'},
                ]
            },
            hot: {
                bread: [
                    {name: 'sourdough'},
                    {name: 'whole wheat'},
                    {name: 'chees & onion'},
                ],
                choices: [
                    {name: `Southwest Chicken Breast`, add_info: `Grilled Onion, Poblano Pepper, Tomato, Lettuce, Jack Cheese`, price: 9.50},
                    {name: `Portobello Fresh Mozzarella`, add_info: `Caramelized Onion, Roasted Pepper, Tomato, Field Greens, Basil Aioli`, price: 9.50},
                    {name: `Chipotle BBQ Pork Sandwich with Pickled Jalapeño Slaw`, add_info: ``, price: 9.50},
                    {name: `Bacon Burger*`, add_info: `Swiss, Lettuce, Tomato`, price: 9.25},
                    {name: `Mexi Burger*`, add_info: `Pepper Relish, Pepper Jack, Tomato, Lettuce, Guacamole`, price: 9.25},
                    {name: `Herb Marinated Top Sirloin*`, add_info: `Crimini Mushrooms, Caramelized Onion, Gorgonzola, Basil Aioli, Served Open Faced on Fococcia`, price: 10.95},
                    {name: `Roast Beef with Ancho Au Jus`, add_info: `Jack Cheese, Grilled Onions, Served on Crumb Bros. Baguette`, price: 9.75},
                    {name: `Blackened Catfish Creole`, add_info: `Peppers & Onions, Fresh Herb Aioli, Served on house made Sourdough`, price: 9.75},
                ]
            },
            options: {
                pick_one: [
                    {name: 'house salad'},
                    {name: 'green salad'},
                    {name: 'fresh fruit'},
                ],
                upgrade: {
                    price: 1.50,
                    choice: [
                        {name: '1/2 pasta salad'},
                        {name: 'french onion soup'},
                        {name: 'soup of the day'}
                    ]
                }
            },
        },
    soup_salads: {
            soup: {
                choice: ['french onion', 'soup of the day'],
                price: 4.95
            },
            combo: [
                {price: 7.25, choice: [
                    {name: 'small green salad'}, 
                    {name: 'fresh fruit'}, 
                    {name: 'house pasta'}
                ]},
                    {price: 8.75, choice: [
                    {name: 'half pasta of the day'}
                ]}
            ],
    },
    fajitas: {
            choices: {
                tortilla: [
                    {name: 'corn'},
                    {name: 'flour'}
                ],
                meat: [
                    {name: 'chicken', add_info: `Onions, Poblano and Bell Peppers, Guacamole, Two Salsas`},
                    {name: 'sirloin steak', add_info: `Onions, Poblano and Bell Peppers, Carrots, Onion, Guacamole, Two Salsas`}
                ]
            },
            price: 10.95,
            sides: [
                {name: 'red rice'}, 
                {name: 'black beans'}, 
                {name: 'grilled tomato salad'}
            ]
    },
    tacos: {
            choices: [
                {name: `Beer Battered Fish`, add_info: 'Jalapeño Remoulade, Roasted Salsa, Cabbage'},
                {name: `Carne Asada (marinated sirloin)`, add_info: `Guacamole, Tomatillo Salsa`},
                {name: `Citrus Marinated Chicken`, add_info: `Guacamole, Tomatillo Salsa`},
                {name: `Grilled Veggie`, add_info: `Zucchini, Yellow Squash, Bell Peppers, Onion, Guacamole, Tomatillo Salsa`},
            ],
            price: 9.95,
            sides: [
                {name: 'red rice'}, 
                {name: 'black beans'}, 
                {name: 'corn & romaine salad'}, 
                {name: 'tortilla chips'}
            ],
    },
    enchiladas: {
            choices: [
                {name: 'beef'},
                {name: 'chicken'}, 
                {name: 'cheese'}, 
                {name: 'veggie'}
            ],
            price: {
                uno: 8.50, 
                dos: 9.95,
                tres: 11.50
            },
            sides: [
                {name: `Southwestern Succotash`}, 
                {name: `Black Beans with Chipotle Crema`}
            ]
    },
    quiche: [
                {name: `Bacon, Swiss, Mushroom, Zucchini and Mushroom Quiche`, 
                pick_side: [
                    {name: `fresh fruit`}, 
                    {name: `green salad`}
                ], 
                price: 8.95}
            ],
    salads: [
            {name: `Grilled Red Trout`, add_info: ` Lentils, Tomatoes, Cukes, Green Beans, Red Bells, Almonds, Sundried Tomato Vinaigrette`, price: 10.95},
            {name: `Smoked Turkey`, add_info: `Cheese Tortellini, Bacon, Tomato, Cucumber, Egg, Black Bean-Corn Salsa, Avocado`, price: 9.95},
            {name: `Asian Grilled Chicken`, add_info: `Snow Peas, Carrot Slaw, Red Bells, Water Chestnut, Peanuts, Baby Corn, Cilantro, Cukes, Spicy Peanut Dressing`, price: 10.95},
            {name: `Southwest Grilled Chicken`, add_info: `Tomato, Guacamole, pepitas, Jicama, Corn & Black Bean Salsa, Orange Wedges, Spicy Citrus Vinaigrette`, price: 10.50},
            {name: `Mediterranean Italian`, add_info: `Sausage, Artichoke Hearts, Green Beans, Roma Tomato, Kalamatas, Red Onion, Cucumber, Croutons, Parmesan, Fresh Mozzarella, Gorgonzola Vinaigrette`, price: 9.95},
            {name: `Grilled Salmon`, add_info: `Artichoke tapenade, shredded kale, corn, radish, parmesan crisps`, price: 11.50},
    ]
}

module.exports = menu;