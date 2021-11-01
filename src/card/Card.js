import React from "react";
import { CardHeader, Card,CardBody } from "reactstrap";

export default function ItemCard({title,list}){
    return(
        <Card className="my-1">
        <CardHeader tag='h5' className='py-1'>{title}</CardHeader>
        <CardBody style={{height:"42vh"}} className="p-2">
        
            {list.map((item,i) => <Item key={i} item={item} i={i} active={i===0} />)}
      
        </CardBody>
      </Card>
    )
}

function Item({item,i, active}){
    return(
        <div className={`d-flex flex-direction-row justify-content-between p-1 ${active ? 'bg-primary text-white font-weight-bold rounded' : ''}`} style={{fontSize:18}}>
            <span>{item.name1}</span>
            <span>{i+ 1}</span>

        </div>
    )
}




