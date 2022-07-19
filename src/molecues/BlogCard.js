import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'

const BlogCard = ({item}) => {
    console.log(item.title)
  return (
    <div>
        <Card style={{ width: '23rem' }}>
  <Card.Img variant="top" src={item.image} />
  <Card.Body>
    <Card.Title>{item.title}</Card.Title>
    <Card.Text>
      {item.content}
    </Card.Text>
  </Card.Body><hr/>

  <div className='d-flex justify-content-between p-2'>
    <div className='pointer'> <span className='m-1'> {item.view}</span> <span>  {item.comment}</span> </div>
    <div>   <img src={item.img} className="d-block w-100 pointer "/> </div>
  
  </div>
</Card>
    </div>
  )
}

export default BlogCard