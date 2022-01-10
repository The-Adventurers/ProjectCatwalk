import React from 'react';
import { screen, render } from '@testing-library/react';
import { test } from '@jest/globals';
import App from '../client/src/components/App';
import RelatedProductList from '../client/src/components/relatedProducts/RelatedProductList.jsx';
import OutfitList from '../client/src/components/relatedProducts/OutfitList.jsx';

describe('Related Component', function () {
  it('should contain "RELATED PRODUCTS"', function () {
    render(
      <RelatedProductList />
    );
    expect(screen.getByText('RELATED PRODUCTS')).toBeDefined();
  });
});

describe('Related Component', function () {
  it('should contain "YOUR OUTFIT"', function () {
    render(
      <OutfitList />
    );
    expect(screen.getByText('YOUR OUTFIT')).toBeDefined();
  });
});