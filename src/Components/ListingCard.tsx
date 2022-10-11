import React from 'react'
type props={
    id: string;
  name: string;
  price: string | number;
  rooms: string | number;
  bathrooms: string | number;
  image: string;
  renter: string | undefined;
  rented_till: string;
  accumulated_rent: string;
  rented: boolean;
  user_is_host: boolean;
  onClick(): void;
}