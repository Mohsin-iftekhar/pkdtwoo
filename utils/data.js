import bcrypt from 'bcryptjs'
const data={
    users:[
{
    name:'Johm',
    email:'admin@mss.com',
    password:bcrypt.hashSync('123456'),
    isAdmin:true,
},
{
    name:'John',
    email:'user@mss.com',
    password:bcrypt.hashSync('123456'),
    isAdmin:false,
}
    ],
    products:[
        {
            name:"shirt",
            slug:'free',
            category:"Shirts",
            image:"/images/pants1.jpg",
            price:70,
            brand:"Nike",
            rating:4.5
,
numReviews:8,
countInStock:20,
description:"good shirt",
},
{
    name:"shirt2",
    slug:'slim',
    category:"Shirts",
    image:"/images/pants1.jpg",
    price:70,
    brand:"Nike",
    rating:4.5
,
numReviews:8,
countInStock:20,
description:"good shirt",
},
{
    name:"shirt3",
    slug:'free2',
    category:"Shirts",
    image:"/images/pants1.jpg",
    price:70,
    brand:"Nike",
    rating:4.5
,
numReviews:8,
countInStock:20,
description:"good shirt",
},
{
    name:"pant",
    slug:'free3',
    category:"Pants",
    image:"/images/pants1.jpg",
    price:70,
    brand:"Nike",
    rating:4.5
,
numReviews:8,
countInStock:20,
description:"good shirt",
},
{
    name:"pant2",
    slug:'free4',
    category:"Pants",
    image:"/images/pants1.jpg",
    price:70,
    brand:"Nike",
    rating:4.5
,
numReviews:8,
countInStock:20,
description:"good shirt",
},
    ]
};
export default data;