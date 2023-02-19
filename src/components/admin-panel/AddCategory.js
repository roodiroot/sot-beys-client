import React, { useState } from 'react';
import { createCategory } from '../../http/categoryApi';
import AddBlockComponent from './AddBlockComponent';

function AddCategory() {
  const [categoryName, setCategoryName] = useState('');
  const [categoryFile, setCategoryFile] = useState(null);

  const addCategoryItem = () => {
    const formData = new FormData();
    formData.append('name', categoryName);
    formData.append('img', categoryFile);
    createCategory(formData).then((i) => {
      setCategoryName('');
    });
    // console.log(categoryFile);
  };

  return (
    <AddBlockComponent
      valueFile={categoryFile}
      valueInput={categoryName}
      setValueFile={setCategoryFile}
      setValueInput={setCategoryName}
      addCategoryItem={addCategoryItem}>
      Добавление категории товара
    </AddBlockComponent>
  );
}
export default AddCategory;
