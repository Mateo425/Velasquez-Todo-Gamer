const productos = [
       {
        id:'1',
        name:'Placas',
        category:'nuevos',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc.',
        price:75,
        img:'https://picsum.photos/id/870/200/300?grayscale&blur=2',
        stock:10
        },
         {
        id:'2',
        name:'Procesadores',
        category:'ofertas',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc.',
        price:175,
        img:'https://picsum.photos/300',
        stock:15
         },
        {
        id:'3',
        name:'Notebooks',
        category:'ofertas',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc.',
        price:275,
        img:'https://picsum.photos/303',
        stock:20
        }
        
    ]

    export const getProducts = () => {
        let error = false
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                if(error){
                    reject("hubo un error")
                }else(
                    resolve(productos)
                )
            }, 2000)
            
        })
        
    }

    export const getOneProduct = (id) =>{
             let error = false
            return new Promise ((resolve, reject)=>{
                 setTimeout(()=>{
                     if(error){
                         reject('Hubo un error')
                     }else{
                         let onProduct = productos.find((item)=> item.id === id)
                        resolve(onProduct)
                    }
                 },2000)
            })
         }