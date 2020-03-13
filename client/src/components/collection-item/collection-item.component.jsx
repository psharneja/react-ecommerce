  
import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;


//   // import React from 'react';
//   // import { connect } from 'react-redux';

//   // import { addItem } from '../../redux/cart/cart.actions';

//   // import {
//   //   CollectionItemContainer,
//   //   CollectionFooterContainer,
//   //   AddButton,
//   //   BackgroundImage,
//   //   NameContainer,
//   //   PriceContainer
//   // } from './collection-styles.styles';

//   // const CollectionItem = ({ item, addItem }) => {
//   //   const { name, price, imageUrl } = item;

//   //   return (
//   //     <CollectionItemContainer>
//   //       <BackgroundImage className='image' imageUrl={imageUrl} />
//   //       <CollectionFooterContainer>
//   //         <NameContainer>{name}</NameContainer>
//   //         <PriceContainer>{price}</PriceContainer>
//   //       </CollectionFooterContainer>
//   //       <AddButton onClick={() => addItem(item)} inverted>
//   //         Add to cart
//   //       </AddButton>
//   //     </CollectionItemContainer>
//   //   );
//   // };

//   // const mapDispatchToProps = dispatch => ({
//   //   addItem: item => dispatch(addItem(item))
//   // });

//   // export default connect(
//   //   null,
//   //   mapDispatchToProps
//   // )(CollectionItem);

//   import styled from 'styled-components';
// import CustomButton from '../custom-button/custom-button.component';

// export const CollectionItemContainer = styled.div`
//   width: 22vw;
//   display: flex;
//   flex-direction: column;
//   height: 350px;
//   align-items: center;
//   position: relative;
//   &:hover {
//     .image {
//       opacity: 0.8;
//     }
//     button {
//       opacity: 0.85;
//       display: flex;
//     }
//   }
// `;

// export const AddButton = styled(CustomButton)`
//   width: 80%;
//   opacity: 0.7;
//   position: absolute;
//   top: 255px;
//   display: none;
// `;

// export const BackgroundImage = styled.div`
//   width: 100%;
//   height: 95%;
//   background-size: cover;
//   background-position: center;
//   margin-bottom: 5px;
//   background-image: ${({ imageUrl }) => `url(${imageUrl})`};
// `;

// export const CollectionFooterContainer = styled.div`
//   width: 100%;
//   height: 5%;
//   display: flex;
//   justify-content: space-between;
//   font-size: 18px;
// `;

// export const NameContainer = styled.span`
//   width: 90%;
//   margin-bottom: 15px;
// `;

// export const PriceContainer = styled.span`
//   width: 10%;
//   text-align: right;
// `;