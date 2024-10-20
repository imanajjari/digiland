import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Updatedcomponent(Originalcomponent) {
  function Newcomponent() {
    const { id } = useParams();
    const [filteredItems, setFilteredItems] = useState([]);
    const [singelproduct, setSingelproduct] = useState(null);
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    // مدیریت تغییرات جستجو
    const handlerSearch = (e) => {
      setSearch(e.target.value);
    };

    // درخواست API برای محصولات
    const productAxios = async () => {
      try {
        const response = await axios("https://fakestoreapi.com/products");
        setProducts(response.data);
        setFilteredItems(response.data);
      } catch (error) {
        alert("You cannot connect to API");
      }
    };

    // درخواست API برای یک محصول تکی
    const singleproduct = async () => {
      try {
        const data = await axios(`https://fakestoreapi.com/products/${id}`);
        setSingelproduct(data.data);
        // setLoading(false)
      } catch (error) {
        console.error("Error fetching single product", error);
      }
    };

    // تابع فیلتر کردن محصولات بر اساس جستجو
    const result = () => {
      if (search.trim() === "") {
        setFilteredItems(products);
        return;
      }
      const filtered = products.filter((elem) =>
        elem.category.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredItems(filtered);
    };

    // نمایش تمام محصولات
    const totalproducts = () => {
      setFilteredItems(products);
    };

    // فراخوانی داده‌ها هنگام بارگذاری اولیه
    useEffect(() => {
      const fetchData = async () => {
        await productAxios();
        await singleproduct();
        setLoading(false);
      };

      fetchData();
    }, []);

    // رندر کردن کامپوننت اصلی و ارسال پروپ‌های مورد نیاز
    return (
      <Originalcomponent
        result={result}
        search={search}
        handlerSearch={handlerSearch}
        filteredItems={filteredItems}
        loading={loading}
        totalproducts={totalproducts}
        singelproduct={singelproduct}
      />
    );
  }

  return Newcomponent;
}

export default Updatedcomponent;
