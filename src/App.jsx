import "./App.css";
import Home from "./componnents/Home/Home";
import Cart from "./componnents/Cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const categoryNames = [
    {
      id: 0,
      name: "women",
      shortDescription: "Trendy and stylish clothing for every occasion.",
      description:
        "Elevate your style with trendy outfits, timeless dresses, and statement accessories.",
      products: [
        {
          id: "0-0",
          productName: "Women Kurta",
          price: "₹789",
          rating: "★★★★",
          url: "https://rukminim2.flixcart.com/image/416/416/xif0q/ethnic-set/j/t/n/s-lakshmi-blue-dvv-divastri-original-imagyq4dcr38rctt.jpeg?q=70&crop=false",
          productUrl:
            "https://www.flipkart.com/divastri-women-kurta-pant-dupatta-set/p/itmb4db6ed611656?pid=ETHGYQ4E9TBGY4QU&lid=LSTETHGYQ4E9TBGY4QUXKUHHF&marketplace=FLIPKART&store=clo%2Fcfv%2Fitg%2Ftys&srno=b_1_17&otracker=browse&fm=Search&iid=en_dWHdnWfRrO1kFkjJ_3ddA625qZM3VhF6-T8lUetPqkP4JPQVqRpH5f3Fe5hWVfv5syPR1XR923ZwjXvX84kMaQ%3D%3D&ppt=browse&ppn=browse&ssid=06ik2z3iyo0000001728451046176",
        },
        {
          id: "0-1",
          productName: "Saree",
          price: "₹449",
          rating: "★★★★",
          url: "https://rukminim2.flixcart.com/image/832/832/xif0q/sari/v/b/r/free-king-green-superlaxmi-unstitched-original-imah2gx8guhvkw7q.jpeg?q=70&crop=false",
          productUrl:
            "https://www.flipkart.com/superlaxmi-temple-border-woven-narayanpet-cotton-silk-saree/p/itmb3ea9a24f18c9?pid=SARGTHE46ZWRZEGR&lid=LSTSARGTHE46ZWRZEGREPRUF2&marketplace=FLIPKART&store=clo%2F8on%2Fzpd%2F9og&spotlightTagId=BestsellerId_clo%2F8on%2Fzpd%2F9og&srno=b_1_30&otracker=browse&fm=Search&iid=dabf9bdb-8a03-4707-a96e-b77ba263243a.SARGTHE46ZWRZEGR.SEARCH&ppt=browse&ppn=browse&ssid=v6n940y46o0000001728451374262",
        },
        {
          id: "0-2",
          productName: "Grown",
          price: "₹419",
          rating: "★★★★",
          url: "https://rukminim2.flixcart.com/image/416/416/xif0q/gown/p/t/s/20-s-full-sleeve-stitched-heart-gown-freydis-50-original-imah28tfd33nzgzg.jpeg?q=70&crop=false",
          productUrl:
            "https://www.flipkart.com/shanoor-textile-anarkali-gown/p/itm4df23ed8c79e0?pid=GWNHY7H96ZBFJDHN&lid=LSTGWNHY7H96ZBFJDHN5SEAMA&marketplace=FLIPKART&store=clo%2Fodx%2Fod7%2F0xx&spotlightTagId=BestsellerId_clo%2Fodx%2Fod7%2F0xx&srno=b_1_3&otracker=browse&fm=Search&iid=17e7450c-ecf5-4ff5-9462-c9f6cb48a28c.GWNHY7H96ZBFJDHN.SEARCH&ppt=browse&ppn=browse&ssid=7jok473w2o0000001728451303303",
        },
      ],
    },
    {
      id: 1,
      name: "men",
      shortDescription: "Fashion-forward men's wear, from casual to formal.",
      description:
        "Versatile men’s wear, from formal to casual, with sleek designs and stylish accessories.",
      products: [
        {
          id: "1-0",
          productName: "Black Blazer",
          price: "₹2,903",
          rating: "★★★",
          url: "https://rukminim2.flixcart.com/image/832/832/xif0q/blazer/i/u/u/s-4mbz0010-01-snitch-original-imahy2z2j9eur69r.jpeg?q=70&crop=false",
          productUrl:
            "https://www.flipkart.com/snitch-solid-single-breasted-formal-men-blazer/p/itmd276c7b25cba0?pid=BZRHY2Z2FSSP3DVG&lid=LSTBZRHY2Z2FSSP3DVGGSHJIB&marketplace=FLIPKART&store=clo%2Fupk&srno=b_1_30&otracker=browse&fm=Search&iid=a071bba0-e060-45fa-a1c5-f9c79fc162bc.BZRHY2Z2FSSP3DVG.SEARCH&ppt=browse&ppn=browse&ssid=et3eegovow0000001728451523951",
        },
        {
          id: "1-1",
          productName: "Black Shirt",
          price: "₹723",
          rating: "★★★★★",
          url: "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/i/x/w/l-tbh-nome-bk-the-bear-house-original-imagr827huzcwcpe.jpeg?q=70&crop=false",
          productUrl:
            "https://www.flipkart.com/bear-house-men-checkered-casual-black-shirt/p/itm8bdd55b7a7930?pid=SHTGR828QYQ8XNHZ&lid=LSTSHTGR828QYQ8XNHZK8SGZD&marketplace=FLIPKART&store=clo%2Fash%2Faxc%2Fmmk%2Fkp7&srno=b_1_10&otracker=browse&fm=Search&iid=7a788b8c-907f-4281-a6ad-5e89388500e2.SHTGR828QYQ8XNHZ.SEARCH&ppt=browse&ppn=browse&ssid=w9mjr4mbi80000001728451690800",
        },
        {
          id: "1-2",
          productName: "Blue Jean",
          price: "₹389",
          rating: "★★★★★",
          url: "https://rukminim2.flixcart.com/image/832/832/xif0q/jean/i/l/u/32-mt-ss24-m-jn-dp01-07-03-metronaut-original-imah3yeyzj7qgt9d.jpeg?q=70&crop=false",
          productUrl:
            "https://www.flipkart.com/metronaut-slim-men-light-blue-jeans/p/itm2daf6dd2d7114?pid=JEAHFDGBFUYZEYZU&lid=LSTJEAHFDGBFUYZEYZUQRDUWY&marketplace=FLIPKART&store=clo%2Fvua%2Fk58%2Fi51&srno=b_1_6&otracker=browse&fm=Search&iid=en_eUzw45_vr1-L6ljUmPW1nohIR9HweVv_IUVMdbg7--qstxxtTbMe-7wTVre9_AaWAPRzL85Ps8kFVatA1VMKFOo15S0a61Wzzbg3qNOknKY%3D&ppt=browse&ppn=browse&ssid=wftrhb7sxs0000001728451812311",
        },
      ],
    },
    {
      id: 2,
      name: "kids",
      shortDescription: "Vibrant, fun, and comfy outfits for kids.",
      description:
        "Fun, durable kids' clothing for all activities, loved by both kids and parents.",
      products: [
        {
          id: "2-0",
          productName: "Army Costume",
          price: "₹320",
          rating: "★★★",
          url: "https://rukminim2.flixcart.com/image/832/832/kp2y2kw0/kid-costume-wear/q/s/5/5-5-6-years-army63-radhakrishna-textile-market-6-original-imag3efhznyptcyw.jpeg?q=70&crop=false",
          productUrl:
            "https://www.flipkart.com/s-fazluka-army-kids-costume-wear/p/itm9127267e7afa0?pid=KCWG7EX2UPGZJFAZ&lid=LSTKCWG7EX2UPGZJFAZXH4B0Q&marketplace=FLIPKART&store=clo&srno=b_1_3&otracker=browse&fm=Search&iid=bf3c7d9a-59f6-47f4-b718-dcced78d7d6e.KCWG7EX2UPGZJFAZ.SEARCH&ppt=browse&ppn=browse&ssid=ox6on0e6og0000001728451981532",
        },
        {
          id: "2-1",
          productName: "Boys Kurta",
          price: "₹309",
          rating: "★★★",
          url: "https://rukminim2.flixcart.com/image/832/832/xif0q/kids-ethnic-set/m/i/q/4-5-years-hsc-kl-collection-original-imagnf8fn2yzfdp4.jpeg?q=70&crop=false",
          productUrl:
            "https://www.flipkart.com/kl-collection-boys-festive-party-kurta-waistcoat-pyjama-set/p/itm56f5b96d736be?pid=KETGNG82QYUSRTEP&lid=LSTKETGNG82QYUSRTEP0DBJHA&marketplace=FLIPKART&store=clo%2Fcfv&srno=b_1_7&otracker=browse&fm=Search&iid=9105d295-ea49-4f2f-ade3-b9bf81423c56.KETGNG82QYUSRTEP.SEARCH&ppt=browse&ppn=browse&ssid=577jntk9kg0000001728452583592",
        },
        {
          id: "2-2",
          productName: "Girls Kurta",
          price: "₹499",
          rating: "★★★★",
          url: "https://rukminim2.flixcart.com/image/832/832/xif0q/kids-ethnic-set/i/y/8/10-11-years-meemee-vivana-original-imagh4fgfh9wd98s.jpeg?q=70&crop=false",
          productUrl:
            "https://www.flipkart.com/vivana-girls-festive-party-kurta-pyjama-dupatta-set/p/itmaca3d8c7d1508?pid=KETGH4FWRZTQ5HKG&lid=LSTKETGH4FWRZTQ5HKGDK28IM&marketplace=FLIPKART&store=clo%2Fcfv&srno=b_1_18&otracker=browse&fm=Search&iid=en_CJaJxCXYxXFnhO46vS6cjiA6mZDOCyhc1BAmu8Uo9-SkjbX0LzV2C4RN2G6jwGBO9tCuRKlQGHSHCaoCrywr2Q%3D%3D&ppt=browse&ppn=browse&ssid=k6t4djisao0000001728452686521",
        },
      ],
    },
    {
      id: 4,
      name: "accessories",
      shortDescription: "Chic accessories to complete your perfect look.",
      description:
        "Find must-have accessories to complete any outfit with style and function.",
      products: [
        {
          id: "3-0",
          productName: "Wristwatch",
          price: "₹80,999",
          rating: "★★★★★",
          url: "https://rukminim2.flixcart.com/image/832/832/xif0q/watch/d/a/x/-original-imah3nnpxbyyapqq.jpeg?q=70&crop=false",
          productUrl:
            "https://www.flipkart.com/casio-mtg-b3000dn-1adr-g-shock-analog-watch-men/p/itmc45aa0134132f?pid=WATH3GZ53Q67UGPT&lid=LSTWATH3GZ53Q67UGPTGGQMB1&marketplace=FLIPKART&q=Watch&store=r18%2Ff13&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=en_x0okX9f17k2RdQkhUpqxzLnNH9LdQ8-GNTJsaouftzt64RKPOniacBlndsiMrxNGtcPlC76D9V9NDP_6n9wdVPUFjCTyOHoHZs-Z5_PS_w0%3D&ppt=sp&ppn=sp&ssid=0wzpbrga680000001728452956534&qH=f20658650d987d31",
        },
        {
          id: "3-1",
          productName: "Sunglass",
          price: "₹399",
          rating: "★★★★",
          url: "https://rukminim2.flixcart.com/image/832/832/xif0q/sunglass/s/o/y/59-151516-vincent-chase-original-imah4easwegunfkr.jpeg?q=70&crop=false",
          productUrl:
            "https://www.flipkart.com/vincent-chase-lenskart-wayfarer-sunglasses/p/itm1737671d0bba7?pid=SGLGCRYGGAJXDT9F&lid=LSTSGLGCRYGGAJXDT9FSTSNMG&marketplace=FLIPKART&store=26x&srno=b_1_1&otracker=nmenu_sub_Men_0_Sunglasses&fm=Search&iid=en_ei2_ci3hsP-PzO5M5ArTj6mFO5Zbr71quztqaj1FCsWBQyMhAn6sKkXaVWtcPgLlm_BqXl1fOF_5CDneVeWjdPUFjCTyOHoHZs-Z5_PS_w0%3D&ppt=browse&ppn=browse&ssid=piyy4kp62o0000001728452805457",
        },
        {
          id: "3-2",
          productName: "Necklace",
          price: "₹689",
          rating: "★★★★",
          url: "https://rukminim2.flixcart.com/image/832/832/xif0q/necklace-chain/n/3/v/1-vintage-charm-white-heart-pendant-necklace-daisy-for-women-original-imah5f9fux5j9jan.jpeg?q=70&crop=false",
          productUrl:
            "https://www.flipkart.com/plata-white-heart-pendant-necklace-daisy-women-girls-premium-gold-plated-plated-stainless-steel/p/itm00e2833390765?pid=NKCHYGE7ZBKPWE6X&lid=LSTNKCHYGE7ZBKPWE6X8I5VYP&marketplace=FLIPKART&q=Necklace&store=mcr&srno=s_1_11&otracker=search&otracker1=search&fm=Search&iid=en_RfIz3ogYs_bvq4G18IN16JMz1UvWGovCFVThRYTAdJZYa4kNnS8NVXvhMq_RZGNCvRnaQr--SZchGy-YqGP_aw%3D%3D&ppt=sp&ppn=sp&ssid=7bk0vpzgow0000001728453107505&qH=e1bda4ac1fa8da51",
        },
      ],
    },
  ];

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home categoryNames={categoryNames} />} />
          <Route
            path="/mycarts"
            element={<Cart categoryNames={categoryNames} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
