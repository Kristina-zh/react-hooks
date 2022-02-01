import { useContext } from 'react';

import classes from './MeetupItem.module.css';
import Card from '../ui/Card';
import FavoritesContext from '../../store/favorites-context';

const MeetupItem = ({id, image, title, address, description}) => {
    const favoriteCtx = useContext(FavoritesContext);

    const itemIsFavorite = favoriteCtx.itemIsFavorite(id)

    function toggleFavoritesStatusHendlel() {
        itemIsFavorite ? favoriteCtx.removeFavorite(id) : favoriteCtx.addFavorite({id, image, title, address, description})
    }

    return (
        <Card>
            <li className={classes.item}>
                <div className={classes.image}>
                    <img src={image} alt={title}/>
                </div>
                <div className={classes.content}>
                    <h3 className={classes.title}>{title}</h3>
                    <address className={classes.address}>{address}</address>
                    <p className={classes.description}>{description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoritesStatusHendlel}>{itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}</button>
                </div>
            </li>
        </Card>)
};

export default MeetupItem