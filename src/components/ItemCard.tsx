import '../styles/ItemCard.less';

type Props = {
    item: any;
    hasImage: boolean;
    hasButton: boolean;
}

function ItemCard(props: Props) {
    return (
        <button className={`button ${className}`} onClick={onSelect}>
            <div className="text-box">
                <p>
                    {icon && <FontIcon name={icon} type={iconType} ></FontIcon>}
                    {title}
                </p>
            </div>        
        </button>
    )
}

export default ItemCard;
