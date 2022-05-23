const port = 8080
const credits = "Callum"
const menuItems = [
    "spicy olives",
    "breadsticks",
    "soup",
    "garlic bread",
    "pitta chips",
    "nut bowl",
    "halloumi",
    "wings", // 7
    "drumsticks",
    "breast fillets",
    "fried piri drumsticks",
    "fried piri fillets",
    "toastie",
    "thigh burger",
    "breast burger",
    "classic wrap",
    "caeser wrap", // 16
    "chicken caeser", // 17
    "mango & avocado",
    "greek", // 19
    "icecream",
    "piri spiced brownie",
    "toffee cheesecake",
    "pancake",
    "fries",
    "wedges",
    "milkshake",
    "coffee",
    "tea",
    "hot chocolate"
];

const recipes = {
    "spicy olives": "Mixed Herbs + Olives",
    "breadsticks": "Breadsticks",
    "Soup": "Soup Maker",
    "garlic bread": "Raw Garlic Bread goes into Oven",
    "pitta chips": {
        "chilli jam": "Pitta Chips + Chilli Jam",
        "mango jam": "Pitta Chips + Mango Jam"
    },
    "halloumi": "Raw Halloumi cookied in Fryer + Chilli Jam",
    "chicken": {
        "wings": "Raw Chicken Wings go into Oven + Spice",
        "drumsticks": "Raw Chicken Drumsticks go into Oven + Spice",
        "fillets": "Raw Chicken Breasts go into Oven + Spice",
        "fried drumsticks": "Raw Drumsticks go onto Grill + Spice",
        "fried fillets": "Raw Fillets go onto Grill + Spice",
        "toastie": "Bread goes onto Toaster + Raw Chicken Breast goes onto Grill + Spice",
        "thigh burger": "Raw Chicken Thigh goes into Oven + Spice + Bun",
        "breast burger": "Raw Chicken Breast goes into Oven + Spice + Bun",
        "classic wrap": "Raw Chicken Breast goes into Oven + Spice + Mixed Herbs + Chopped Lettuce + Chopped Avocado + Wrap",
        "caeser wrap": "Raw Chicke Breat goes into Oven + Spice + Mixed Herbs + Chopped Lettuce + Chopped Avocado + Wrap + Caeser Dressing"
    },
    "salad": {
        "chicken caeser": "Raw Chicken Breast goes into Oven + Chopped Lettuce + Chopped Tomato + Chopped Cucumber + Caeser Dressing",
        "mango & avocado": "Chopped Lettuce + Chopped Tomato + Chopped Cucumber + Chopped Avocado + Mango & Lime Spice",
        "greek": "Chopped Lettuce + Chopped Tomato + Chopped Cucumber + Olives + Feta Cheese"
    },
    "icecream": {
        "toffee apple": "Toffee Apple Ice Cream",
        "strawberry & cream": "Strawberry & Cream Ice Cream",
        "vanilla": "Vanilla Ice Cream",
        "passion fruit": "Passion Fruit Ice Cream",
        "chocolate": "Chocolate Ice Cream"
    },
    "brownie": "Brownie goes into Microwave + Vanilla IC",
    "sticky toffee": "Pudding Cup goes into Microwave + Vanilla IC",
    "toffee cheesecake": "Toffee Cheesecake",
    "pancake": {
        "plain": "Pancake Batter goes onto Pan",
        "lemon & sugar": "Pancake Batter goes onto Pan + Chopped Lemon + Sugar",
        "nutella": "Pancake Batter goes onto Pan + Nutella",
        "sugar": "Pancake Batter goes onto Pan + Sugar"
    },
    "fries": "Chopped Potato + Fryer",
    "wedges": "Chopped Potato + Oven",
    "milkshake": {
        "chocolate": "Plain IC and Ice goes into Blender + Chocolate (Brown) Syrup",
        "vanilla": "Plain IC and Ice goes into Blender + Vanilla (White) Syrup",
        "banana": "Plain IC and Ice goes into Blender + Banana (Yellow) Syrup",
        "strawberry": "Plain IC and Ice goes into Blender + Strawberry (Pink) Syrup"
    },
    "coffee": "Cup + Coffee Machine",
    "tea": "Hot Water (Kettle) + Tea Leaves (Green)",
    "hot chocolate": "Hot Water (Kettle) + Hot Chocolate Powder (Brown)"
}

export {
    port,
    credits,
    menuItems,
    recipes
}