export const RegularList = ({ items, sourceName, ItemComponent }) => {
    return(
        <>
            {items.map((item, i) => 
                    {
                        console.log('sourceName:', sourceName);
                        console.log('item:', item);
                        console.log('...{[sourceName]: item}', {[sourceName]: item});
                        return <ItemComponent key={i} {...{[sourceName]: item}} />;       
                    }
                )
            }
        </>
    );
}