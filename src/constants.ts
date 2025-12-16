
import type { MenuCategory, SocialLink, Review, GalleryImage } from './types';

export const APP_NAME = "Colton's Social House";
export const TAGLINE = "A SOCIALLY THERAPEUTIC EXPERIENCE";
export const SUB_TAGLINE = "eat fresh • drink craft • be social";

export const CONTACT_INFO = {
  address: "1150 Shaw Avenue • Clovis, CA, 93612",
  phonePrimary: "(559) 721-6655",
  phoneSecondary: "(559) 472-3427",
  email: "CSH@ColtonsSocialHouse.com",
  hours: "7 Days / Week — 11:00 AM – Midnight"
};

export const MENU_DATA: MenuCategory[] = [
  {
    title: "SOCIABLES",
    note: "Appetizers & Shareables",
    items: [
      { name: "CHIPS & SALSA", price: "$10", description: "House seasoned corn tortilla chips & roasted salsa. Add classic queso w/ pico (+$3.50) or fresh guac (+$6).", tags: ['vegetarian'] },
      { name: "DEVILED EGGS", price: "$12", description: "Panko crusted & fried w/ hickory bacon, scallion & paprika. Available traditional or ½ & ½." },
      { name: "SOCIAL WINGS", price: "$16 | $23", description: "Bone-in chicken wings. Choice of Thai Chili, Creamy Buffalo, or Ají Verde. (8 for $16 | 12 for $23)" },
      { name: "ZUCCHINI CHIPS", price: "$13", description: "Thick-cut & tempura panko battered, parmesan, w/ chipotle ranch.", tags: ['vegetarian'] },
      { name: "ATOMIC POPPERS", price: "$15", description: "Roasted jalapeño, creamy ghost pepper & colby jack cheese, hickory bacon-wrapped, w/ serrano aioli.", tags: ['spicy'] },
      { name: "PHO-NOMENAL DUMPLINGS", price: "$15", description: "Pan-seared pho dumplings w/ portobello mushroom, tofu & vegetable dumpling, sesame ginger sauce, sesame seed, scallion.", tags: ['vegetarian'] },
      { name: "DATE NIGHT BRUSSELS", price: "$15", description: "Crispy honey butter glazed brussels sprouts, Medjool dates, blue cheese crumble, balsamic glaze, crispy shallots, parsley. Add hickory bacon (+$2).", tags: ['vegetarian'] },
      { name: "MOZZARELLA VESUVIO", price: "$16.50", description: "Creamy mozzarella–ricotta, San Marzano arrabbiata sauce, roasted red pepper & artichoke tapenade, fresno chili, chili thread, basil, garlic butter toasted focaccia.", tags: ['vegetarian', 'spicy'] },
      { name: "QUESABIRRIA EGG ROLLS", price: "$18.50", description: "Adobo shredded barbacoa beef, mozzarella, onion, cilantro, w/ spicy chile de árbol salsa, adobo consomé & lime.", tags: ['spicy'] },
      { name: "CHILI VERDE NACHOS", price: "$20", description: "House chili verde w/ pork, white cheddar & pasilla queso, colby jack, pickled jalapeño, pico de gallo, avocado aioli, cilantro lime cream, fresh seasoned corn tortilla chips." }
    ]
  },
  {
    title: "SOUPS & GREENS",
    items: [
      { name: "CLAM CHOWDER", price: "$6 | $12", description: "Loaded w/ clams, red potatoes, bacon, onion, celery, carrots, cream, & herbs. Sourdough bread bowl (+$3)." },
      { name: "FRENCH ONION SOUP", price: "$6 | $12", description: "Caramelized onion, shallot, thyme, beef broth, garlic butter focaccia w/ Gruyère. Sourdough bread bowl (+$3)." },
      { name: "HOUSE SALAD", price: "$10", description: "Spring mixed greens, cherry tomato, cucumber, shredded carrot, focaccia crouton, cracked pepper, tossed w/ lemon vinaigrette.", tags: ['vegetarian'] },
      { name: "CAESAR SALAD", price: "$10 | $14", description: "Chopped romaine heart, focaccia croutons, fresh parmesan, cracked pepper, tossed w/ creamy garlic caesar dressing.", tags: ['vegetarian'] },
      { name: "STRAWBERRY FIELDS", price: "$16", description: "Spinach, spring mixed greens, house champagne vinaigrette, fresh strawberry, candied pecan, dried cranberry, feta.", tags: ['vegetarian'] },
      { name: "BREAKING THE ICE WEDGE", price: "$17", description: "Iceberg lettuce, blue cheese dressing, hickory bacon, blue cheese crumble, cherry tomato, pickled red onion, scallion, cracked black pepper, balsamic glaze." },
      { name: "AVO THE TOP COBB", price: "$20", description: "Chopped romaine heart, avocado ranch, chilled grilled chicken, hickory bacon, cherry tomato, hard-boiled egg, blue cheese crumble, cucumber, avocado, cracked pepper. Add-ons: Grilled chicken ($8), Jumbo shrimp ($11), Salmon ($15), Flank steak ($15)." }
    ]
  },
  {
    title: "HANDHOLDERS",
    items: [
      { name: "THE MUSTARD BIRD", price: "$22", description: "Grilled chicken, provolone, hickory bacon, avocado, green leaf, tomato, crispy onion straw, dijon garlic aioli, garlic butter grilled pretzel bun, w/ beer battered fries." },
      { name: "PERI PERI CRUNCH", price: "$21", description: "Spicy crispy fried chicken, pepper jack, creamy peri peri sauce, lemon herb slaw, garlic butter grilled brioche bun.", tags: ['spicy'] },
      { name: "DRUNKEN HOG", price: "$20", description: "Smoked pulled pork, honey-chipotle BBQ sauce, house cheddar & gruyère beer cheese, pickled jalapeño, garlic butter toasted pretzel bun, w/ grilled kielbasa." },
      { name: "BRISKET FRENCH DIP", price: "$24", description: "Smoked & shredded brisket, caramelized french onion, provolone, garlic butter toasted sourdough baguette, w/ au jus, dijon garlic aioli & beer battered fries." },
      { name: "SANTORINI STEAK", price: "$26", description: "Grilled flank steak, gruyère, roasted red pepper & artichoke tapenade, citrus arugula, cracked black pepper, garlic butter grilled sourdough baguette." },
      { name: "MARGHERITA FLATBREAD", price: "$15", description: "Garlic herb oil, hand-crushed San Marzano tomato sauce, mozzarella, parmesan, basil.", tags: ['vegetarian'] },
      { name: "TACOS DE GUAJILLO (3)", price: "$22", description: "Barbacoa de guajillo, pickled red onion, feta, cilantro, corn tortilla, spicy chile de árbol salsa, lime wedges.", tags: ['spicy'] },
      { name: "TACOS DE CAMARÓN BAJA (3)", price: "$28", description: "Tequila-citrus sautéed shrimp, lemon herb slaw, pico de gallo, cilantro, corn tortilla, chipotle ranch, lime wedges." }
    ]
  },
  {
    title: "CRAFT BURGERS",
    note: "Served on a Garlic Butter Grilled Brioche Bun with Beer Battered Fries and Colton's Sauce.",
    items: [
      { name: "THE QUARTER HOUSE", price: "$15.50", description: "¼ lb, American cheese, caramelized french onion, green leaf, tomato, pickle, Colton's sauce." },
      { name: "COLTON'S CLASSIC", price: "$18.50", description: "½ lb, American cheese, green leaf, tomato, red onion, pickle, Colton's sauce." },
      { name: "THE SMASH", price: "$22.50", description: "½ lb, Provolone, Avocado Smash, hickory bacon, crispy onion straw, avocado ranch, green leaf, tomato, red onion." },
      { name: "CLOVIS RODEO BURGER", price: "$21.50", description: "½ lb, cheddar cheese, applewood bacon, smoked pulled pork, honey chipotle BBQ sauce, chipotle aioli, beer battered onion-ring, green leaf, tomato." },
      { name: "FOUR-ALARM", price: "$21.50", description: "½ lb, firestarter cheese blend, fried jalapeño coins, serrano aioli, green leaf, tomato, pickled red onion, w/ Atomic Popper jalapeño.", tags: ['spicy'] },
      { name: "DR. BBQ", price: "$23.50", description: "½ lb, Gruyère, hickory bacon, smoked & shredded brisket, Carolina Gold BBQ sauce, roasted poblano, cheddar mac 'n' cheese, dijon garlic aioli." }
    ]
  },
  {
    title: "HOUSE PLATES",
    items: [
      { name: "BLACK GARLIC FETTUCCINE", price: "$22", description: "Fettuccine, black garlic cream sauce, parmesan, lemon zest, cracked black pepper, parsley.", tags: ['vegetarian'] },
      { name: "RIGATONI ARRABBIATA", price: "$25", description: "Rigatoni, San Marzano arrabbiata sauce, Italian sausage, parmesan, parsley, chili thread.", tags: ['spicy'] },
      { name: "KUNG PAO SHRIMP", price: "$28", description: "Sautéed shrimp, rice noodles, kung pao cashew sauce, red bell pepper, garlic, scallion, roasted cashew, sesame seed.", tags: ['spicy'] },
      { name: "BANGKOK QUARTER", price: "$28", description: "Roasted chicken leg quarter, Thai chili sauce, scallion, sesame seed, bacon fried rice, blistered green beans." },
      { name: "TANDOORI-SPICED CHICKEN", price: "$30", description: "Tandoori-spiced chicken, ají verde, roasted cashew, cilantro, savory yellow rice, cucumber salad, garlic butter flatbread.", tags: ['spicy'] },
      { name: "OFF THE HOOK FISH & CHIPS", price: "$23", description: "(3) Colton's house beer battered haddock tender, w/ grilled lemon, tartar & beer battered fries." },
      { name: "SALMON FLORENTINE", price: "$34", description: "Herb grilled salmon, mushroom & spinach risotto, lemon florentine sauce, parsley." },
      { name: "PORCINI-CRUSTED RIBEYE", price: "$58", description: "16oz bone-in & porcini-crusted choice cowboy ribeye, sea salt, black garlic butter, parsley, sautéed mushrooms, beer-battered fries or loaded baked potato." }
    ]
  },
  {
    title: "ENHANCERS (Sides)",
    items: [
      { name: "BEER BATTERED FRIES", price: "$7.50" },
      { name: "PARMESAN FRIES", price: "$9.50", description: "w/ Truffle Ranch" },
      { name: "SWEET POTATO FRIES", price: "$8.50" },
      { name: "BEER BATTERED ONION RINGS", price: "$8.50" },
      { name: "SHOE-STRING FRIES", price: "$8.50" },
      { name: "BLISTERED GREEN BEANS", price: "$8" },
      { name: "MUSHROOM & SPINACH RISOTTO", price: "$12" },
      { name: "LOADED BAKED POTATO", price: "$10" }
    ]
  },
  {
    title: "SWEET INDULGENCES",
    items: [
      { name: "OG CHEESECAKE", price: "$12", description: "Classic cheesecake, graham cracker crust, whipped cream." },
      { name: "PUMPKIN BUTTER CAKE", price: "$15", description: "Gooey pumpkin butter cake, brûléed powdered sugar, pumpkin spice caramel." },
      { name: "S'MORES TART", price: "$13", description: "Graham cracker crust, brûléed marshmallow, dark chocolate ganache, sea salt, caramel." },
      { name: "BLACK & BLUE CRISP", price: "$13", description: "Baked blackberry & blueberry, sugar & oats crisp topping." },
      { name: "WHITE LOTUS PANOOKIE", price: "$16", description: "White chocolate chip & cookie butter panookie, sea salt, vanilla ice cream, cookie butter caramel, whipped cream." },
      { name: "ICE CREAM SCOOP", price: "$5.50 - $6.50", description: "Vanilla or Cookies & Cream." }
    ]
  },
  {
    title: "LIL' SESSIONS (Kids)",
    items: [
      { name: "MELT DOWN", price: "$10", description: "Grilled cheese sandwich w/ fries." },
      { name: "CRUNCH TIME", price: "$12", description: "(2) Chicken tenders w/ fries." },
      { name: "MAC ATTACK", price: "$11", description: "Elbow pasta w/ creamy cheddar sauce w/ fries." },
      { name: "ONE STICK WONDER", price: "$10", description: "Corn dog w/ fries." },
      { name: "CHEESY DOES IT", price: "$10", description: "Wood-fired flatbread cheese pizza." },
      { name: "THE BIG MOO-D", price: "$13", description: "¼ lb Angus burger w/ fries." }
    ]
  },
  {
    title: "CRAFT COCKTAILS: Spirited Favorites",
    items: [
      { name: "FARMERS DAUGHTER", price: "$16", description: "Vodka, Strawberry, Cranberry, Sweet & Sour, Basil, Sugar Rim." },
      { name: "PEACH TART", price: "$15", description: "Peach Vodka, Triple Sec, Peach, Sweet & Sour, Sugar Rim." },
      { name: "PERKY PINEAPPLE", price: "$15", description: "Tequila Blanco, Pineapple, Cilantro, Sweet & Sour, Salt Rim." },
      { name: "MOTHER OF DRAGONS", price: "$15", description: "Tequila Reposado, Grapefruit Liqueur, Grapefruit, Lime, Dragon Fruit, Orange Bitters, Torched Rosemary." }
    ]
  },
  {
    title: "CRAFT COCKTAILS: Drinking Outside The Box",
    items: [
      { name: "THERAPY MULE", price: "$15", description: "Vodka, Apple Juice, Lime Juice, Spiced Butter Syrup, Cinnamon Bitters, Ginger Beer." },
      { name: "SAGE ADVICE", price: "$16", description: "Bourbon, Spiced Pear Liqueur, Lemon, Sage, Black Walnut Bitters." },
      { name: "THE FLYING MONKEY", price: "$15", description: "Silver Rum, Blue Curaçao, Banana Liqueur, Pineapple, Sweet & Sour, Orgeat, Tiki Bitters, Dark Rum." },
      { name: "DANCING THROUGH LIFE", price: "$16", description: "Silver Rum, Passion Fruit Liqueur, Grapefruit, Lime, Raspberry Coulis, Velvet Falernum, Cardamom Bitters, Orange Cotton Candy." }
    ]
  },
  {
    title: "CRAFT COCKTAILS: Feeling Adventurous",
    items: [
      { name: "GIN A NUTSHELL", price: "$16", description: "Gin, Bénédictine, Pistachio Orgeat, Lemon, Egg White, Cardamom Bitters." },
      { name: "ABUELITA OAXAQUEÑA", price: "$16", description: "Tequila Reposado, Mezcal, Espresso Liqueur, Amaro Nonino, Abuelita Chocolate, Egg White, Mole Bitters." },
      { name: "DEAD MEN TELL NO TALES", price: "$15", description: "House Coconut Washed Rum, Lime, Vanilla, Honey, Tiki Bitters." },
      { name: "THE FLOOR IS GUAVA", price: "$16", description: "Mezcal, Aperol, Grapefruit, Orange, Lime, Guava, Agave, Egg White, Salt Rim, Flaming Lime." }
    ]
  },
  {
    title: "CRAFT COCKTAILS: Keeping It Classic",
    items: [
      { name: "SOCI-OLD FASHIONED", price: "$14+", description: "Whiskey, Orange, Aromatic Bitters, Sugar Syrup." },
      { name: "PAPER PLANE", price: "$14+", description: "Whiskey, Aperol, Amaro Nonino, Lemon." },
      { name: "VIEUX CARRÉ", price: "$15+", description: "Rye Whiskey, Cognac, Sweet Vermouth, Bénédictine, Aromatic Bitters." },
      { name: "OAXACAN OLD FASHIONED", price: "$14+", description: "Mezcal, Tequila Reposado, Agave, Xocolatl Mole Bitters." },
      { name: "PALOMA", price: "$14+", description: "Tequila, Grapefruit, Lime, Soda Water, Agave." },
      { name: "WAKE ME UP BUTTERCUP", price: "$15+", description: "Vodka, Espresso Liqueur, Crème de Cacao, Coffee, Cookie Butter, Black Walnut Bitters." },
      { name: "MAI TAI", price: "$14+", description: "Silver Rum, Dark Rum, Orange Curaçao, Lime, Orgeat, Tiki Bitters." },
      { name: "PISCO SOUR", price: "$15", description: "Pisco, Lime, Sugar Syrup, Aromatic Bitters, Egg White." },
      { name: "STOCKHOLM ROYALE", price: "$14+", description: "Vodka, Triple Sec, Raspberry Liqueur, Sweet & Sour, Sugar Syrup, Champagne, Sugar Rim." }
    ]
  },
  {
    title: "H.T.A. (Mocktails)",
    note: "Hold The Alcohol - $12 Each",
    items: [
      { name: "HEY THERE, HOT STUFF", price: "$12", description: "NA Grapefruit Liqueur, Pineapple, Lime, Habanero, Agave, Jalapeno, Tajin Rim." },
      { name: "A LITTLE BIT ALEXIS", price: "$12", description: "NA Ginger Liqueur, Cranberry, Lemon, Strawberry, Egg White, Soda Water." },
      { name: "SMASHING PINEAPPLES", price: "$12", description: "NA Pineapple Liqueur, Pineapple, Lime, Orgeat, Ginger Beer, Mint." },
      { name: "I'M JUST KEN", price: "$12", description: "NA Pineapple Liqueur, Pineapple, NA Blue Curaçao, Falernum, Coconut." },
      { name: "HERE COMES THE SUN", price: "$12", description: "NA Pineapple Liqueur, Peach, Lemon, Pomegranate." },
      { name: "SO FRESH & SO CLEAN", price: "$12", description: "NA Grapefruit Liqueur, Lime, Cucumber, Basil, Soda Water." }
    ]
  },
  {
    title: "WINE",
    items: [
      { name: "OPERA PRIMA CHAMPAGNE", price: "$8 | $32" },
      { name: "TOSCHI CHARDONNAY", price: "$8 | $32" },
      { name: "CRU CHARDONNAY", price: "$11 | $44" },
      { name: "TOSCHI PINOT GRIGIO", price: "$8 | $32" },
      { name: "POMELO'S SAUVIGNON BLANC", price: "$9 | $36" },
      { name: "TINTO REY ROSE", price: "$10 | $40" },
      { name: "TOSCHI WHITE MOSCATO", price: "$8 | $32" },
      { name: "TOSCHI CABERNET", price: "$8 | $32" },
      { name: "DAOU CABERNET", price: "$16 | $52" },
      { name: "DAOU 'PESSIMIST' RED BLEND", price: "$15 | $48" },
      { name: "MEIOMI PINOT NOIR", price: "$11 | $44" },
      { name: "TOSCHI MERLOT", price: "$8 | $32" }
    ]
  },
  {
    title: "BEER",
    items: [
      { name: "BOTTLED & CANNED", price: "$6 - $6.75", description: "Bud Light, Coors Light, Stella Artois, Michelob Ultra, Corona, Modelo, Modelo Negra, Firestone Walker 805 (NA)." },
      { name: "DRAFT BEER FLIGHT", price: "$12", description: "4 Craft Drafts (5 oz samples)." }
    ]
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Facebook', url: '#', icon: 'facebook' },
  { name: 'Instagram', url: '#', icon: 'instagram' },
  { name: 'Yelp', url: '#', icon: 'yelp' }
];

export const REVIEWS: Review[] = [
  {
    author: "Cole Evans",
    rating: 5,
    text: "I don’t know who Colton is, but the dude has it figured out. Great low key atmosphere with friendly staff. The food didn’t disappoint either. I had the Thai Chili wings that’s were some of the best wings I’ve ever had.",
    relativeTime: "5 months ago",
    source: "Local Guide"
  },
  {
    author: "Oofrish V Contractor",
    rating: 5,
    text: "Good location on Shaw Avenue with great ambiance - both indoor and outdoors. The place has a great vibe about it and their service is excellent.",
    relativeTime: "7 months ago",
    source: "Local Guide"
  },
  {
    author: "Tony Tiengtum",
    rating: 5,
    text: "Good food in a great vibe! Got seated in about 10 minutes on a Saturday night. Awesome Local Alternative to the nearby chain restaurants.",
    relativeTime: "5 months ago",
    source: "Local Guide"
  },
  {
    author: "Dylan Smith",
    rating: 5,
    text: "Great food. Love the concept. I great experience with my social therapist. The brisket tacos are a must have.",
    relativeTime: "2 months ago",
    source: "Local Guide"
  },
  {
    author: "Rachel Sinit",
    rating: 5,
    text: "The best thing about this place is the enthusiasm that Nick brings to his work making customers feel welcome and ensuring they are having an enjoyable time. P.S. parmesan fries and panko-crusted deviled eggs are awesome",
    relativeTime: "4 months ago",
    source: "Local Guide"
  },
  {
    author: "Michelle L",
    rating: 5,
    text: "Love going to Coltons, servers are super friendly and attentive. Food is always yummy!",
    relativeTime: "3 months ago",
    source: "Local Guide"
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { url: "https://picsum.photos/seed/coltonfood1/800/600", alt: "Social Wings Platter", category: "food" },
  { url: "https://picsum.photos/seed/coltonpatio/800/600", alt: "Outdoor Patio Seating", category: "patio" },
  { url: "https://picsum.photos/seed/coltondrink1/800/600", alt: "Craft Cocktail - Farmers Daughter", category: "drink" },
  { url: "https://picsum.photos/seed/coltoninterior/800/600", alt: "Main Dining Hall", category: "interior" },
  { url: "https://picsum.photos/seed/coltonfood2/800/600", alt: "Mustard Bird Sandwich", category: "food" },
  { url: "https://picsum.photos/seed/coltondrink2/800/600", alt: "Bar Service", category: "drink" },
];
