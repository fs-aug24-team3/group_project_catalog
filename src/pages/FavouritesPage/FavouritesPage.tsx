import { useEffect } from 'react';
import { getCatalogPhones } from '../../api/api';
import { Favourites } from '../../components/Favourites';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { addFavourite } from '../../redux/slices/favouritesSlice';

export const FavouritesPage = () => {
  const dispatch = useDispatch();
  const favourites = useSelector(
    (state: RootState) => state.favourites.favourites,
  );

  useEffect(() => {
    getCatalogPhones()
      .then(phones => {
        phones.forEach(phone => {
          dispatch(addFavourite(phone));
        });
      })
      .catch(() => 'Unable to load phones catalog');
  }, [dispatch]);

  return (
    <>
      {favourites.length > 0 ? (
        <Favourites title="Favourites" />
      ) : (
        <p>No favourites added yet.</p>
      )}
    </>
  );
};
