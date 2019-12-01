import React from 'react';

import CollectionsOverview from './collections-overview.component';
import Spinner from '../spinner/spinner.component';

import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

const GET_COLLECRTIONS = gql`
  {
    collections {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const ColelctionsOverviewContainer = () => (
  <Query query={ GET_COLLECRTIONS }>
    {({ loading, data }) => {
      if (loading) return <Spinner />
      return <CollectionsOverview collections={ data.collections } />;
    }}
  </Query>
)

export default ColelctionsOverviewContainer;