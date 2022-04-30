import { GraphQLClient, gql } from 'graphql-request';

// Client Object
export const graphCMSClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_GRAPHCMS_URL as string
);

// Queries
export const getDestination = gql`
  query getDestination($slug: String!) {
    destination(where: { slug: $slug }) {
      id
      name
      description
      main {
        id
        url(transformation: { image: { resize: { fit: clip, width: 800 } } })
      }
      mainalt
      secondimage {
        id
        url(transformation: { image: { resize: { fit: clip, width: 800 } } })
      }
      secondalt
      thirdimage {
        id
        url(transformation: { image: { resize: { fit: clip, width: 800 } } })
      }
      thirdalt
      fourthimage {
        id
        url(transformation: { image: { resize: { fit: clip, width: 800 } } })
      }
      fourthalt
      viewport {
        latitude
        longitude
      }
      zoomlevel
      mapitems(orderBy: name_ASC) {
        id
        name
        coordinate {
          latitude
          longitude
        }
        link
      }
    }
  }
`;

export const getDestinationSlugs = gql`
  query getDestinationSlugs {
    destinations {
      id
      slug
    }
  }
`;

export const getFeaturedDestinationsAndTestimonials = gql`
  query getFeaturedDestinationsAndTestimonials {
    destinations(orderBy: featured_ASC, where: { featured: true }) {
      id
      name
      slug
      main {
        id
        url(transformation: { image: { resize: { fit: clip, width: 700 } } })
      }
      mainalt
    }
    testimonials(orderBy: order_ASC) {
      id
      quote
      name
      organization
    }
  }
`;

export const getDestinations = gql`
  query getDestinations {
    destinations(orderBy: name_ASC) {
      id
      name
      description
      slug
      main {
        id
        url(transformation: { image: { resize: { fit: clip, width: 600 } } })
      }
      mainalt
    }
  }
`;

export const getDestinationsSitemap = gql`
  query getDestinationsSitemap {
    destinations(orderBy: name_ASC) {
      id
      name
      slug
    }
  }
`;

export const getEmployees = gql`
  query getEmployees {
    employees {
      id
      name
      biography
      quote
      email
    }
  }
`;

// Types
export interface DestinationType {
  id: string;
  name: string;
  slug: string;
  description: string;
  main: ImageType;
  mainalt: string;
  secondimage: ImageType;
  secondalt: string;
  thirdimage: ImageType;
  thirdalt: string;
  fourthimage: ImageType;
  fourthalt: string;
  mapitems: MapItemType[];
  featuredsort: number;
  viewport: ViewportType;
  zoomlevel: number;
}

export interface TestimonialType {
  id: string;
  quote: string;
  name: string;
  organization: string;
  position: string;
  order: number;
}

export interface EmployeeType {
  id: string;
  name: string;
  biography: string;
  quote: string;
  email: string;
}

interface ImageType {
  id: string;
  url: string;
  alt: string;
}

interface ViewportType {
  latitude: number;
  longitude: number;
}

export interface MapItemType {
  id: string;
  name: string;
  link: string;
  coordinate: {
    latitude: number;
    longitude: number;
  };
}
