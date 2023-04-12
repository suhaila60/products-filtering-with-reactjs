import "./App.css";
import ProductList from "./components/ProductList";
import Header from "./components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FilterBox from "./components/FilterBox";
import Banner from "./components/Banner";
import { useState } from "react";
function App(props) {
  function redBox() {
    return (
      <div className="red-box ">
        <div> Limited time deal </div>
      </div>
    );
  }

  const Products = [
    {
      id: 1,
      title: "Generic",
      sponsered: "sponsered",
      sponsImg:
        "https://cdn4.iconfinder.com/data/icons/gray-toolbar-8/512/xxx019-512.png",
      description: "Rayon Printed Short Kurta",
     

      imageUrl:
        "https://rukminim1.flixcart.com/image/612/612/l5e81ow0/dress/4/r/a/xxl-1651-sheetal-associates-original-imagg2rhrjgcddza.jpeg?q=70",
      starImgUrl:
        "https://t0.gstatic.com/images?q=tbn:ANd9GcSw4T-TcDsNqBPM1fx35-ERHR7P-j3ulC-WDsDKB4wv1xp1Aus3",
      starRating: "150",
      limiteBox: redBox(),

      priceIcon: "₹",
      price: 1869,
      priceStrike: "₹1499",
      offer: " (42% off)",
      primeImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJjfWGswgixRoqLA6FKK4mkxJgidKqB4SMW3GUrE02xrjvG8UvEH4OYkQ-52lemKxX16U&usqp=CAU",
      getIt: "Get it",
      deliverDate: "Friday, December 9 - Tuesday, December 13",
      freeDelivery: "FREE Delivery by Amazon",
      category: "womens",
      color: "black",
    },
    {
      id: 2,
      title: "NEW4U",
      sponsered: "sponsered",
      sponsImg:
        "https://cdn4.iconfinder.com/data/icons/gray-toolbar-8/512/xxx019-512.png",
      description: "Women's Rayon Floral Printed Straight Kurti",

      imageUrl:
        "https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/6/n/r/xxl-2067664-roadster-original-imagkttm48qfqy3j.jpeg?q=70",
      starImgUrl:
        "https://t0.gstatic.com/images?q=tbn:ANd9GcSw4T-TcDsNqBPM1fx35-ERHR7P-j3ulC-WDsDKB4wv1xp1Aus3",
      starRating: "50",
      limiteBox: "",
      priceIcon: "₹",
      price: 1500,
      priceStrike: "₹1499",
      offer: " (52% off)",
      primeImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJjfWGswgixRoqLA6FKK4mkxJgidKqB4SMW3GUrE02xrjvG8UvEH4OYkQ-52lemKxX16U&usqp=CAU",

      getIt: "Get it",
      deliverDate: "Sunday, November 27",
      freeDelivery: "FREE Delivery on first order.",
      category: "womens",
      color: "red",
    },
    {
      id: 3,
      title: "VASTRAMAY",
      sponsered: "sponsered",
      sponsImg:
        "https://cdn4.iconfinder.com/data/icons/gray-toolbar-8/512/xxx019-512.png",
      description: "Men Regular Fit Solid Cut Away Collar Casual Shirt cotton",

      imageUrl:
        "https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/a/p/s/s-lingo-clothenic-original-imagj2wzqyvyjxpp.jpeg?q=70",
      starImgUrl:
        "https://t0.gstatic.com/images?q=tbn:ANd9GcSw4T-TcDsNqBPM1fx35-ERHR7P-j3ulC-WDsDKB4wv1xp1Aus3",
      starRating: "500",
      limiteBox: redBox(),
      priceIcon: "₹",
      price: 4000,
      priceStrike: "₹2000",
      offer: " (42% off)",
      primeImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJjfWGswgixRoqLA6FKK4mkxJgidKqB4SMW3GUrE02xrjvG8UvEH4OYkQ-52lemKxX16U&usqp=CAU",

      getIt: "Get it",
      deliverDate: "Friday, December 9 - Tuesday, December 13",
      freeDelivery: "FREE Delivery by Amazon",
      category: "male",
      color: "green",
    },
    {
      id: 4,
      title: "TIGERSNAKE",
      sponsered: "sponsered",
      sponsImg:
        "https://cdn4.iconfinder.com/data/icons/gray-toolbar-8/512/xxx019-512.png",
      description: "Women Self Design Cotton Blend Straight Kurta ",

      imageUrl:
        "https://rukminim1.flixcart.com/image/612/612/ke8uv0w0-0/kurta/y/q/6/m-stylish229-h-ngreenstraightkurta-m-new-stylish-original-imafuzammkbrhmjk.jpeg?q=70",
      starImgUrl:
        "https://t0.gstatic.com/images?q=tbn:ANd9GcSw4T-TcDsNqBPM1fx35-ERHR7P-j3ulC-WDsDKB4wv1xp1Aus3",
      starRating: "730",
      limiteBox: redBox(),
      priceIcon: "₹",
      price: 4500,
      priceStrike: "₹500",
      offer: " (32% off)",
      primeImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJjfWGswgixRoqLA6FKK4mkxJgidKqB4SMW3GUrE02xrjvG8UvEH4OYkQ-52lemKxX16U&usqp=CAU",

      getIt: "Get it",
      deliverDate: "Wednesday, November 30 ",
      freeDelivery: "FREE Delivery by Amazon",
      category: "womens",
      color: "green",
    },
    {
      id: 5,
      title: "NEW4U",
      sponsered: "sponsered",
      sponsImg:
        "https://cdn4.iconfinder.com/data/icons/gray-toolbar-8/512/xxx019-512.png",
      description: " Men Slim Fit Printed Spread Collar Casual Shirt",

      imageUrl:
        "https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/j/y/4/m-dj-line-print-valveera-original-imagjvyygwe9yvn4.jpeg?q=70",
      starImgUrl:
        "https://t0.gstatic.com/images?q=tbn:ANd9GcSw4T-TcDsNqBPM1fx35-ERHR7P-j3ulC-WDsDKB4wv1xp1Aus3",
      starRating: "150",
      limiteBox: "",
      priceIcon: "₹",
      price: 1350,
      priceStrike: "₹1499",
      offer: " (42% off)",
      primeImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJjfWGswgixRoqLA6FKK4mkxJgidKqB4SMW3GUrE02xrjvG8UvEH4OYkQ-52lemKxX16U&usqp=CAU",

      getIt: "Get it",
      deliverDate: "Sunday, November 27",
      freeDelivery: "FREE Delivery by Amazon",
      category: "male",
      color: "red",
    },
    {
      id: 6,
      title: "VASTRAMAY",
      sponsered: "sponsered",
      sponsImg:
        "https://cdn4.iconfinder.com/data/icons/gray-toolbar-8/512/xxx019-512.png",
      description: "Men Slim Fit Solid Sp cotton",

      imageUrl:
        "https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/x/6/q/m-kcsh-fo-1647-ma-fubar-original-imaghg9qdht3ghgn.jpeg?q=70",
      starImgUrl:
        "https://t0.gstatic.com/images?q=tbn:ANd9GcSw4T-TcDsNqBPM1fx35-ERHR7P-j3ulC-WDsDKB4wv1xp1Aus3",
      starRating: "730",
      limiteBox: redBox(),
      priceIcon: "₹",
      price: 869,
      priceStrike: "₹500",
      offer: " (32% off)",
      primeImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJjfWGswgixRoqLA6FKK4mkxJgidKqB4SMW3GUrE02xrjvG8UvEH4OYkQ-52lemKxX16U&usqp=CAU",

      getIt: "Get it",
      deliverDate: "Wednesday, November 30 ",
      freeDelivery: "FREE Delivery by Amazon",
      category: "male",
      color: "silver",
    },
    {
      id: 7,
      title: "TIGERSNAKE",
      sponsered: "sponsered",
      sponsImg:
        "https://cdn4.iconfinder.com/data/icons/gray-toolbar-8/512/xxx019-512.png",
      description: "Women Chikan Embroidery Georgette Anarkali Kurta",

      imageUrl:
        "https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/i/s/h/s-apsara-fashtown-original-imagheznttnagwzg.jpeg?q=70",
      starImgUrl:
        "https://t0.gstatic.com/images?q=tbn:ANd9GcSw4T-TcDsNqBPM1fx35-ERHR7P-j3ulC-WDsDKB4wv1xp1Aus3",
      starRating: "150",
      limiteBox: redBox(),
      priceIcon: "₹",
      price: 339,
      priceStrike: "₹1,999",
      offer: " (83% off)",
      primeImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJjfWGswgixRoqLA6FKK4mkxJgidKqB4SMW3GUrE02xrjvG8UvEH4OYkQ-52lemKxX16U&usqp=CAU",
      getIt: "Get it",
      deliverDate: " Sunday, November 27",
      freeDelivery: "FREE Delivery by Amazon",
      category: "womens",
      color: "black",
    },
    {
      id: 8,
      title: "Generic",
      sponsered: "sponsered",
      sponsImg:
        "https://cdn4.iconfinder.com/data/icons/gray-toolbar-8/512/xxx019-512.png",

      description:
        "Cotton Slub Check Anarkali",

      imageUrl:
        "https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/t/8/3/s-lh129-l-h-handicrafts-original-imaggzu67k68vn6w.jpeg?q=70",
      starImgUrl:
        "https://t0.gstatic.com/images?q=tbn:ANd9GcSw4T-TcDsNqBPM1fx35-ERHR7P-j3ulC-WDsDKB4wv1xp1Aus3",
      starRating: "730",
      limiteBox: "",
      priceIcon: "₹",
      price: 219,
      priceStrike: "₹500",
      offer: " (32% off)",
      primeImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJjfWGswgixRoqLA6FKK4mkxJgidKqB4SMW3GUrE02xrjvG8UvEH4OYkQ-52lemKxX16U&usqp=CAU",

      getIt: "Get it",
      deliverDate: "Wednesday, November 30 ",
      freeDelivery: "FREE Delivery by Amazon",
      category: "womens",
      color: "red",
    },
    {
      id: 9,
      title: "VASTRAMAY",
      sponsered: "sponsered",
      sponsImg:
        "https://cdn4.iconfinder.com/data/icons/gray-toolbar-8/512/xxx019-512.png",
      description: "Women Embellished Cotton Rayon Anarkali Kurta",

      imageUrl:
        "https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/j/1/y/3xl-410-dammode-original-imaggmg6jh6r4sge.jpeg?q=70",
      starImgUrl:
        "https://t0.gstatic.com/images?q=tbn:ANd9GcSw4T-TcDsNqBPM1fx35-ERHR7P-j3ulC-WDsDKB4wv1xp1Aus3",
      starRating: "150",
      limiteBox: redBox(),
      priceIcon: "₹",
      price: 1390,
      priceStrike: "₹1,999",
      offer: " (83% off)",
      primeImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJjfWGswgixRoqLA6FKK4mkxJgidKqB4SMW3GUrE02xrjvG8UvEH4OYkQ-52lemKxX16U&usqp=CAU",
      getIt: "Get it",
      deliverDate: " Tuesday, November 29",
      freeDelivery: "FREE Delivery on first order.",
      category: "womens",
      color: "green",
    },
    {
      id: 10,
      title: "Generic ",

      sponsered: "sponsered",
      sponsImg:
        "https://cdn4.iconfinder.com/data/icons/gray-toolbar-8/512/xxx019-512.png",
      description: "Men Printed Round Neck Silver, Black T-Shirt",

      imageUrl:
        "https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/s/t/j/xxl-hf-tshirt-try-this-original-imagm5uwnrshyh5b.jpeg?q=70",
      starImgUrl:
        "https://t0.gstatic.com/images?q=tbn:ANd9GcSw4T-TcDsNqBPM1fx35-ERHR7P-j3ulC-WDsDKB4wv1xp1Aus3",
      starRating: "150",
      limiteBox: redBox(),
      priceIcon: "₹",
      price: 3869,
      priceStrike: "₹1499",
      offer: " (42% off)",
      primeImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJjfWGswgixRoqLA6FKK4mkxJgidKqB4SMW3GUrE02xrjvG8UvEH4OYkQ-52lemKxX16U&usqp=CAU",
      getIt: "Get it",
      deliverDate: "Friday, December 9 - Tuesday, December 13",
      freeDelivery: "FREE Delivery by Amazon",
      category: "male",
      color: "black",
    },
    {
      id: 11,
      title: "TIGERSNAKE",
      sponsered: "sponsered",
      sponsImg:
        "https://cdn4.iconfinder.com/data/icons/gray-toolbar-8/512/xxx019-512.png",
      description: "Women Printed Viscose Rayon A-line Kurta",

      imageUrl:
        "https://rukminim1.flixcart.com/image/612/612/l2jcccw0/kurta/x/l/h/s-k1070-priyashi-original-imagdvffdtvzygrs.jpeg?q=70",
      starImgUrl:
        "https://t0.gstatic.com/images?q=tbn:ANd9GcSw4T-TcDsNqBPM1fx35-ERHR7P-j3ulC-WDsDKB4wv1xp1Aus3",
      starRating: "50",
      limiteBox: "",
      priceIcon: "₹",
      price: 1500,
      priceStrike: "₹1499",
      offer: " (52% off)",
      primeImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJjfWGswgixRoqLA6FKK4mkxJgidKqB4SMW3GUrE02xrjvG8UvEH4OYkQ-52lemKxX16U&usqp=CAU",

      getIt: "Get it",
      deliverDate: "Sunday, November 27",
      freeDelivery: "FREE Delivery on first order.",
      category: "womens",
      color: "red",
    },
    {
      id: 12,
      title: "TIGERSNAKE",
      sponsered: "sponsered",
      sponsImg:
        "https://cdn4.iconfinder.com/data/icons/gray-toolbar-8/512/xxx019-512.png",
      description: "Men Solid Round Neck Green T-Shirt cotton",

      imageUrl:
        "https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/d/h/x/m-723-10-ftx-original-imagh3hsje4dxhcb.jpeg?q=70",
      starImgUrl:
        "https://t0.gstatic.com/images?q=tbn:ANd9GcSw4T-TcDsNqBPM1fx35-ERHR7P-j3ulC-WDsDKB4wv1xp1Aus3",
      starRating: "500",
      limiteBox: redBox(),
      priceIcon: "₹",
      price: 999,
      priceStrike: "₹2000",
      offer: " (42% off)",
      primeImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJjfWGswgixRoqLA6FKK4mkxJgidKqB4SMW3GUrE02xrjvG8UvEH4OYkQ-52lemKxX16U&usqp=CAU",

      getIt: "Get it",
      deliverDate: "Friday, December 9 - Tuesday, December 13",
      freeDelivery: "FREE Delivery by Amazon",
      category: "male",
      color: "green",
    },
    {
      id: 13,
      title: "Generic",
      sponsered: "sponsered",
      sponsImg:
        "https://cdn4.iconfinder.com/data/icons/gray-toolbar-8/512/xxx019-512.png",
      description: "Women Checkered Cotton Rayon Kaftan Kurta ",

      imageUrl:
        "https://rukminim1.flixcart.com/image/612/612/l4ssfww0/kurta/6/p/g/xxl-mf22kaftan09b-mialo-fashion-original-imagfm39dpzjtgw5.jpeg?q=70",
      starImgUrl:
        "https://t0.gstatic.com/images?q=tbn:ANd9GcSw4T-TcDsNqBPM1fx35-ERHR7P-j3ulC-WDsDKB4wv1xp1Aus3",
      starRating: "730",
      limiteBox: redBox(),
      priceIcon: "₹",
      price: 3500,
      priceStrike: "₹500",
      offer: " (32% off)",
      primeImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJjfWGswgixRoqLA6FKK4mkxJgidKqB4SMW3GUrE02xrjvG8UvEH4OYkQ-52lemKxX16U&usqp=CAU",

      getIt: "Get it",
      deliverDate: "Wednesday, November 30 ",
      freeDelivery: "FREE Delivery by Amazon",
      category: "womens",
      color: "black",
    },
    {
      id: 14,
      title: "TIGERSNAKE",
      sponsered: "sponsered",
      sponsImg:
        "https://cdn4.iconfinder.com/data/icons/gray-toolbar-8/512/xxx019-512.png",
      description: "Men Regular Fit Printed Spread Collar Casual Shirts",

      imageUrl:
        "https://rukminim1.flixcart.com/image/612/612/l2krs7k0/shirt/7/f/t/m-trdshirtful-sh29-tripr-original-imagdwfmwa5xyuzw.jpeg?q=70",
      starImgUrl:
        "https://t0.gstatic.com/images?q=tbn:ANd9GcSw4T-TcDsNqBPM1fx35-ERHR7P-j3ulC-WDsDKB4wv1xp1Aus3",
      starRating: "150",
      limiteBox: "",
      priceIcon: "₹",
      price: 350,
      priceStrike: "₹1499",
      offer: " (42% off)",
      primeImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJjfWGswgixRoqLA6FKK4mkxJgidKqB4SMW3GUrE02xrjvG8UvEH4OYkQ-52lemKxX16U&usqp=CAU",

      getIt: "Get it",
      deliverDate: "Sunday, November 27",
      freeDelivery: "FREE Delivery by Amazon",
      category: "male",
      color: "red",
    },
    {
      id: 15,
      title: "VASTRAMAY",
      sponsered: "sponsered",
      sponsImg:
        "https://cdn4.iconfinder.com/data/icons/gray-toolbar-8/512/xxx019-512.png",

      description:
        "Women Printed Cotton Blend Anarkali Kurta With Attached...s",

      imageUrl:
        "https://rukminim1.flixcart.com/image/612/612/xif0q/ethnic-set/o/x/4/4xl-bkgreen-baba-kurti-original-imagbxwtc3mh9xga-bb.jpeg?q=70",
      starImgUrl:
        "https://t0.gstatic.com/images?q=tbn:ANd9GcSw4T-TcDsNqBPM1fx35-ERHR7P-j3ulC-WDsDKB4wv1xp1Aus3",
      starRating: "730",
      limiteBox: redBox(),
      priceIcon: "₹",
      price: 869,
      priceStrike: "₹500",
      offer: " (32% off)",
      primeImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJjfWGswgixRoqLA6FKK4mkxJgidKqB4SMW3GUrE02xrjvG8UvEH4OYkQ-52lemKxX16U&usqp=CAU",

      getIt: "Get it",
      deliverDate: "Wednesday, November 30 ",
      freeDelivery: "FREE Delivery by Amazon",
      category: "womens",
      color: "green",
    },
    {
      id: 16,
      title: "VASTRAMAY ",

      sponsered: "sponsered",
      sponsImg:
        "https://cdn4.iconfinder.com/data/icons/gray-toolbar-8/512/xxx019-512.png",

      description:
        "Men's Loose Regular Fit Half Sleeves T-Shirt Men Printe... ",

      imageUrl:
        "https://rukminim1.flixcart.com/image/612/612/l2dmky80/t-shirt/t/z/v/3xl-t339hs-blyl-new-eyebogler-original-imagdqhzxgxhrfqh.jpeg?q=70",
      starImgUrl:
        "https://t0.gstatic.com/images?q=tbn:ANd9GcSw4T-TcDsNqBPM1fx35-ERHR7P-j3ulC-WDsDKB4wv1xp1Aus3",
      starRating: "150",
      limiteBox: redBox(),
      priceIcon: "₹",
      price: 5999,
      priceStrike: "₹1,999",
      offer: " (83% off)",
      primeImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJjfWGswgixRoqLA6FKK4mkxJgidKqB4SMW3GUrE02xrjvG8UvEH4OYkQ-52lemKxX16U&usqp=CAU",
      getIt: "Get it",
      deliverDate: " Sunday, November 27",
      freeDelivery: "FREE Delivery by Amazon",
      category: "male",
      color: "black",
    },
    {
      id: 17,
      title: "Mialo fashion",
      sponsered: "sponsered",
      sponsImg:
        "https://cdn4.iconfinder.com/data/icons/gray-toolbar-8/512/xxx019-512.png",
      description: "Women Checkered Cotton Rayon Kaftan Kurta ",

      imageUrl:
        "https://rukminim1.flixcart.com/image/612/612/kirr24w0-0/dress/z/u/z/m-md142-oomph-original-imafyhyh7afjrhah.jpeg?q=70",
      starImgUrl:
        "https://t0.gstatic.com/images?q=tbn:ANd9GcSw4T-TcDsNqBPM1fx35-ERHR7P-j3ulC-WDsDKB4wv1xp1Aus3",
      starRating: "730",
      limiteBox: redBox(),
      priceIcon: "₹",
      price: 3500,
      priceStrike: "₹500",
      offer: " (32% off)",
      primeImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJjfWGswgixRoqLA6FKK4mkxJgidKqB4SMW3GUrE02xrjvG8UvEH4OYkQ-52lemKxX16U&usqp=CAU",

      getIt: "Get it",
      deliverDate: "Wednesday, November 30 ",
      freeDelivery: "FREE Delivery by Amazon",
      category: "womens",
      color: "red",
    },
    {
      id: 18,
      title: "VASTRAMAY",
      sponsered: "sponsered",
      sponsImg:
        "https://cdn4.iconfinder.com/data/icons/gray-toolbar-8/512/xxx019-512.png",
      description: "Men Regular Fit Checkered Spread Collar Casual Shirt",

      imageUrl:
        "https://rukminim1.flixcart.com/image/612/612/kyg5zm80/shirt/w/e/e/xl-ts-shirt1140-tanip-original-imagazaecakjzhcg.jpeg?q=70",
      starImgUrl:
        "https://t0.gstatic.com/images?q=tbn:ANd9GcSw4T-TcDsNqBPM1fx35-ERHR7P-j3ulC-WDsDKB4wv1xp1Aus3",
      starRating: "150",
      limiteBox: "",
      priceIcon: "₹",
      price: 350,
      priceStrike: "₹1499",
      offer: " (42% off)",
      primeImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJjfWGswgixRoqLA6FKK4mkxJgidKqB4SMW3GUrE02xrjvG8UvEH4OYkQ-52lemKxX16U&usqp=CAU",

      getIt: "Get it",
      deliverDate: "Sunday, November 27",
      freeDelivery: "FREE Delivery by Amazon",
      category: "male",
      color: "green",
    },
    {
      id: 19,
      title: "NEW4U",
      sponsered: "sponsered",
      sponsImg:
        "https://cdn4.iconfinder.com/data/icons/gray-toolbar-8/512/xxx019-512.png",
      description: "Women Solid Viscose Rayon Straight Kurta",

      imageUrl:
        "https://rukminim1.flixcart.com/image/612/612/ksuowi80/kurta/1/i/f/xl-rf-184-black-new4u-original-imag6bn86xzkzasb.jpeg?q=70",
      starImgUrl:
        "https://t0.gstatic.com/images?q=tbn:ANd9GcSw4T-TcDsNqBPM1fx35-ERHR7P-j3ulC-WDsDKB4wv1xp1Aus3",
      starRating: "730",
      limiteBox: redBox(),
      priceIcon: "₹",
      price: 869,
      priceStrike: "₹500",
      offer: " (32% off)",
      primeImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJjfWGswgixRoqLA6FKK4mkxJgidKqB4SMW3GUrE02xrjvG8UvEH4OYkQ-52lemKxX16U&usqp=CAU",

      getIt: "Get it",
      deliverDate: "Wednesday, November 30 ",
      freeDelivery: "FREE Delivery by Amazon",
      category: "womens",
      color: "black",
    },
    {
      id: 20,
      title: "Generic ",

      sponsered: "sponsered",
      sponsImg:
        "https://cdn4.iconfinder.com/data/icons/gray-toolbar-8/512/xxx019-512.png",
      description: "Men Printed Hooded Neck Red, Black T-Shirt ",

      imageUrl:
        "https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/o/e/j/m-all-war-one-nb-nicky-boy-original-imagjz84ggtf8dmx.jpeg?q=70",
      starImgUrl:
        "https://t0.gstatic.com/images?q=tbn:ANd9GcSw4T-TcDsNqBPM1fx35-ERHR7P-j3ulC-WDsDKB4wv1xp1Aus3",
      starRating: "150",
      limiteBox: redBox(),
      priceIcon: "₹",
      price: 5999,
      priceStrike: "₹1,999",
      offer: " (83% off)",
      primeImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJjfWGswgixRoqLA6FKK4mkxJgidKqB4SMW3GUrE02xrjvG8UvEH4OYkQ-52lemKxX16U&usqp=CAU",
      getIt: "Get it",
      deliverDate: " Sunday, November 27",
      freeDelivery: "FREE Delivery by Amazon",
      category: "male",
      color: "red",
    },
  ];

  const [newSearchText, setNewSearchText] = useState("");
  const onSearchLensClick = (searchText) => {
    setNewSearchText(searchText);
  };

  const [newSuggest, setNewSuggest] = useState("");
  const onAutoSuggestClick = (searchAutoSuggest) => {
    setNewSuggest(searchAutoSuggest);
  };

  const [newBtncategory, setNewBtnCategory] = useState("");
  const onButtonCategory = (categoryButton) => {
    setNewBtnCategory(categoryButton);
  };

  return (
    <div className="body">
      <Header
        Products={Products}
        newSearchText={newSearchText}
        onSearchLensClick={onSearchLensClick}
        onAutoSuggestClick={onAutoSuggestClick}
      />
      <Container fluid>
        <Row>
          <Col variant="warning" sm={2} className="mt-3">
            <FilterBox onButtonCategory={onButtonCategory} />
          </Col>

          <Col className="mt-3">
            <Row className="d-flex flex-column " bg="black">
              <Col
                className="bannerImg ms-5 d-flex flex-row justify-content-end "
                sm={10}
              >
                <Banner />
              </Col>
              <Col
                sm={12}
                className="d-flex flex-wrap justify-content-evenly "
                id="hello"
              >
                <ProductList
                  Products={Products}
                  newSearchText={newSearchText}
                  newBtncategory={newBtncategory}
                  newSuggest={newSuggest}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
