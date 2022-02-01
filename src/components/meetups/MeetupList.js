import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

const MeetupList = ({data}) => {
    return <ul className={classes.list}>
        {data.map(v => <
            MeetupItem 
                key={v.id} 
                id={v.id} 
                image={v.image}
                title={v.title}
                address={v.address}
                description={v.description}
            />)}
    </ul>
};

export default MeetupList;