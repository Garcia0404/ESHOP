import React, { useContext } from 'react'
import { Autocomplete, AutocompleteItem } from '@nextui-org/react'
import { UsuarioContext } from '../../context/AppContext';
export const Filters = () => {
  const { setSelected } = useContext(UsuarioContext)
  const products = [
    {label: "All", value: "all"},
    {label: "Clothes", value: "1"},
    {label: "Electronics", value: "2"},
    {label: "Furniture", value: "3"},
    {label: "Shoes", value: "4"},
    {label: "Miscellaneous", value: "5"}
  ];
  return (
    <Autocomplete
      label="Categories"
      className="max-w-xs"
    >
      {products.map((product,index) => (
        <AutocompleteItem key={product.value} onClick={(e)=>setSelected(`/?categoryId=${index}`)} value={product.value}>
          {product.label}
        </AutocompleteItem>
      ))}
    </Autocomplete>
  )
}
