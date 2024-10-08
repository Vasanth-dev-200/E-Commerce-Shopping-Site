import './App.css'
import Home from './componnents/Home/Home'
import Cart from './componnents/Cart/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  const categoryNames = [
    {
      id: 0,
      name: "women",
      description: "Details to details is what makes Hexashop different from the other themes.",
      products: [
        { id: "0-0", productName: "New Green Jacket", price: "$100.00", rating: "★★★★", url: "https://img.freepik.com/free-photo/studio-close-up-portrait-young-fresh-blonde-woman-brown-straw-poncho-wool-black-trendy-hat-round-glasses-looking-camera-green-leather-had-bag_273443-1121.jpg?ga=GA1.1.314904209.1727422277&semt=ais_hybrid" },
        { id: "0-1", productName: "Classic Dress", price: "$100.00", rating: "★★★★", url: "https://img.freepik.com/free-photo/jocund-woman-summer-skirt-posing-with-kissing-face-expression-indoor-portrait-relaxed-elegant-ginger-lady-enjoying-leisure-time-studio_197531-11083.jpg?ga=GA1.1.314904209.1727422277&semt=ais_hybrid" },
        { id: "0-2", productName: "Spring Collection", price: "$100.00", rating: "★★★★★", url: "https://img.freepik.com/free-photo/young-woman-beautiful-dress-using-phone-shopping-online_1303-17521.jpg?ga=GA1.1.314904209.1727422277&semt=ais_hybrid" }
      ]
    },
    {
      id: 1,
      name: "men",
      description: "Details to details is what makes Hexashop different from the other themes.",
      products: [
        { id: "1-0", productName: "Clasic Spring", price: "$100.00", rating: "★★★", url: "https://img.freepik.com/free-photo/sexy-attractive-male-confident-hipster-handsome-stylish-bearded-man-brown_285396-4630.jpg?ga=GA1.1.314904209.1727422277&semt=ais_hybrid" },
        { id: "1-1", productName: "Air Force 1X", price: "$100.00", rating: "★★★★★", url: "https://img.freepik.com/premium-photo/man-wearing-jacket-that-says-he-is-wearing-jacket_1185498-111612.jpg?ga=GA1.1.314904209.1727422277&semt=ais_hybrid" },
        { id: "1-2", productName: "Love Nana'20", price: "$100.00", rating: "★★", url: "https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man_158538-19393.jpg?ga=GA1.1.314904209.1727422277&semt=ais_hybrid" }
      ]
    }, {
      id: 2,
      name: "kids",
      description: "Details to details is what makes Hexashop different from the other themes.",
      products: [
        { id: "2-0", productName: "School Collection", price: "$100.00", rating: "★★★★", url: "https://img.freepik.com/premium-photo/portrait-little-girl-with-long-hair-stylish-fall-clothes_246930-833.jpg?ga=GA1.1.314904209.1727422277&semt=ais_hybrid" },
        { id: "2-1", productName: "Summer Cap", price: "$100.00", rating: "★★★", url: "https://img.freepik.com/free-photo/little-charming-girl-dressed-checkered-shirt-jeans-stylish-cap-poses-isolated-wall-with-true-happy-emotions_291650-1212.jpg?ga=GA1.1.314904209.1727422277&semt=ais_hybrid" },
        { id: "2-2", productName: "Classic Dress", price: "$100.00", rating: "★★★★★", url: "https://img.freepik.com/premium-photo/young-boy-holding-sale-sign-front-vibrant-yellow-background-generative-ai_599408-2811.jpg?ga=GA1.1.314904209.1727422277&semt=ais_hybrid" }
      ]
    },
    {
      id: 4,
      name: "accessories",
      description: "Details to details is what makes Hexashop different from the other themes.",
      products: [
        { id: "3-0", productName: "Wristwatch", price: "$100.00", rating: "★★★★★", url: "https://img.freepik.com/premium-photo/3d-watch-fashion-able-watch-new-watch-designs-4k-wallpaper-hd-wallpaper_1262886-3309.jpg?ga=GA1.1.314904209.1727422277&semt=ais_hybrid" },
        { id: "3-1", productName: "Sunglass", price: "$100.00", rating: "★★★★★", url: "https://img.freepik.com/premium-photo/stylish-sunglass-man-isolated-white-background_205485-22620.jpg?ga=GA1.1.314904209.1727422277&semt=ais_hybrid" },
        { id: "3-2", productName: "Necklace", price: "$100.00", rating: "★", url: "https://img.freepik.com/free-photo/beautiful-luxury-necklace-jewelry-stand-neck_1339-7947.jpg?ga=GA1.1.314904209.1727422277&semt=ais_hybrid" }
      ]
    }];

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home categoryNames={categoryNames} />} />
          <Route path='/mycarts' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
