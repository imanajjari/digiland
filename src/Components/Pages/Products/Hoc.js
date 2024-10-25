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

    const handlerSearch = (e) => {
      setSearch(e.target.value);
    };

    const productAxios = async () => {
      try {
        const response = await axios("https://fakestoreapi.com/products");
        setProducts(response.data);
        setFilteredItems(response.data);
      } catch (error) {
        alert("You cannot connect to API");
      }
    };

    const singleproduct = async () => {
      try {
        const data = await axios(`https://fakestoreapi.com/products/${id}`);
        setSingelproduct(data.data);
        // setLoading(false)
      } catch (error) {
        console.error("Error fetching single product", error);
      }
    };

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

    const totalproducts = () => {
      setFilteredItems(products);
    };

    useEffect(() => {
      const fetchData = async () => {
        await productAxios();
        await singleproduct();
        setLoading(false);
      };

      fetchData();
    }, []);

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
