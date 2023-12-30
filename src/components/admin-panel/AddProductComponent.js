// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setSelectedBrandLine } from '../../features/brand-line/brandLineSlice';
// import { setSelectedCategory } from '../../features/category/categorySlice';
// import { createProductItem } from '../../http/productApi';
// import ButtonComponent from '../ButtonComponent';
// import InputComponent from '../card-page-components/InputComponent';
// import InputFileComponent from '../card-page-components/InputFileComponent';
// import SelectInputComponent from '../card-page-components/SelectInputComponent';

// function AddProductComponent({ children }) {
//   const { categories, selectedCategory } = useSelector((state) => state.category);
//   const { brandLines, selectedBrendLine } = useSelector((state) => state.brandLine);
//   const [name, setName] = useState('');
//   const [file, setFile] = useState([]);
//   const [price, setPrice] = useState(0);
//   const [info, setInfo] = useState([]);

//   const addInfo = () => {
//     setInfo([...info, { id: Date.now(), title: '', description: '' }]);
//   };
//   const deleteInfo = (id) => {
//     setInfo(info.filter((i) => i.id !== id));
//   };

//   const addProduct = () => {
//     const formData = new FormData();
//     formData.append('name', name);
//     formData.append('price', `${price}`);
//     for (let i = 0; i < file.length; i++) {
//       formData.append('img', file[i]);
//     }
//     formData.append('categoryId', selectedCategory.id);
//     formData.append('brandLineId', selectedBrendLine.id);
//     formData.append('info', JSON.stringify(info));
//     createProductItem(formData).then((i) => console.log('успех'));
//   };

//   return (
//     <div className="adminPanel__addBlock">
//       <div className="adminPanel__title">{children}</div>
//       <SelectInputComponent
//         selectedStore={setSelectedCategory}
//         value={selectedCategory.name}
//         arrey={categories}
//         style={{ marginBottom: '2rem' }}>
//         Выбирите категорию
//       </SelectInputComponent>
//       <SelectInputComponent
//         selectedStore={setSelectedBrandLine}
//         value={selectedBrendLine.name}
//         arrey={brandLines}
//         style={{ marginBottom: '2rem' }}>
//         Выбирите Брендовую линейку
//       </SelectInputComponent>
//       <InputComponent value={name} setValue={setName} style={{ marginBottom: '2rem' }}>
//         Название продукта
//       </InputComponent>
//       <InputComponent
//         value={price}
//         setValue={setPrice}
//         type="number"
//         style={{ marginBottom: '2rem' }}>
//         Цена продукта
//       </InputComponent>
//       <InputFileComponent setValue={setFile} style={{ marginBottom: '2rem' }}>
//         Загрузите изображения (max 5 изображений)
//       </InputFileComponent>
//       <ButtonComponent
//         onClick={addInfo}
//         style={{ marginBottom: '2rem', background: '#6a3cc5' }}
//         variant="cvadro">
//         Добавить описание
//       </ButtonComponent>
//       <div className="infoList">
//         {info?.map((row) => (
//           <div key={row.id} className="infoLine">
//             <InputComponent style={{ width: '100%' }}>Название </InputComponent>
//             <InputComponent style={{ width: '100%' }}>Описание</InputComponent>
//             <ButtonComponent
//               style={{ background: '#6a3cc5', alignSelf: 'flex-end' }}
//               onClick={(e) => deleteInfo(row.id)}
//               variant="cvadro">
//               -
//             </ButtonComponent>
//           </div>
//         ))}
//       </div>
//       <ButtonComponent onClick={addProduct} variant="cvadro">
//         Добавить товар
//       </ButtonComponent>
//     </div>
//   );
// }

// export default AddProductComponent;
