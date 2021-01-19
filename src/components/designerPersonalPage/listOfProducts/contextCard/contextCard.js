import React, {useEffect, useState} from 'react';
import style from './contextCard.module.css';
import Input from '../../UI/input/input';
import Button from '../../UI/button/button';
import SizeCheckBox from '../../UI/sizeCheckBox/sizeCheckBox';
import Select from '../../UI/select/select';
import InputImage from '../../UI/inputImage/inputImage';
import {connect} from 'react-redux';
import {
  fetchClothes,
  fetchCollections,
  fetchMaterials, fetchSeasons,
} from '../../../../store/designerPersonalPageStore/actions/addProductAction';
import {Link} from 'react-router-dom';

const inputs = [
  {label: 'Название', id: '13', name: 'name'},
  {label: 'Цена', id: '14', name: 'price'},
];

const selects = [
  {name: 'Мужской', id: Math.random()},
  {name: 'Женский', id: Math.random()},
]

const checkBoxes = [
  {id: '100', title: 'XS'},
  {id: '101', title: 'S'},
  {id: '102', title: 'M'},
  {id: '104', title: 'S'},
];

const imageInputs = ['image1', 'image2', 'image3', 'image4'];

const ContextCard = ({
                       onClickHandler,
                       title,
                       titleBtn,
                       fetchMaterials,
                       materials,
                       fetchCollection,
                       collection,
                       fetchSeasons,
                       seasons,
    fetchClothes, clothes
                     }) => {

  const [toggle, setToggle] = useState(false);


  const loadDataFromServer = async func => {
    await func()
  }

  useEffect(() => {
    loadDataFromServer(fetchClothes)
    loadDataFromServer(fetchSeasons)
    loadDataFromServer(fetchMaterials)
    loadDataFromServer(fetchCollection)
  }, []);

  const toggleInStock = () => {
    setToggle(false);
  };
  const toggleOrder = () => {
    setToggle(true);
  };

  const renderInputs = () => {
    return inputs.map((input, index) => {
      return (
          <Input
              key={index}
              id={input.id}
              label={input.label}
          />
      );
    });
  };

  const renderCheckBox = () => {
    return checkBoxes.map((item, index) => {
      return (
          <SizeCheckBox
              key={index}
              id={item.id}
              title={item.title}
          />
      );
    });
  };

  const renderImageInput = () => {
    return imageInputs.map((item, index) => {
      return (
          <InputImage
              key={index}
              id={item}
          />
      );
    });
  };

  const renderSelectMaterials = () => {
    return (
        <Select
            options={materials}
            label={'Материалы'}
        />
    );
  };

  const renderSelectCollections = () => {
    return (
        <Select
            options={collection}
            label={'Коллекция'}
        />
    );
  };

  const renderSelectSeasons = () => {
    return (
        <Select
            options={seasons}
            label={'Сезон'}
        />
    );
  };

  const renderSelectClothes = () => {
    return (
        <Select
            options={clothes}
            label={'Тип одежды'}
        />
    );
  };

  return (
      <div className={style.addProductBlock}>
        <img onClick={onClickHandler}
             src={require('../../../../assets/img/close_icon.svg')}
             className={style.closeIcon}/>
        <div className={style.title}>{title}</div>
        <div className={style.image}>
          {renderImageInput()}
        </div>
        <div className={style.menu}>
          <div onClick={toggleInStock} className={style.itemMenu1}>В наличии
          </div>
          <div onClick={toggleOrder} className={style.itemMenu2}>Под заказ</div>
        </div>
        <div className={style.inputs}>
          {renderInputs()}
          <Select options={selects} label={'Пол'} id={Math.random()}/>
          {collection ? renderSelectCollections() : null}
          {seasons ? renderSelectSeasons() : null}
          {clothes ? renderSelectClothes() : null}
          {materials ? renderSelectMaterials() : null}
          {/*{renderSelect()}*/}
          {toggle ? <Select options={['test']} label={'Узор'} id={'30'}/> : null}
        </div>

        {!toggle ? <div className={style.sizes}>
          <span>Размер:</span>
          <div>
            {renderCheckBox()}
          </div>
        </div> : null}


        <div className={style.btn}>
          <Button
              width={'138px'}
              height={'48px'}
              title={titleBtn}
          />
          <span>
            <Link to={'/listOfProducts'}>Отмена</Link>
          </span>
        </div>
      </div>
  );
};

function matStateToProps(state) {
  return {
    materials: state.materialReducer.materials,
    collection: state.materialReducer.collection,
    seasons: state.materialReducer.seasons,
    clothes: state.materialReducer.clothes,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchMaterials: () => dispatch(fetchMaterials()),
    fetchCollection: () => dispatch(fetchCollections()),
    fetchSeasons: () => dispatch(fetchSeasons()),
    fetchClothes: () => dispatch(fetchClothes()),
  };
}

export default connect(matStateToProps, mapDispatchToProps)(ContextCard);