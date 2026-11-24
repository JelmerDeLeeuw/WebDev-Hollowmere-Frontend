import '../../styles/ItemCardArmory.less';
import Button from '../../components/Button';
import notFoundImg from '../../assets/notfound.png';

type Props = {
    item: any;
    onBorrow: (item: any) => void;
}

function ItemCardArmory(props: Props) {
    return (
        <div className="item-container">
            <img src={`/src/assets/armory/armory_${props.item.id}.png`} className="image" onError={(e) => e.target.src = notFoundImg} />
            <div className="field-container">
                <p className="field-name">Name:</p>
                <p className="field-value">{props.item.name}</p>
            </div>
            <div className="field-container">
                <p className="field-name">Description:</p>
                <p className="field-value">{props.item.armoryType.description}</p>
            </div>
            <div className="field-container">
                <p className="field-name">Training level:</p>
                <p className="field-value">{props.item.trainingLevel.name}</p>
            </div>

            <Button title="Borrow" className="borrow-button" onSelect={() => props.onBorrow(props.item)}/> 
        </div>
    )
}

export default ItemCardArmory;
