import axios from "axios";

export async function getAllProducts()
{
    return await axios.get("http://localhost:8080/product/all");
}
export async function getPageProducts(ind)
{
    return await axios.get("http://localhost:8080/product/"+ind);
}
export async function getCantProducts()
{
    return await axios.get("http://localhost:8080/product/cant");
}
export async function getByNameProducts(name)
{
    return await axios.get("http://localhost:8080/product/name?name="+name);
}