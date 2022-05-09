const menu = [
    {
        id: 1,
        title: "Kimbap",
        category: "Korea",
        price: 9.99,
        img: "https://i.nefisyemektarifleri.com/2019/07/10/sira-disi-lezzetler-10-geleneksel-kore-yemegi.jpg",
        desc: `Pirinç, pirinç sirkesi, avokado, yosun ve yengeç çubuklarından hazırlanan bu karma lezzet, Kore yemeklerinin meşhur olanlarından sadece biridir.`,
    },
    {
        id: 2,
        title: "Kimchi",
        category: "Korea",
        price: 12.99,
        img: "https://i.nefisyemektarifleri.com/2019/07/10/sira-disi-lezzetler-10-geleneksel-kore-yemegi-1.jpg",
        desc: `Çin marulu ve zencefil ile hazırlanan, havuç ve sarımsak ile aroma kazanan bir ara yemektir.`,
    },
    {
        id: 3,
        title: "Tamagoyaki",
        category: "Japan",
        price: 12.99,
        img: "https://i.nefisyemektarifleri.com/2015/07/09/japon-omleti-tamagoyaki-500x333.jpg",
        desc: `Yumurta, şeker, tuz, taze soğan ve sıvı yağ kullanılarak hazırlanır`,
    },
    {
        id: 4,
        title: "Onigiri",
        category: "Japan",
        price: 8.99,
        img: "https://i.nefisyemektarifleri.com/2016/02/03/japon-onigiri-pirinc-toplari-500x333.jpg",
        desc: `Pirinç, tuz, su, karabiber, ton balığı, ketçap, mayonez, susam ve çörek otu kullanılarak hazırlanır`,
    },
    {
        id: 5,
        title: "Spring Roll",
        category: "China",
        price: 7.99,
        img: "https://i.nefisyemektarifleri.com/2014/11/cin-boregi-spring-roll-1-500x333.jpg",
        desc: `Farklı bir tarif, çoğu Çin böreğine nazaran daha leziz ve aromatik. Bu aromatik olma özelliğini çeşitli baharatlar böreğe sağlıyor.`,
    },
    {
        id: 6,
        title: "Sushi",
        category: "China",
        price: 13.99,
        img: "https://i.nefisyemektarifleri.com/2015/02/07/evde-sushi-yapimi-fot1-500x333.jpg",
        desc: `Farklı bir tarif, Asıl kültürü japonlara dayansa da çinlilerde sıkça tüketir.`,
    }
]

const section = document.querySelector(".section-center")
const btnContainer = document.querySelector(".btn-container")

const categories = menu.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["All"]
  );

  const categoryList = () => {
    const categoryBtns = categories
      .map((category) => {
        return `<button class="btn btn-outline-dark btn-item" data-id=${category}>${category}</button>`;
      })
      .join("");
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll(".btn-item");
  
    //filter menu
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const category = e.currentTarget.dataset.id;
        console.log(category);
        const menuCategory = menu.filter((menuItem) => {
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === "All") {
          menuList(menu);
        } else {
          menuList(menuCategory);
        }
      });
    });
  };
  
  const menuList = (menuItems) => {
    let displayMenu = menuItems.map((item) => {
      return `<div class="menu-items col-lg-6 col-sm-12">
              <img
                src=${item.img}
                alt=${item.title}
                class="photo"
              />
              <div class="menu-info">
                <div class="menu-title">
                  <h4>${item.title}</h4>
                  <h4 class="price">${item.price}</h4>
                </div>
                <div class="menu-text">
                  ${item.desc}
                </div>
              </div>
            </div>
      `;
    });
    displayMenu = displayMenu.join("");
    section.innerHTML = displayMenu;
  };
  
  menuList(menu);
  categoryList();
  