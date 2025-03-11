import { CategoryChipItem, ProductCardItem } from "@/types/allTypes";
import organicApples from '@/assets/OrganicApples.jpg';
import coldBrewCoffee from '@/assets/ColdBrewCoffee.jpg';
import wholeWheatBread from '@/assets/WholeWheatBread.jpg';
import organicBananas from '@/assets/OrganicBananas.jpg';
import almondMilk from '@/assets/AlmondMilk.jpg';
import avocados from '@/assets/Avocados.jpg';
import blueberries from '@/assets/Blueberries.jpg';
import oatmeal from '@/assets/Oatmeal.jpg';
import coconutWater from '@/assets/CoconutWater.jpg';
import cashewNuts from '@/assets/CashewNuts.jpg';


const productCards: ProductCardItem[] = [
  {
    id: 1,
    name: "Organic Apples",
    description: "Fresh and juicy organic apples sourced from local farms.",
    image: organicApples,
  },
  {
    id: 2,
    name: "Cold Brew Coffee",
    description: "Smooth and refreshing cold brew coffee with no added sugar.",
    image: coldBrewCoffee,
  },
  {
    id: 3,
    name: "Whole Wheat Bread",
    description: "Nutritious whole wheat bread baked fresh daily.",
    image: wholeWheatBread,
  },
  {
    id: 4,
    name: "Organic Bananas",
    description: "Sweet, ripe organic bananas straight from the farm.",
    image: organicBananas,
  },
  {
    id: 5,
    name: "Almond Milk",
    description: "Dairy-free almond milk, perfect for smoothies and coffee.",
    image: almondMilk,
  },
  {
    id: 6,
    name: "Avocados",
    description: "Rich and creamy avocados perfect for salads or toast.",
    image: avocados,
  },
  {
    id: 7,
    name: "Blueberries",
    description: "Fresh, antioxidant-packed blueberries straight from the farm.",
    image: blueberries,
  },
  {
    id: 8,
    name: "Oatmeal",
    description: "Healthy whole grain oatmeal, perfect for a nutritious breakfast.",
    image: oatmeal,
  },
  {
    id: 9,
    name: "Coconut Water",
    description: "Hydrating and refreshing coconut water from young coconuts.",
    image: coconutWater,
  },
  {
    id: 10,
    name: "Cashew Nuts",
    description: "Delicious, crunchy cashew nuts, a perfect snack.",
    image: cashewNuts,
  }
];

const categoryChips: CategoryChipItem[] = [
  { id: 1, name: "Fresh Produce", color: "#4CAF50", icon: "🍏", description: "Fruits and vegetables, fresh from the farm." },
  { id: 2, name: "Beverage", color: "#2196F3", icon: "🥤", description: "Drinks including coffee, tea, and soft drinks." },
  { id: 3, name: "Bakery", color: "#FF9800", icon: "🍞", description: "Freshly baked breads, cakes, and pastries." },
  { id: 4, name: "Dairy", color: "#FFEB3B", icon: "🧀", description: "Milk, cheese, yogurt, and other dairy products." },
  { id: 5, name: "Snacks", color: "#9C27B0", icon: "🍿", description: "Chips, nuts, and other tasty treats." },
  { id: 6, name: "Meat", color: "#F44336", icon: "🍖", description: "Fresh cuts of meat, poultry, and fish." },
  { id: 7, name: "Frozen", color: "#00BCD4", icon: "❄️", description: "Frozen food items, including vegetables and ready meals." },
  { id: 8, name: "Health & Wellness", color: "#8BC34A", icon: "💪", description: "Supplements, vitamins, and health-related products." },
  { id: 9, name: "Canned Goods", color: "#607D8B", icon: "🥫", description: "Canned fruits, vegetables, soups, and other pantry staples." },
  { id: 10, name: "Condiments", color: "#FF5722", icon: "🍯", description: "Spices, sauces, and other flavor-enhancing products." }
];
  
  export { productCards, categoryChips };