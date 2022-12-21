export interface ICandyModel {
  id: number
  title: string;
  desc: string;
}

export const filterItems = (items: ICandyModel[], query: string) => {
  query = query.toLowerCase();

  return items.filter(item =>
    item.title.split(' ').some(word =>
      word.toLowerCase().startsWith(query)
    )
  )
}

export const candies: ICandyModel[] = [
  {
    id: 1,
    title: "Licorice Fish",
    desc: "The somewhat surprising truth about the international favorite Swedish Fish is that Swedes don’t eat them. The red gummy Swedish Fish was developed by a Swedish confectioner; however, they were made to sell to the Americas. This fish candy is so popular with Americans it has spurred spin-offs, like Swedish Fish Oreos. The signature flavor of the red Swedish Fish is lingonberry. It’s fruity, sweet, and a little different from popular candy flavors in Sweden.",
  },
  {
    id: 2,
    title: "Gummy Squids",
    desc: "Swedish candy lovers like to see fun shapes in their candy, especially sea animals. Blackfiskar are gummy squids that rule Swedish candy stores. They can be found across Sweden, but the most popular varieties are; salta, salted licorice, and sura, sour fruit. The salted variety combines sweet and spicy anise with slat for a fun bite. The sour squids have fun and fruity undertones with a pucker-inducing chew!",
  },
  {
    id: 3,
    title: "Salted Licorice Sticks",
    desc: "The name of this Swedish candy may sound like a warning, but they are truly delicious! Kanderade Haxvral means “candied witch’s scream,” so this candy may not be for the timid! This Swedish confection is a combination of sweet licorice and salty licorice. It’s the perfectly balanced bite to excite your palate.",
  },
  {
    id: 4,
    title: "Chocolate Coconut Truffles",
    desc: "Sweden’s candy makers have something to offer every palate, even chocolate lovers! Mormor Lisas Cocos are a chocolate and coconut sweet in Sweden. They have a rich chocolate center with a milk chocolate coating and they’re topped off with shaved coconut. Chocolate and coconut make the most interesting and delightful taste combination.",
  },
  {
    id: 5,
    title: "Marshmallow Mushroom",
    desc: "This sweet may be named after a fungus, but there is no mushroom flavor in this candy. Skumkantereller is a candy in Sweden that’s made from marshmallows. They look like pretty pink mushrooms, but they taste like strawberries with a hint of vanilla. It’s a tongue-in-cheek sweet that will make you smile when you see it and when you eat it!",
  },
  {
    id: 6,
    title: "Citrus Hard Candies",
    desc: "When you’re craving a little sweet and sour, this Swedish candy is for you! These tasty treats are classic candy in Sweden made with a sweet, citrus bite. The candies are shaped like little citrus slices to entice your appetite. Citrus hard candies are a great choice for anyone in Sweden looking for a tart candy bite!",
  },
  {
    id: 7,
    title: "Pecan Candy",
    desc: "These candy springs will make your mouth jump for joy. Mojanger pecan is a Swedish candy made in the shape of a spring. They have the warm, nutty flavor of candied pecans. The candy has the perfect mix of sweet and nutty. Swedish candy is all about unexpected but delightful flavors, and these fun springs are just the thing!",
  },
];
